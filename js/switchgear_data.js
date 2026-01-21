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
    },
    {
        id: "mccb-molded-case-circuit-breaker",
        productName: "Molded Case Circuit Breaker (MCCB)",
        manufacturerName: "Siemens / Legrand",
        category: "Switchgear",
        shortDescription: "Reliable protection for distribution circuits.",
        fullDescription: "Molded Case Circuit Breakers provide protection against overloads and short circuits in electrical distribution systems. Available in various frame sizes and breaking capacities.",
        image: "images/products/mccb_molded_case_circuit_breaker.png",
        datasheet: "#"
    },
    {
        id: "mcb-miniature-circuit-breaker",
        productName: "Miniature Circuit Breaker (MCB)",
        manufacturerName: "Polycab / Havells",
        category: "Switchgear",
        shortDescription: "Compact protection for final distribution.",
        fullDescription: "Standard MCBs for protection of cables and equipment against overload and short circuits. Ideal for domestic and commercial installations.",
        image: "images/products/mcb_miniature_circuit_breaker.png",
        datasheet: "#"
    },
    {
        id: "mcb-electrical-switch",
        productName: "MCB Electrical Switch",
        manufacturerName: "Schneider",
        category: "Switchgear",
        shortDescription: "Miniature circuit breaker switch.",
        fullDescription: "Compact MCBs for branch circuit protection in electrical distribution systems.",
        image: "images/products/mcb_electrical_switch.png",
        datasheet: "#"
    },
    {
        id: "mccb-electrical-switchgear",
        productName: "MCCB Electrical Switchgear",
        manufacturerName: "L&T",
        category: "Switchgear",
        shortDescription: "Molded case circuit breaker for switchgear.",
        fullDescription: "High-capacity MCCBs for main and feeder circuit protection in switchgear assemblies.",
        image: "images/products/mccb_electrical_switchgear.png",
        datasheet: "#"
    },
    {
        id: "sfu-switch-fuse-unit",
        productName: "SFU Switch Fuse Unit",
        manufacturerName: "Siemens",
        category: "Switchgear",
        shortDescription: "Switch fuse unit for motor circuits.",
        fullDescription: "Combination switch and fuse units for protection and isolation of motor circuits.",
        image: "images/products/sfu_switch_fuse_unit.png",
        datasheet: "#"
    }
];

// Export for Node.js environment if needed, otherwise it's a global variable in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}
