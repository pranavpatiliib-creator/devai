// Backup products data - this will be replaced by database integration
const productsData = [
    {
        id: "acb-air-circuit-breaker",
        productName: "Air Circuit Breaker (ACB)",
        manufacturerName: "Schneider / ABB / L&T",
        category: "Switchgear",
        shortDescription: "High-current circuit protection for industrial plants.",
        fullDescription: "Robust Air Circuit Breakers designed for the protection of electrical circuits in industrial and building low-voltage distribution systems. Features high breaking capacity and selective protection.",
        image: "images/products/acb_air_circuit_breaker.png",
        datasheet: "#"
    }
];

// Export for Node.js environment if needed, otherwise it's a global variable in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}
