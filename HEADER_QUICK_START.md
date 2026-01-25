# Reusable Header - Quick Start

## ✅ Status: COMPLETE ✅

Your website **already has a fully functional reusable header system**. No additional work needed!

---

## The System at Work

| Component | Location | Purpose |
|-----------|----------|---------|
| **Master Header** | `components/header.html` | Single file used by ALL pages |
| **Header Styling** | `css/header.css` | Logo, nav, colors, animations |
| **Header Loader** | `js/main.js` | Automatically injects header on every page |
| **Mobile Menu** | `js/hamburger.js` | Hamburger menu for phones/tablets |
| **Auto-Highlight** | Built into `js/main.js` | Current page link turns gold |

---

## How It Works (In 3 Steps)

```
1. User visits index.html
   ↓
2. JavaScript runs and says: "Load components/header.html"
   ↓
3. Header appears on page + current link is highlighted
```

**Result:** Same beautiful header on every page, automatically!

---

## Pages Using the System

✅ All 15+ pages already have it:
- index.html
- products.html
- product-suppliers.html
- contact.html
- electrical.html
- automation.html
- mechanical.html
- hydraulics.html
- instruments.html
- power-supply.html
- switchgear.html
- spares.html
- safety.html
- ... and more

---

## Add New Page with Header

To create a new page (e.g., `services.html`):

### Step 1: Create the HTML file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - Devai Technologies</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="loading">
    <!-- Preloader -->
    <div id="preloader">
        <div class="preloader-rings">
            <div class="ring ring-1"></div>
            <div class="ring ring-2"></div>
        </div>
        <div class="preloader-content">
            <img src="logo_transparent.png" alt="Devai Logo" class="preloader-logo">
            <h1 class="brand-text-loader">DEVAI <span>TECHNOLOGIES</span></h1>
        </div>
    </div>

    <!-- HEADER AUTOMATICALLY LOADS HERE -->
    <div id="header"></div>

    <!-- Your page content -->
    <main>
        <h1>Our Services</h1>
        <!-- Content here -->
    </main>

    <!-- Footer -->
    <div id="footer"></div>

    <!-- These scripts load everything -->
    <script src="js/main.js"></script>
    <script src="js/hamburger.js"></script>
    <script src="js/preloader.js"></script>
</body>
</html>
```

### Step 2: Add navigation link

Edit `components/header.html`:

```html
<ul class="nav-links" id="nav-links">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="products.html" data-page="products">Products</a></li>
    <li><a href="services.html" data-page="services">Services</a></li>  <!-- ADD THIS -->
    <li><a href="contact.html" data-page="contact">Contact</a></li>
</ul>
```

**Done!** Header will automatically:
- Appear on your new page
- Show the "Services" link highlighted when visited
- Work on mobile
- Match all other pages perfectly

---

## Customize Header

### Change Logo

Edit `components/header.html`:
```html
<img src="your-logo.png" alt="Devai Logo">
```

### Change Company Name

Edit `components/header.html`:
```html
<div class="brand-center">YOUR COMPANY</div>
```

### Change Colors

Edit `css/header.css`:
```css
.header {
    background: #003d82;        /* Header background */
}

.nav-links a.active {
    color: #ffd700;             /* Active link gold color */
}
```

### Change Navigation Links

Edit `components/header.html` - just modify the `<ul class="nav-links">` section.

**Remember:** Each link needs:
- `href` pointing to the page
- `data-page` matching the filename

Example:
```html
<a href="products.html" data-page="products">Products</a>
```

---

## Testing Checklist

- [ ] Visit index.html - header shows, "Home" highlighted
- [ ] Visit products.html - header shows, "Products" highlighted  
- [ ] Visit contact.html - header shows, "Contact" highlighted
- [ ] Resize to mobile - hamburger (☰) appears
- [ ] Click hamburger - menu opens/closes
- [ ] Click menu link - page loads with header

---

## Deployment (GitHub Pages / Hostinger)

No special setup needed! Your site works as-is:

1. Push files to GitHub (or upload to Hostinger)
2. Header loads automatically when pages are visited
3. All links work and highlight correctly
4. Mobile menu works perfectly

The JavaScript-based loading works on all static hosting platforms.

---

## File Reference

```
components/header.html        ← Edit for navigation/logo changes
css/header.css               ← Edit for colors/styling
js/main.js                   ← Don't edit (handles loading)
js/hamburger.js              ← Don't edit (handles mobile menu)
All your .html pages         ← Just need 2 lines:
                                <div id="header"></div>
                                <script src="js/main.js"></script>
```

---

## Done! 🎉

Your reusable header system is:
- ✅ **Production-ready**
- ✅ **Works on static sites**
- ✅ **Mobile-friendly**
- ✅ **No duplicated code**
- ✅ **Easy to customize**

Just keep using it and add new pages as needed!

For detailed information, see `REUSABLE_HEADER_GUIDE.md`.
