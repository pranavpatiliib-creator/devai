# Reusable Header - FAQ & Troubleshooting

## ❓ Frequently Asked Questions

### Q1: Do I need to copy the header into every HTML page?
**A:** No! That's the whole point of the reusable system. Your pages only need:
```html
<div id="header"></div>
```
The JavaScript automatically loads the header from `components/header.html`.

---

### Q2: What if I want to add a new navigation link?
**A:** Just edit `components/header.html` - it will appear on ALL pages automatically:

```html
<ul class="nav-links" id="nav-links">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="products.html" data-page="products">Products</a></li>
    <li><a href="new-page.html" data-page="new-page">New Page</a></li>  <!-- Add here -->
    <li><a href="contact.html" data-page="contact">Contact</a></li>
</ul>
```

---

### Q3: Why does a link need `data-page` attribute?
**A:** It tells the system which link to highlight when you visit that page.

**Example:**
- You visit `products.html`
- System looks for `<a data-page="products">`
- Finds it and adds `class="active"`
- CSS makes it gold/highlighted

**Important:** `data-page` must match the filename (without .html)!

| Filename | data-page value |
|----------|-----------------|
| `index.html` | `data-page="index"` |
| `products.html` | `data-page="products"` |
| `contact.html` | `data-page="contact"` |
| `my-services.html` | `data-page="my-services"` |

---

### Q4: Will this work on GitHub Pages / Hostinger?
**A:** Yes! Perfectly! The system uses JavaScript `fetch()` which works in all modern browsers. No special server setup needed.

---

### Q5: How do I create a new page?
**A:** 
1. Create new `.html` file (e.g., `services.html`)
2. Copy template from existing page
3. Change the page title and content
4. Make sure it has:
   ```html
   <div id="header"></div>
   <script src="js/main.js"></script>
   <script src="js/hamburger.js"></script>
   ```
5. Add link to navigation in `components/header.html`

---

### Q6: What if the header doesn't appear on a new page?
**A:** Check this checklist:
- [ ] Page has `<div id="header"></div>` placeholder?
- [ ] Page has `<script src="js/main.js"></script>` loaded?
- [ ] Is `components/header.html` file present and readable?
- [ ] Check browser console (F12) for errors
- [ ] Try clearing browser cache (Ctrl+Shift+Del)

---

### Q7: Can I have different headers on different pages?
**A:** With the current system, all pages share the same header. If you need different headers:

**Option 1:** Modify `components/header.html` to show/hide content based on page
```javascript
// In components/header.html, use JavaScript:
<script>
  if (getCurrentPage() === 'admin') {
    // Show admin-specific nav
  }
</script>
```

**Option 2:** Create a separate admin header and load different ones based on page name

For now, stick with one shared header - it works great!

---

### Q8: Why is the header sometimes not highlighted correctly?
**A:** Most likely causes:

1. **Wrong `data-page` value**
   - Link: `<a href="products.html" data-page="product">` ❌ Wrong!
   - Should be: `<a href="products.html" data-page="products">` ✅

2. **Page URL doesn't match**
   - Visiting from: `http://example.com/products` (no .html)
   - But link has: `data-page="products.html"` ❌
   - Should be: `data-page="products"` ✅

3. **Browser cache issue**
   - Clear cache: Ctrl+Shift+Del (or Cmd+Shift+Del on Mac)

---

### Q9: Can I change the header styling?
**A:** Absolutely! Edit `css/header.css`:

```css
.header {
    background: #003d82;           /* Change color */
    padding: 1.5rem 0;             /* Change padding */
    box-shadow: none;              /* Remove shadow */
}

.brand-center {
    font-size: 3rem;               /* Change logo text size */
    color: white;                  /* Change text color */
}

.nav-links a {
    color: white;                  /* Normal link color */
    font-size: 1rem;               /* Link text size */
}

.nav-links a:hover {
    color: #ffd700;                /* Hover color */
}

.nav-links a.active {
    color: #ffd700;                /* Active (current page) color */
    border-bottom: 3px solid #ffd700;  /* Active link border */
}
```

---

### Q10: How do I make the header sticky (always visible when scrolling)?
**A:** It already is! Check this in `css/header.css`:

```css
.header {
    position: fixed;    /* This keeps it at top while scrolling */
    top: 0;            /* Stick to top */
    z-index: 1000;     /* Stay above other content */
}
```

If it's not working, add the above to the `.header` CSS rule.

---

### Q11: Can I change the logo?
**A:** Yes! Edit `components/header.html`:

```html
<!-- Change this line: -->
<img src="logo_transparent.png" alt="Devai Logo">

<!-- To your logo file: -->
<img src="your-new-logo.png" alt="Company Logo">
```

Also update the size if needed in `css/header.css`:
```css
.logo img {
    height: 165px;     /* Adjust height */
    width: auto;       /* Keep aspect ratio */
}
```

---

### Q12: The mobile hamburger menu isn't working?
**A:** Make sure:
- [ ] Page loads `js/hamburger.js` after main.js
- [ ] Browser viewport meta tag is present:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- [ ] Try resizing browser to mobile width (< 768px)
- [ ] Clear browser cache and refresh

If still not working, check browser console (F12 → Console) for JavaScript errors.

---

## 🐛 Troubleshooting Guide

### Problem: Header Not Showing at All

**Symptom:** Page loads but header is blank/missing

**Solution 1: Check if placeholder exists**
```html
<!-- MUST have this in your HTML: -->
<div id="header"></div>
```

**Solution 2: Check if script loads**
```html
<!-- MUST have this at bottom: -->
<script src="js/main.js"></script>
```

**Solution 3: Check browser console for errors**
1. Press F12 to open Developer Tools
2. Click "Console" tab
3. Look for red error messages
4. Common error: "Failed to load components/header.html"
   - Means file path is wrong or file doesn't exist

**Solution 4: Verify file exists**
- Should have: `components/header.html`
- With content: `<header class="header">...</header>`

---

### Problem: Header Shows But Not Styled

**Symptom:** Header text appears but looks plain/unstyled

**Solution 1: Check CSS is loaded**
```html
<!-- In your HTML head: -->
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/header.css">
```

**Solution 2: Clear browser cache**
- Ctrl+Shift+Del (Windows)
- Cmd+Shift+Del (Mac)
- Clear "Cached images and files"
- Refresh page

**Solution 3: Verify header.css exists**
- File should be at: `css/header.css`
- Should contain: `.header { ... }` CSS rules

---

### Problem: Current Page Not Highlighted

**Symptom:** Navigation links don't turn gold when on that page

**Solution 1: Check `data-page` attributes**
```html
<!-- WRONG: -->
<a href="products.html">Products</a>

<!-- RIGHT: -->
<a href="products.html" data-page="products">Products</a>
```

**Solution 2: Verify `data-page` matches filename**
| File | Must Use |
|------|----------|
| `products.html` | `data-page="products"` |
| `contact.html` | `data-page="contact"` |
| `my-page.html` | `data-page="my-page"` |

**Solution 3: Check page URL**
Open browser console and run:
```javascript
console.log(getCurrentPage());
```
Should print the current page name (e.g., "products")

**Solution 4: Clear cache and refresh**
- Ctrl+Shift+Del
- Refresh the page (Ctrl+R or F5)

---

### Problem: Mobile Menu Hamburger Doesn't Work

**Symptom:** Can't open/close menu on mobile

**Solution 1: Load hamburger.js**
```html
<script src="js/hamburger.js"></script>
```

**Solution 2: Add viewport meta tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Solution 3: Test on actual mobile or resize browser**
- Desktop: Right-click → "Inspect" → Toggle device toolbar
- Or resize browser window to < 768px width

**Solution 4: Check if hamburger element exists**
Open console and run:
```javascript
console.log(document.getElementById('hamburger'));
```
Should show an element, not `null`

---

### Problem: Header Loads But Styles Look Wrong

**Symptom:** Header is there but colors/layout off

**Solution 1: Check all CSS files load**
Open browser DevTools (F12) → Network tab
- Should see green checkmarks for:
  - `css/styles.css`
  - `css/header.css`
  - Any other CSS files

**Solution 2: Check file paths in CSS**
```css
/* If using background images, check paths: */
.header {
    background-image: url('../images/bg.png');  /* ✅ Correct */
    /* vs */
    background-image: url('images/bg.png');    /* ❌ Wrong */
}
```

**Solution 3: Hard refresh browser**
- Ctrl+F5 (Windows)
- Cmd+Shift+R (Mac)
- Clears cache completely

---

### Problem: Header Works Locally But Not on Live Site

**Symptom:** Works on computer but breaks when uploaded to Hostinger/GitHub

**Solution 1: Check relative paths**
Make sure paths use `./` or relative properly:
```html
<!-- For files in root: -->
<img src="logo_transparent.png">  ✅

<!-- For files in subdirectory: -->
<img src="images/logo.png">       ✅

<!-- Avoid absolute paths: -->
<img src="C:\Users\...">          ❌
```

**Solution 2: Check fetch paths in main.js**
Should use relative paths:
```javascript
fetch(`components/header.html`)   /* ✅ Relative */
fetch(`/components/header.html`)  /* ❌ Absolute (breaks sometimes) */
```

**Solution 3: Check HTTPS vs HTTP**
If site uses HTTPS, make sure no mixed content:
- All resources should be HTTPS
- No `http://` links on HTTPS site

**Solution 4: Check file permissions**
All files need to be readable:
- Test on live site directly
- Check file ownership and permissions

---

### Problem: Links Go to Wrong Pages

**Symptom:** Clicking links leads to 404 errors

**Solution 1: Verify href paths**
```html
<!-- Check link paths: -->
<a href="products.html">Products</a>     ✅ Root level
<a href="../products.html">Products</a> ❌ Wrong directory

<!-- If pages are in subfolders: -->
<a href="pages/products.html">Products</a>  ✅ Correct path
```

**Solution 2: Check file exists**
- Verify the linked page file actually exists
- Check filename spelling (case-sensitive on Linux/GitHub)
- Example: `Products.html` ❌ wrong, `products.html` ✅ correct

**Solution 3: Verify link in header.html**
```html
<!-- Make sure href matches filename exactly: -->
<a href="products.html" data-page="products">Products</a>

<!-- If file is actually named "Products.html": -->
<a href="Products.html" data-page="products">Products</a>
```

---

## 📋 Verification Checklist

Before deployment, verify:

**Header Files:**
- [ ] `components/header.html` exists
- [ ] `css/header.css` exists
- [ ] `js/main.js` exists
- [ ] `js/hamburger.js` exists

**Every HTML Page:**
- [ ] Has `<div id="header"></div>` after preloader
- [ ] Has `<link rel="stylesheet" href="css/styles.css">`
- [ ] Has `<script src="js/main.js"></script>` before `</body>`
- [ ] Has `<script src="js/hamburger.js"></script>`
- [ ] Has viewport meta tag: `<meta name="viewport"...>`

**Navigation Links in header.html:**
- [ ] Each link has `href` attribute
- [ ] Each link has `data-page` attribute
- [ ] `data-page` matches filename (without .html)
- [ ] All linked files exist

**Testing:**
- [ ] Open index.html → header shows
- [ ] Open products.html → header shows + "Products" highlighted
- [ ] Open contact.html → header shows + "Contact" highlighted
- [ ] Resize to mobile → hamburger appears
- [ ] Click hamburger → menu opens/closes
- [ ] Check browser console → no red errors

**Browser Compatibility:**
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge

---

## 🎓 How to Debug

### Step 1: Open Browser Console (F12)
- Press F12 to open Developer Tools
- Click "Console" tab
- Look for red error messages

### Step 2: Common Error Messages

**"Failed to load components/header.html"**
- File doesn't exist or wrong path
- Check: `components/header.html` exists
- Check: File paths use correct slashes (/) not backslashes (\)

**"Cannot read property of null"**
- Usually means `<div id="header"></div>` is missing
- Add it to your HTML

**"fetch is not a function"**
- Using very old browser (IE 11 or older)
- Modern browsers support fetch()

### Step 3: Check Network Tab
In DevTools:
1. Click "Network" tab
2. Refresh page (F5)
3. Look for red entries (failed requests)
4. Click on failed file to see error details

### Step 4: Test with Console Commands
```javascript
// Check current page
getCurrentPage()

// Check if header element loaded
document.getElementById('header')

// Check if hamburger exists
document.getElementById('hamburger')

// Check nav links
document.querySelectorAll('.nav-links a')
```

---

## 📞 Quick Help

| Issue | Quick Fix |
|-------|-----------|
| No header | Add `<div id="header"></div>` + `<script src="js/main.js"></script>` |
| Wrong highlight | Fix `data-page` to match filename |
| No styling | Add `<link rel="stylesheet" href="css/header.css">` |
| Mobile menu broken | Add viewport meta tag, load hamburger.js |
| Links broken | Check `href` paths are correct |
| Cache issue | Ctrl+Shift+Del then refresh (F5) |
| Still broken | Check browser console (F12) for errors |

---

## 🚀 Need Help?

1. **Check this file first** - Most answers are here
2. **Open browser console (F12)** - Look for red error messages
3. **Verify file paths** - Most common issue
4. **Clear cache** - Ctrl+Shift+Del
5. **Read the REUSABLE_HEADER_GUIDE.md** - Detailed explanation

---

**Your system is production-ready! These are mostly edge cases.** ✨
