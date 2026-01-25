# Quick Reference: Header Component System

## What Was Changed

### 1. Header Component (`components/header.html`)
**Before:**
```html
<li><a href="products.html">Products</a></li>
```

**After:**
```html
<li><a href="products.html" data-page="products">Products</a></li>
```
✓ Added `data-page` attributes to all navigation links

---

### 2. JavaScript Logic (`js/main.js`)
**Added two new functions:**

```javascript
// Detect which page is currently open
function getCurrentPage() {
    const pathname = window.location.pathname;
    const page = pathname.split('/').pop() || 'index.html';
    return page.replace('.html', '') || 'index';
}

// Highlight the active navigation link
function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const dataPage = link.getAttribute('data-page');
        link.classList.remove('active');
        
        if (dataPage === currentPage) {
            link.classList.add('active');
        }
    });
}
```

✓ Automatically highlights the current page's navigation link

---

### 3. CSS Styling (`css/header.css`)
**Added active link styling:**

```css
/* Active link styling */
.nav-links a.active {
    color: #ffd700;                         /* Gold text */
    background: rgba(255, 215, 0, 0.15);   /* Light gold background */
    font-weight: 600;                       /* Bolder text */
    border-bottom: 3px solid #ffd700;      /* Gold underline */
}
```

✓ Active link now displays with gold color and bottom border

---

## File Structure Overview

```
components/header.html  ← Single header file for all pages
css/header.css         ← All header styling
js/main.js            ← Loads header on every page
```

---

## How It Works (Step by Step)

1. **User visits `products.html`**
2. Browser loads HTML file
3. Script `js/main.js` runs
4. `loadComponent('header', 'header')` fetches `components/header.html`
5. HTML is inserted into `<div id="header"></div>`
6. `setActiveNavLink()` runs automatically
7. **"Products"** link gets `.active` class → displays in gold

---

## No Changes Needed On HTML Pages

All `.html` files **already have**:
- ✓ `<div id="header"></div>` placeholder
- ✓ `<script src="js/main.js"></script>` loader
- ✓ Header automatically loads and configures itself

---

## Testing Active Links

1. Open **index.html** → "Home" is highlighted in gold
2. Open **products.html** → "Products" is highlighted in gold
3. Open **contact.html** → "Contact" is highlighted in gold
4. Open **product-suppliers.html** → "Product Suppliers" is highlighted in gold

---

## Adding New Pages

To add a new page (e.g., `services.html`):

### Step 1: Create HTML file
```html
<!-- services.html -->
<div id="header"></div>
<main>
    <!-- Your content -->
</main>
<script src="js/main.js"></script>
```

### Step 2: Add to navigation (optional)
Edit `components/header.html`:
```html
<li><a href="services.html" data-page="services">Services</a></li>
```

**That's it!** The header automatically loads and highlights the correct link.

---

## Customization Examples

### Change Active Link Color
Edit `css/header.css`:
```css
.nav-links a.active {
    color: #FF6B6B;  /* Change to red */
}
```

### Change Header Background
Edit `css/header.css`:
```css
.header {
    background: #1A1A2E;  /* Change to dark blue */
}
```

### Change Company Name
Edit `components/header.html`:
```html
<div class="brand-center">YOUR COMPANY NAME</div>
```

### Add New Navigation Link
Edit `components/header.html`:
```html
<li><a href="blog.html" data-page="blog">Blog</a></li>
```

---

## Benefits of This System

| Feature | Benefit |
|---------|---------|
| **Single Source of Truth** | Update header once, applies to all pages |
| **No Duplication** | Header code written only once |
| **Automatic Highlighting** | Active link detected from URL, no manual update needed |
| **Mobile Responsive** | Works perfectly on phone, tablet, desktop |
| **Easy to Maintain** | Want to change company name? Edit one file |
| **Scalable** | Works for 5 pages or 500 pages equally well |
| **Static Hosting Compatible** | Works on GitHub Pages, Hostinger, etc. |
| **SEO Friendly** | All links visible in HTML for search engines |

---

## Browser Compatibility

Works on:
- ✓ Chrome / Chromium
- ✓ Firefox
- ✓ Safari
- ✓ Edge
- ✓ Mobile browsers (iOS Safari, Chrome Mobile)
- ✓ All browsers from 2018 onwards

---

## Deployment

Works perfectly with:
- ✓ **GitHub Pages** - Just push your files
- ✓ **Hostinger** - Upload via FTP, no configuration needed
- ✓ **Local Testing** - Open HTML files directly in browser
- ✓ **Live Server** - Works with VSCode Live Server extension

No special server configuration or build tools required!

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `components/header.html` | Header content (logo + nav menu) |
| `css/header.css` | Header styling |
| `js/main.js` | Loads header dynamically + sets active link |
| `js/hamburger.js` | Mobile menu toggle |
| All `.html` pages | Have `<div id="header"></div>` + load `js/main.js` |

---

## Troubleshooting Checklist

| Issue | Solution |
|-------|----------|
| Header not showing | Verify `<div id="header"></div>` exists + `js/main.js` is loaded |
| Active link not highlighting | Clear cache (Ctrl+Shift+Del), check `data-page` attributes match filename |
| Mobile menu not working | Ensure `js/hamburger.js` is loaded, check screen width < 768px |
| Paths breaking on other host | Use relative paths: `js/main.js` not `./js/main.js` |

---

## Summary in One Sentence

**One reusable header component loads on all pages, automatically highlights the current page's navigation link, and updates everywhere when you make changes.**

That's it! 🎉
