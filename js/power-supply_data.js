const productsData = [
    {
        id: "smps-power",
        productName: "Industrial SMPS",
        manufacturerName: "Mean Well",
        category: "Power Supply",
        shortDescription: "Switched Mode Power Supply 24V DC.",
        fullDescription: "Reliable DIN-rail mounted power supplies for industrial control cabinets. Features high efficiency, wide input voltage range, and short-circuit protection.",
        image: "images/products/smps_power_supply_industrial.png",
        datasheet: "#"
    },
    {
        id: "din-rail-power-supply",
        productName: "DIN Rail Power Supply",
        manufacturerName: "Siemens",
        category: "Power Supply",
        shortDescription: "24V DC power supply for DIN rail mounting.",
        fullDescription: "Compact DIN-rail mounted power supplies for industrial applications, providing stable 24V DC output with overload protection.",
        image: "images/products/din_rail_power_supply.png",
        datasheet: "#"
    },
    {
        id: "industrial-ups",
        productName: "Industrial UPS System",
        manufacturerName: "APC",
        category: "Power Supply",
        shortDescription: "Uninterruptible Power Supply for industrial equipment.",
        fullDescription: "Online UPS systems providing backup power and surge protection for critical industrial loads.",
        image: "images/products/industrial_ups_system.png",
        datasheet: "#"
    }
];

// Export for Node.js environment if needed, otherwise it's a global variable in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}
