# Reusable Header System - Visual Guide

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     USER'S BROWSER                          │
│                                                             │
│  Step 1: User visits products.html                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   products.html LOADS                       │
│                                                             │
│  <div id="header"></div>  ← Empty placeholder              │
│  <div id="footer"></div>                                   │
│  <script src="js/main.js"></script> ← Activates!          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   js/main.js RUNS                           │
│                                                             │
│  1. Detects: "We're on products.html"                      │
│  2. Fetches: components/header.html                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              components/header.html IS FETCHED              │
│                  (The Master Header File)                   │
│                                                             │
│  <header class="header">                                   │
│    <nav>                                                   │
│      <logo>DEVAI TECHNOLOGIES</logo>                       │
│    </nav>                                                  │
│    <ul class="nav-links">                                  │
│      <li><a href="index.html" data-page="index">Home</a>   │
│      <li><a href="products.html" data-page="products">     │
│              Products</a>                 ← Current page!  │
│      <li><a href="contact.html" data-page="contact">      │
│              Contact</a>                                   │
│    </ul>                                                   │
│  </header>                                                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│            js/main.js INJECTS HEADER                        │
│                                                             │
│  document.getElementById('header').innerHTML = headerHTML  │
│                                                             │
│  Result: <div id="header">                                 │
│    <header class="header">                                 │
│      (All the header content now visible!)                │
│    </header>                                               │
│  </div>                                                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│          js/main.js HIGHLIGHTS CURRENT PAGE                 │
│                                                             │
│  1. Reads: data-page="products" on Products link           │
│  2. Adds: class="active" to that link                      │
│  3. CSS applies: Gold color + border                       │
│                                                             │
│  Result:                                                    │
│    Home (black)                                            │
│    Products (GOLD) ✨ ← This is highlighted!              │
│    Contact (black)                                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    PAGE IS COMPLETE                         │
│                                                             │
│  ┌──────────────────────────────┐                          │
│  │  DEVAI TECHNOLOGIES HEADER   │  ← Loaded + styled       │
│  │  Home  Products  Contact     │  ← Products is gold      │
│  ├──────────────────────────────┤                          │
│  │                              │                          │
│  │   Page Content               │                          │
│  │   Our Products...            │                          │
│  │                              │                          │
│  └──────────────────────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

---

## File Flow Diagram

```
                    ┌─────────────────────────┐
                    │   All HTML Pages        │
                    │  ┌──────────────────┐   │
                    │  │ index.html       │   │
                    │  │ products.html    │   │
                    │  │ contact.html     │   │
                    │  │ electrical.html  │   │
                    │  │ ... etc ...      │   │
                    │  └──────────────────┘   │
                    └────────┬────────────────┘
                             │
                   Each has:  │
                   • <div id="header"></div>
                   • <script src="js/main.js"></script>
                             │
                    ┌────────▼────────────────┐
                    │  js/main.js             │
                    │  (Component Loader)     │
                    │                         │
                    │  Fetches & injects:     │
                    │  • Header               │
                    │  • Footer               │
                    │  • Other components     │
                    │                         │
                    │  Then calls:            │
                    │  setActiveNavLink()     │
                    └────────┬────────────────┘
                             │
                    ┌────────▼────────────────────────┐
                    │  components/header.html         │
                    │  (Master Header - Used by ALL)  │
                    │                                 │
                    │  <header>                       │
                    │    <logo>DEVAI</logo>           │
                    │    <nav-links>                  │
                    │      data-page attributes       │
                    │    </nav-links>                 │
                    │  </header>                      │
                    └────────┬──────────────────────┘
                             │
                    ┌────────▼──────────────────────┐
                    │  css/header.css                │
                    │  (Styling & Active Link CSS)   │
                    │                                │
                    │  .header { ... styling ... }   │
                    │  .nav-links a.active {         │
                    │    color: #ffd700;             │
                    │    border-bottom: gold;        │
                    │  }                             │
                    └───────────────────────────────┘
```

---

## Data Attribute Matching

```
components/header.html
┌─────────────────────────────────────────┐
│ <a href="products.html"                 │
│    data-page="products">Products</a>    │  ← Has data-page attribute
└─────────────────────────────────────────┘
        ↑                              ↑
        │                              │
   URL Path                    Data Attribute
                                       
                js/main.js logic:
        ┌────────────────────────────────────┐
        │ if (currentPage === dataPage) {    │
        │   add class="active"               │
        │ }                                  │
        └────────────────────────────────────┘
                              │
                              ↓
        Product link gets gold styling!
```

## Current Page Detection Logic

```
Window location: /products.html
                      │
                      ↓
            Split by "/" → "products.html"
                      │
                      ↓
            Remove ".html" → "products"
                      │
                      ↓
        Find <a data-page="products">
                      │
                      ↓
            Add class="active"
                      │
                      ↓
        CSS applies: color gold, border gold
```

---

## Mobile Menu Flow

```
┌─────────────────────────────┐
│  Hamburger Menu (Mobile)    │
│         ☰                   │
│  (Only shows on < 768px)    │
└─────────────────────────────┘
             │
             │ User clicks
             ↓
    hamburger.js triggers:
             │
    ┌────────▼────────────┐
    │ Toggle "active"     │
    │ class on nav-links  │
    └────────┬────────────┘
             │
             ↓
  ┌──────────────────────┐
  │ Menu slides down     │
  │ (CSS animation)      │
  │ Shows all links      │
  └──────────────────────┘
             │
             │ User clicks a link
             ↓
  ┌──────────────────────┐
  │ Remove "active"      │
  │ Menu slides up       │
  │ Page changes         │
  └──────────────────────┘
```

---

## Component Loading Sequence

```
Page Load starts
     │
     ├─ HTML Parses
     │    ├─ Finds: <div id="header"></div>
     │    ├─ Finds: <div id="footer"></div>
     │    └─ Finds: <script src="js/main.js"></script>
     │
     ├─ js/main.js Executes
     │    ├─ Waits for DOM Ready
     │    ├─ Calls: loadAllComponents()
     │    └─ For each component:
     │         ├─ fetch(components/X.html)
     │         ├─ innerHTML = fetched HTML
     │         └─ If header → setActiveNavLink()
     │
     ├─ js/hamburger.js Executes
     │    └─ Initializes mobile menu
     │
     └─ Page Ready!
        ├─ Header visible + styled
        ├─ Current page highlighted
        ├─ Mobile menu works
        └─ User can interact
```

---

## Why This Works on Static Hosts

```
Traditional Approach (Needs Server)
┌─────────────────────────────────────┐
│ Browser → Server (Request page)     │
│ Server → Processes on server        │
│          Includes header from file   │
│          Returns complete HTML       │
│ Browser → Displays complete page    │
└─────────────────────────────────────┘
    ❌ Requires server like Apache/Node.js
    ❌ Doesn't work on GitHub Pages

Your Approach (Client-Side - Static Hosts)
┌─────────────────────────────────────┐
│ Browser → Downloads products.html   │
│ Browser → Runs JavaScript (main.js) │
│           Fetches components/        │
│           header.html               │
│           Injects into <div>        │
│ Browser → Displays complete page    │
└─────────────────────────────────────┘
    ✅ No server needed
    ✅ Works on GitHub Pages
    ✅ Works on Hostinger static hosting
    ✅ Works anywhere JavaScript runs
```

---

## Active Link Highlighting Timeline

```
1. User on index.html
   ↓
2. js/main.js detects: currentPage = "index"
   ↓
3. Loops through all <a> tags in nav
   ↓
4. Finds: <a data-page="index">Home</a>
   ↓
5. Adds: class="active" to that link
   ↓
6. CSS selector: .nav-links a.active { color: gold; }
   ↓
7. Result: "Home" link appears in GOLD color
   ↓
8. User clicks "Products"
   ↓
9. New page loads, process repeats
   ↓
10. Now "Products" link is gold, "Home" is normal

This happens on EVERY page automatically!
```

---

## File Dependency Chart

```
                      index.html
                      products.html
                      contact.html
                      ... all pages
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ↓                   ↓                   ↓
    js/main.js        js/hamburger.js      js/preloader.js
         │
         ├─ Fetches → components/header.html
         │
         ├─ Fetches → components/footer.html
         │
         └─ Calls → function setActiveNavLink()
                         │
                         ↓
              css/header.css (applies styling)
                  │
                  ├─ .header { background, padding, etc. }
                  │
                  └─ .nav-links a.active { color: gold; }
```

---

## Summary

1. **One Master Header**: `components/header.html` (used everywhere)
2. **Auto-Loader**: `js/main.js` (loads it on every page)
3. **Auto-Highlight**: Built into main.js (current link turns gold)
4. **Mobile Ready**: `js/hamburger.js` (menu for phones)
5. **Styled**: `css/header.css` (colors, positioning, etc.)

**Result**: Same beautiful header on every page with zero code duplication! ✨
