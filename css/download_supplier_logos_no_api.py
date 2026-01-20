from ddgs import DDGS
import requests
import os
import zipfile
import time
from pathlib import Path
import logging

# ==================== LOGGING ====================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# ==================== CONFIG ====================
OUTPUT_DIR = Path("logos")
ZIP_FILENAME = "supplier_logos.zip"

REQUEST_TIMEOUT = 15
RATE_LIMIT_DELAY = 5          # seconds (safe for DuckDuckGo)
MAX_RESULTS_PER_QUERY = 8
MIN_IMAGE_SIZE = 1500         # bytes
MAX_IMAGE_SIZE = 5 * 1024 * 1024  # 5MB

SUPPLIERS = [
    "SCHNEIDER ELECTRIC","SIEMENS","FUJI ELECTRIC","C&S","L&T","LEGRAND","DELTA",
    "MITSUBISHI ELECTRIC","SCHMERSAL","SICK","OMRON","P&F","ABB","MURR",
    "WERNER ELECTRIC","TELTONIKA","MEANWELL","TRINITY TOUCH","TEKNIC","WAGO",
    "CONNECTWELL","PHOENIX CONTACT","PHOENIX MECCANO","HUMMEL CONNECTOR",
    "HARTING","KOSMOS","SIBBAS","SELEC","MULTISPAN","JIGO","APC",
    "VERTIV EMERSON","HIOKI","FLIR","FLUKE","TESTO","MECO","RR",
    "POLYCAB CABLE","LAPP","TAPARIA","BOSCH","MAKITA","STANLEY",
    "RITTAL PANEL","ELDON PANEL","SKF BEARING","HIWIN","DANFOSS",
    "FESTO","SMC","YUKEN","BONFIGLIOLI","KIRLOSKAR","ANCHOR",
    "PHILIPS","OREVA","CROMPTON","ALMONARD","HAVELLS"
]

# ==================== HELPERS ====================
def safe_filename(name: str) -> str:
    return name.replace(" ", "_").replace("&", "AND").replace("/", "_")

def valid_image(content: bytes) -> bool:
    if content.strip().startswith(b"<svg"):
        return True
    if not (MIN_IMAGE_SIZE <= len(content) <= MAX_IMAGE_SIZE):
        return False
    return content.startswith((
        b"\x89PNG",     # PNG
        b"\xFF\xD8\xFF",# JPG
        b"GIF",         # GIF
        b"RIFF",        # WEBP
        b"BM"           # BMP
    ))

def download_image(url: str, path: Path) -> bool:
    try:
        headers = {
            "User-Agent": "Mozilla/5.0",
            "Accept": "image/*,*/*;q=0.8"
        }
        r = requests.get(url, timeout=REQUEST_TIMEOUT, headers=headers)
        r.raise_for_status()

        if not valid_image(r.content):
            return False

        path.write_bytes(r.content)
        return True
    except Exception:
        return False

# ==================== CORE LOGIC ====================
def fetch_logo(supplier: str, ddgs: DDGS) -> bool:
    queries = [
        f"{supplier} logo",
        f"{supplier} official logo",
        f"{supplier} company logo",
        f"{supplier} brand logo"
    ]

    base_name = safe_filename(supplier)

    for query in queries:
        try:
            results = list(ddgs.images(
                query=query,
                max_results=MAX_RESULTS_PER_QUERY
            ))

            for r in results:
                url = r.get("image") or r.get("thumbnail")
                if not url:
                    continue

                ext = ".svg" if url.lower().endswith(".svg") else ".png"
                path = OUTPUT_DIR / f"{base_name}{ext}"

                if download_image(url, path):
                    size_kb = path.stat().st_size / 1024
                    logger.info(f"✅ {supplier} ({size_kb:.1f} KB)")
                    return True

        except Exception:
            continue

    logger.warning(f"❌ {supplier}: logo not found")
    return False

# ==================== ZIP ====================
def create_zip():
    files = list(OUTPUT_DIR.glob("*"))
    if not files:
        logger.error("No logos downloaded. ZIP not created.")
        return

    with zipfile.ZipFile(ZIP_FILENAME, "w", zipfile.ZIP_DEFLATED) as z:
        for f in files:
            z.write(f, f.name)

    total_mb = sum(f.stat().st_size for f in files) / 1024 / 1024
    logger.info(f"📦 Created {ZIP_FILENAME} ({len(files)} logos, {total_mb:.2f} MB)")

# ==================== MAIN ====================
def main():
    OUTPUT_DIR.mkdir(exist_ok=True)

    logger.info("=" * 60)
    logger.info("SUPPLIER LOGO DOWNLOADER (NO API)")
    logger.info("=" * 60)
    logger.info(f"Suppliers: {len(SUPPLIERS)}")
    logger.info("")

    success = 0
    start = time.time()

    with DDGS() as ddgs:
        for i, supplier in enumerate(SUPPLIERS, 1):
            logger.info(f"[{i}/{len(SUPPLIERS)}] {supplier}")
            if fetch_logo(supplier, ddgs):
                success += 1
            time.sleep(RATE_LIMIT_DELAY)

    elapsed = (time.time() - start) / 60
    logger.info("")
    logger.info("=" * 60)
    logger.info(f"Downloaded: {success}/{len(SUPPLIERS)}")
    logger.info(f"Time taken: {elapsed:.1f} minutes")
    logger.info("=" * 60)

    if success:
        create_zip()

if __name__ == "__main__":
    main()
