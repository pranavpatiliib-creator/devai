# Reusable Header Component - Complete Guide

## 🎯 What You Have

Your website already has a **fully functional, production-ready reusable header system** that automatically appears on all HTML pages without duplication. Here's exactly how it works and why it's perfect for your static website (GitHub Pages / Hostinger).

---

## ✅ How It Works (Simple Explanation)

### The 4-Part System

1. **Single Header File** (`components/header.html`)
   - One master header design with your logo, navigation menu
   - All pages use this one file - no copying!

2. **JavaScript Loader** (`js/main.js`)
   - Automatically loads the header on every page
   - Uses `fetch()` to grab the header HTML
   - Works perfectly on static sites (GitHub Pages, Hostinger, etc.)

3. **Active Link Detection**
   - Automatically highlights the current page in the navigation menu
   - You're on `products.html`? The "Products" link gets highlighted
   - No manual updates needed

4. **Mobile Menu** (`js/hamburger.js`)
   - Hamburger menu icon for mobile devices
   - Automatically works across all pages
   - Menu closes when you click a link

---

## 📁 File Structure

```
DEVAI/
├── components/
│   └── header.html              ← The master header (used everywhere)
│
├── css/
│   └── header.css               ← Header styling (includes active link styles)
│
├── js/
│   ├── main.js                  ← Loads header + sets active link
│   ├── hamburger.js             ← Mobile menu handler
│   └── preloader.js
│
├── index.html                   ← All these pages just have:
├── products.html                   <div id="header"></div>
├── contact.html                    + <script src="js/main.js"></script>
├── electrical.html
├── product-suppliers.html
├── automation.html
└── ... (all other pages)
```

---

## 🔧 How Each Page Uses the Header

Every HTML page follows the same simple pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Devai Technologies</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/preloader.css">
</head>
<body class="loading">
    
    <!-- Preloader -->
    <div id="preloader">
        <!-- preloader content -->
    </div>

    <!-- THIS LINE LOADS THE HEADER: -->
    <div id="header"></div>
    
    <!-- Page-specific content -->
    <main>
        <!-- Your unique page content here -->
    </main>

    <!-- Footer & other components -->
    <div id="footer"></div>

    <!-- THESE SCRIPTS HANDLE LOADING: -->
    <script src="js/main.js"></script>          <!-- Loads header -->
    <script src="js/hamburger.js"></script>     <!-- Mobile menu -->
    <script src="js/preloader.js"></script>     <!-- Loading animation -->
</body>
</html>
```

**That's it!** Just 2 lines:
- `<div id="header"></div>` - Empty placeholder
- `<script src="js/main.js"></script>` - Loader script

---

## 🎨 Current Header Design

Your header includes:

```html
<header class="header">
    <nav class="nav">
        <div class="logo">
            <img src="logo_transparent.png" alt="Devai Logo">
            <div class="brand-center">DEVAI TECHNOLOGIES</div>
        </div>
        
        <div class="hamburger" id="hamburger">☰</div>
    </nav>

    <ul class="nav-links" id="nav-links">
        <li><a href="index.html" data-page="index">Home</a></li>
        <li><a href="index.html#about" data-page="index">About</a></li>
        <li><a href="products.html" data-page="products">Products</a></li>
        <li><a href="product-suppliers.html" data-page="product-suppliers">Product Suppliers</a></li>
        <li><a href="contact.html" data-page="contact">Contact</a></li>
    </ul>
</header>
```

### Active Link Styling

When you're on a page, that link automatically gets:
- Gold/yellow text color
- Bottom border highlight
- No manual configuration needed!

---

## 🚀 How It Works Behind the Scenes

### Step-by-Step Timeline

When someone visits your website:

1. **Page Loads**
   ```
   Browser opens index.html
   ```

2. **Preloader Shows**
   ```
   Shows spinning animation while components load
   ```

3. **JavaScript Runs**
   ```
   main.js detects: "We're on index.html"
   ```

4. **Header Fetched**
   ```
   fetch('components/header.html')
   ↓
   Gets the HTML from the single master file
   ```

5. **Header Injected**
   ```
   Takes that HTML
   ↓
   Puts it inside <div id="header"></div>
   ```

6. **Active Link Set**
   ```
   Looks for <a data-page="index">
   ↓
   Adds class="active" to it
   ↓
   CSS styling applies: gold text + border
   ```

7. **Mobile Menu Ready**
   ```
   hamburger.js initializes
   ↓
   Hamburger menu works on mobile
   ```

8. **Preloader Hides**
   ```
   Page fully loaded - animation disappears
   User sees the website
   ```

---

## ✨ Key JavaScript Functions

### `getCurrentPage()` - Detects current page
```javascript
function getCurrentPage() {
    const pathname = window.location.pathname;
    const page = pathname.split('/').pop() || 'index.html';
    return page.replace('.html', '') || 'index';
}
// Examples:
// /products.html → 'products'
// /contact.html → 'contact'
// / (or /index.html) → 'index'
```

### `setActiveNavLink()` - Highlights current page
```javascript
function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const dataPage = link.getAttribute('data-page');
        
        if (dataPage === currentPage) {
            link.classList.add('active');  // Add gold styling
        }
    });
}
```

### `loadComponent()` - Loads header dynamically
```javascript
async function loadComponent(componentName, containerId) {
    const response = await fetch(`components/${componentName}.html`);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
    
    if (componentName === 'header') {
        setActiveNavLink();  // Highlight current page
    }
}
```

---

## ✅ Verification Checklist

Your system is already complete! Here's what's already done:

- ✅ Header component file created (`components/header.html`)
- ✅ All pages have `<div id="header"></div>` placeholder
- ✅ All pages load `js/main.js` at the bottom
- ✅ Active link detection implemented
- ✅ Active link CSS styling applied
- ✅ Mobile hamburger menu integrated
- ✅ Footer component system set up
- ✅ Works perfectly on static hosts (GitHub Pages, Hostinger, etc.)

---

## 🛠️ How to Modify the Header

### Adding a New Navigation Link

Edit `components/header.html`:

```html
<ul class="nav-links" id="nav-links">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="products.html" data-page="products">Products</a></li>
    <!-- ADD NEW LINK HERE -->
    <li><a href="services.html" data-page="services">Services</a></li>
    <li><a href="contact.html" data-page="contact">Contact</a></li>
</ul>
```

**Important:** 
- The `data-page` attribute must match the filename (without .html)
- For `services.html`, use `data-page="services"`
- It will automatically highlight when you visit that page!

### Changing Header Styling

Edit `css/header.css`:

```css
.header {
    background: #003d82;        /* Change background color */
    padding: 1rem 0;            /* Change padding */
    position: fixed;            /* Keep at top while scrolling */
}

.nav-links a.active {
    color: #ffd700;             /* Active link color (gold) */
    border-bottom: 3px solid;   /* Active link border */
}
```

### Changing Logo or Text

Edit `components/header.html`:

```html
<div class="logo">
    <img src="your-new-logo.png" alt="Devai Logo">
    <div class="brand-center">YOUR COMPANY NAME</div>
</div>
```

---

## 🌐 Why This Works on Static Sites

Traditional websites use **server-side includes** to reuse headers (requires a server). Your website uses **client-side loading** with JavaScript, which works perfectly on:

- ✅ **GitHub Pages** - Free, no server needed
- ✅ **Hostinger** - Static hosting plans
- ✅ **Netlify** - Automatic deployment
- ✅ **Vercel** - Zero-config hosting
- ✅ **Any static web host**

The browser runs the JavaScript when the page loads, which fetches and injects the header HTML. No server required!

---

## 🔍 Testing the Header

### Test on All Pages

1. Visit each page and check:
   - Header appears at the top
   - Logo and navigation visible
   - Current page link is highlighted (gold)
   - Hamburger menu works on mobile

### Test Active Link Highlighting

| Page | Should Highlight | How to Know |
|------|------------------|------------|
| `index.html` | "Home" link | Gold text + bottom border |
| `products.html` | "Products" link | Gold text + bottom border |
| `contact.html` | "Contact" link | Gold text + bottom border |
| `product-suppliers.html` | "Product Suppliers" link | Gold text + bottom border |

### Test Mobile Menu

1. Resize browser to mobile width (< 768px)
2. Click the hamburger (☰) icon
3. Menu should slide down
4. Click a link, menu should close

---

## 🚨 Troubleshooting

### Header Not Showing?

**Check 1:** Does the page have the placeholder?
```html
<div id="header"></div>
```

**Check 2:** Is the script loaded?
```html
<script src="js/main.js"></script>
```

**Check 3:** Is `components/header.html` present?
- File should exist at: `components/header.html`

### Links Not Working?

- Check that `href` paths are correct
- Verify `data-page` attributes match filenames
- Example: For `products.html`, use `data-page="products"`

### Active Link Not Highlighting?

- Check the `data-page` attribute matches the current page
- Open browser console (F12) and run: `console.log(getCurrentPage())`
- Should print the current page name

### Mobile Menu Not Working?

- Clear browser cache (Ctrl+Shift+Del)
- Check that `js/hamburger.js` is loaded
- Make sure viewport meta tag is present:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

---

## 📊 Files at a Glance

| File | Purpose | Editable? |
|------|---------|-----------|
| `components/header.html` | Master header design | ✅ Yes |
| `css/header.css` | Header styling | ✅ Yes |
| `js/main.js` | Header loader + active link | ❌ Careful |
| `js/hamburger.js` | Mobile menu | ❌ Careful |
| All `.html` pages | Just need `<div id="header"></div>` + script | ✅ Yes |

---

## 🎯 Summary

Your website has a **professional, reusable header system** that:

1. **Uses ONE master header file** - No duplication
2. **Automatically appears on all pages** - JavaScript loads it
3. **Highlights the current page** - User knows where they are
4. **Works on mobile** - Hamburger menu for small screens
5. **Works on static hosts** - GitHub Pages, Hostinger, etc.
6. **Easy to customize** - Just edit `components/header.html` and `css/header.css`

**You don't need to do anything more!** Everything is already set up and working. If you want to add new pages or modify the header, see the "How to Modify" section above.

---

## 🎓 Quick Reference

```
Current Page  → Highlighted Link
index.html    → Home
products.html → Products  
contact.html  → Contact
electrical.html → (No direct link, won't highlight)
etc.
```

To change what's highlighted, edit the `data-page` attributes in `components/header.html`.

---

**Your header is production-ready! 🚀**
