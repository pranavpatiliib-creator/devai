let searchData = [];

// Add categories
searchData.push(
    { title: "Automation & Control", type: "category", url: "automation.html", keywords: ["automation", "control", "plc", "hmi", "vfd", "sensor", "controller", "drive"] },
    { title: "Electrical Components", type: "category", url: "electrical.html", keywords: ["electrical", "switchgear", "circuit breaker", "contactor", "relay", "switch"] },
    { title: "Industrial Instruments", type: "category", url: "instruments.html", keywords: ["instruments", "measurement", "meter", "sensor", "clamp", "multimeter", "thermometer"] },
    { title: "Mechanical & Transmission", type: "category", url: "mechanical.html", keywords: ["mechanical", "motor", "gearbox", "bearing", "belt", "transmission"] },
    { title: "Spare Parts & Accessories", type: "category", url: "spares.html", keywords: ["spares", "accessories", "cable", "connector", "enclosure", "gland"] },
    { title: "Safety & Security", type: "category", url: "safety.html", keywords: ["safety", "security", "switch", "relay", "interlock", "sensor"] },
    { title: "Hydraulics & Pneumatics", type: "category", url: "hydraulics.html", keywords: ["hydraulics", "pneumatics", "valve", "cylinder", "pump", "actuator"] }
);

// Add manufacturers and products if productsData is available
if (typeof productsData !== 'undefined') {
    // Manufacturers
    const manufacturers = [...new Set(productsData.map(p => p.manufacturerName).filter(m => m))];
    manufacturers.forEach(m => {
        searchData.push({
            title: m,
            type: "manufacturer",
            url: "manufacturers.html",
            keywords: [m.toLowerCase()]
        });
    });

    // Products
    productsData.forEach(p => {
        searchData.push({
            title: p.productName,
            type: "product",
            url: "#",
            keywords: [p.manufacturerName, p.category, p.subCategory].filter(k => k).map(k => k.toLowerCase())
        });
    });
}
