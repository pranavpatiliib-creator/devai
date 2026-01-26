from ddgs import DDGS
from ddgs.exceptions import DDGSException
import requests
import time
import zipfile
import logging
from pathlib import Path

# ================== CONFIG ==================
OUTPUT_DIR = Path("placeholder_product_pngs")
ZIP_NAME = "placeholder_products_png.zip"

RATE_LIMIT_DELAY = 3.5
REQUEST_TIMEOUT = 15
MIN_IMAGE_SIZE = 2000          # bytes
MAX_IMAGE_SIZE = 5 * 1024 * 1024
MAX_RESULTS = 8

# ================== LOGGING ==================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)
log = logging.getLogger(__name__)

# ================== PRODUCT LIST ==================
PRODUCTS = {
    # Automation & Control
    "distributed-io": "distributed IO module industrial isolated",
    "soft-starter": "soft starter motor controller industrial",
    "pressure-switch": "industrial pressure switch device",
    "presence-detector": "industrial presence detector sensor",
    "coded-magnetic-switch": "coded magnetic safety switch",

    # Electrical Switching & Protection
    "auto-changeover-system": "automatic changeover switch panel",
    "surge-arrester": "industrial surge arrester device",
    "time-switch": "time switch timer relay industrial",
    "electronic-overcurrent-relay": "electronic overcurrent relay industrial",

    # Power & Energy
    "power-meter": "digital power meter panel mounted",
    "power-quality-analyzer": "power quality analyzer device",
    "pf-capacitor": "power factor correction capacitor panel",

    # Indicators & Signaling
    "tower-light": "industrial tower signal light",
    "warning-light": "industrial revolving warning light",
    "siren-buzzer": "industrial siren buzzer alarm",

    # Operator Control
    "push-button": "industrial push button switch",
    "control-station": "control station push button enclosure",
    "pendant-station": "pendant control station crane",
    "joystick-controller": "industrial joystick controller",

    # Enclosures & Accessories
    "plug-socket-enclosure": "industrial plug socket enclosure",
    "cable-drum": "industrial cable drum reel",
    "empty-enclosure": "electrical enclosure empty box",
    "cooling-fan": "electrical panel cooling fan",
    "fan-filter": "panel fan filter assembly",
    "heat-shrink": "heat shrink tubing industrial",
    "spiral-wrapping": "spiral cable wrapping sleeve",

    # Safety & Measurement
    "foot-switch": "industrial foot switch pedal",
    "pull-cord-switch": "pull cord safety switch conveyor",
    "guard-protection-switch": "machine guard safety switch",
    "analog-insulation-tester": "analog insulation resistance tester",
    "digital-insulation-tester": "digital insulation resistance tester",
    "high-voltage-insulation-tester": "high voltage insulation tester",
    "automatic-insulation-tester": "automatic insulation tester with stand",
    "electronic-measuring-meter": "electronic measuring meter panel",
    "led-voltmeter": "LED voltmeter ammeter panel",
    "multifunction-meter": "multifunction power meter",
    "hour-meter": "industrial hour meter counter",
}

# ================== HELPERS ==================
def is_valid_png(data: bytes) -> bool:
    return (
        data.startswith(b"\x89PNG")
        and MIN_IMAGE_SIZE <= len(data) <= MAX_IMAGE_SIZE
    )

def download_png(url: str, path: Path) -> bool:
    try:
        headers = {"User-Agent": "Mozilla/5.0"}
        r = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
        r.raise_for_status()

        if not is_valid_png(r.content):
            return False

        path.write_bytes(r.content)
        return True
    except Exception:
        return False

# ================== CORE ==================
def fetch_image(product_id: str, query: str, ddgs: DDGS) -> bool:
    filepath = OUTPUT_DIR / f"{product_id}.png"

    if filepath.exists():
        log.info(f"⏩ Skipping {product_id} (already exists)")
        return True

    try:
        results = ddgs.images(
            query=query,
            max_results=MAX_RESULTS
        )
    except DDGSException as e:
        log.warning(f"❌ {product_id}: {e}")
        return False

    if not results:
        log.warning(f"❌ {product_id}: no results")
        return False

    for r in results:
        url = r.get("image") or r.get("thumbnail")
        if not url:
            continue

        if download_png(url, filepath):
            size_kb = filepath.stat().st_size / 1024
            log.info(f"✅ {product_id} ({size_kb:.1f} KB)")
            return True

    log.warning(f"❌ {product_id}: PNG not found")
    return False

# ================== ZIP ==================
def create_zip():
    files = list(OUTPUT_DIR.glob("*.png"))
    if not files:
        log.error("No images downloaded.")
        return

    with zipfile.ZipFile(ZIP_NAME, "w", zipfile.ZIP_DEFLATED) as z:
        for f in files:
            z.write(f, f.name)

    total_mb = sum(f.stat().st_size for f in files) / 1024 / 1024
    log.info(f"📦 Created {ZIP_NAME} ({len(files)} images, {total_mb:.2f} MB)")

# ================== MAIN ==================
def main():
    OUTPUT_DIR.mkdir(exist_ok=True)

    log.info("=" * 60)
    log.info("PLACEHOLDER PRODUCT PNG DOWNLOADER (NO API)")
    log.info("=" * 60)
    log.info(f"Products: {len(PRODUCTS)}")
    log.info("")

    success = 0
    start = time.time()

    with DDGS() as ddgs:
        for i, (pid, query) in enumerate(PRODUCTS.items(), 1):
            log.info(f"[{i}/{len(PRODUCTS)}] {pid}")
            if fetch_image(pid, query, ddgs):
                success += 1
            time.sleep(RATE_LIMIT_DELAY)

    elapsed = (time.time() - start) / 60
    log.info("")
    log.info("=" * 60)
    log.info(f"Downloaded: {success}/{len(PRODUCTS)}")
    log.info(f"Time taken: {elapsed:.1f} minutes")
    log.info("=" * 60)

    if success:
        create_zip()

if __name__ == "__main__":
    main()
