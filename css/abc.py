from ddgs import DDGS
from ddgs.exceptions import DDGSException
import requests
import zipfile
import time
from pathlib import Path
import logging

# ================== CONFIG ==================
OUTPUT_DIR = Path("product_pngs")
ZIP_NAME = "product_images_png.zip"

RATE_LIMIT_DELAY = 4          # seconds (safe)
REQUEST_TIMEOUT = 15
MIN_IMAGE_SIZE = 2000         # bytes
MAX_IMAGE_SIZE = 5 * 1024 * 1024  # 5 MB
MAX_RESULTS = 8

# ================== PRODUCT LIST ==================
PRODUCT_CATEGORIES = [
    "LT control panel",
    "MCCB electrical switchgear",
    "MCB electrical switch",
    "ACB air circuit breaker",
    "industrial contactor",
    "PLC automation controller",
    "HMI touch panel industrial",
    "VFD drive industrial",
    "limit switch industrial",
    "industrial ethernet switch",
    "inductive proximity sensor",
    "MCCB molded case circuit breaker",
    "MCB miniature circuit breaker",
    "SFU switch fuse unit",
    "electrical contactor",
    "MPCB motor protection circuit breaker",
    "control relay industrial",
    "power relay electrical",
    "thermal overload relay",
    "machine safety switch",
    "door safety interlock switch",
    "emergency stop switch",
    "safety relay",
    "SMPS power supply industrial",
    "DIN rail power supply",
    "LED high bay light",
    "LED flood light",
    "LED street light",
    "CNC machine light",
    "VMC machine light",
    "COB LED light",
    "LED spot light",
    "photoelectric sensor industrial",
    "RTD temperature sensor",
    "industrial UPS system",
    "industrial electric motor",
    "industrial gearbox",
    "industrial power tools",
    "pneumatic tools industrial",
    "armoured electrical cable",
    "brass cable gland",
    "industrial power connector",
    "cable tray industrial",
    "terminal block electrical",
    "DIN rail electrical",
    "ABS electrical enclosure",
    "digital multimeter industrial",
    "clamp meter electrical",
    "industrial bearing",
    "V belt industrial",
    "industrial electrical switch socket",
    "thermal imaging camera industrial"
]

# ================== LOGGING ==================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)
log = logging.getLogger(__name__)

# ================== HELPERS ==================
def safe_name(name: str) -> str:
    return name.lower().replace(" ", "_").replace("/", "_")

def is_valid_png(content: bytes) -> bool:
    if not content.startswith(b"\x89PNG"):
        return False
    if not (MIN_IMAGE_SIZE <= len(content) <= MAX_IMAGE_SIZE):
        return False
    return True

def download_png(url: str, path: Path) -> bool:
    try:
        headers = {
            "User-Agent": "Mozilla/5.0",
            "Accept": "image/png,image/*;q=0.8"
        }
        r = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
        r.raise_for_status()

        if not is_valid_png(r.content):
            return False

        path.write_bytes(r.content)
        return True
    except Exception:
        return False

def log_failed_product(query: str):
    with open("failed_products.txt", "a", encoding="utf-8") as f:
        f.write(query + "\n")

# ================== CORE ==================
def fetch_product_image(query: str, ddgs: DDGS) -> bool:
    filename = safe_name(query) + ".png"
    filepath = OUTPUT_DIR / filename

    # Resume-safe
    if filepath.exists():
        log.info(f"⏭️ {query}: already exists")
        return True

    try:
        results = ddgs.images(
            query=f"{query} png",
            max_results=MAX_RESULTS
        )
    except DDGSException:
        log.warning(f"❌ {query}: no results from DuckDuckGo")
        log_failed_product(query)
        return False
    except Exception as e:
        log.error(f"❌ {query}: unexpected error → {e}")
        log_failed_product(query)
        return False

    if not results:
        log.warning(f"❌ {query}: empty image list")
        log_failed_product(query)
        return False

    for r in results:
        url = r.get("image") or r.get("thumbnail")
        if not url:
            continue

        if ".png" not in url.lower():
            continue

        if download_png(url, filepath):
            size_kb = filepath.stat().st_size / 1024
            log.info(f"✅ {query} ({size_kb:.1f} KB)")
            return True

    log.warning(f"❌ {query}: PNG not valid or download failed")
    log_failed_product(query)
    return False

# ================== ZIP ==================
def create_zip():
    files = list(OUTPUT_DIR.glob("*.png"))
    if not files:
        log.error("No images downloaded. ZIP not created.")
        return

    with zipfile.ZipFile(ZIP_NAME, "w", zipfile.ZIP_DEFLATED) as z:
        for f in files:
            z.write(f, f.name)

    total_mb = sum(f.stat().st_size for f in files) / 1024 / 1024
    log.info(f"📦 Created {ZIP_NAME} ({len(files)} images, {total_mb:.2f} MB)")

# ================== MAIN ==================
def main():
    OUTPUT_DIR.mkdir(exist_ok=True)

    # Remove duplicates safely
    products = list(dict.fromkeys(PRODUCT_CATEGORIES))

    log.info("=" * 60)
    log.info("PRODUCT / PART PNG DOWNLOADER (NO API)")
    log.info("=" * 60)
    log.info(f"Categories: {len(products)}")
    log.info("")

    success = 0
    start = time.time()

    with DDGS() as ddgs:
        for i, product in enumerate(products, 1):
            log.info(f"[{i}/{len(products)}] {product}")
            if fetch_product_image(product, ddgs):
                success += 1
            time.sleep(RATE_LIMIT_DELAY)

    elapsed = (time.time() - start) / 60
    log.info("")
    log.info("=" * 60)
    log.info(f"Downloaded: {success}/{len(products)}")
    log.info(f"Time taken: {elapsed:.1f} minutes")
    log.info("=" * 60)

    if success:
        create_zip()

# ================== ENTRY ==================
if __name__ == "__main__":
    main()

