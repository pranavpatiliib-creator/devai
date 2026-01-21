const productsData = [
    {
        id: "electrical-contactor",
        productName: "Electrical Contactor",
        manufacturerName: "Schneider Electric",
        category: "Controlgear",
        shortDescription: "Heavy-duty switching for motors and loads.",
        fullDescription: "High-performance contactors for controlling electric motors, lighting, heating, and capacitor banks. proven reliability in harsh industrial environments.",
        image: "images/products/electrical_contactor.png",
        datasheet: "#"
    },
    {
        id: "thermal-overload-relay",
        productName: "Thermal Overload Relay",
        manufacturerName: "L&T Switchgear",
        category: "Controlgear",
        shortDescription: "Motor protection against overload and phase failure.",
        fullDescription: "Reliable thermal overload relays for direct mounting on contactors. Provides accurate protection for motors against thermal overload and phase loss.",
        image: "images/products/thermal_overload_relay.png",
        datasheet: "#"
    },
    {
        id: "mpcb-motor-protection",
        productName: "MPCB",
        manufacturerName: "Siemens",
        category: "Controlgear",
        shortDescription: "Motor Protection Circuit Breaker.",
        fullDescription: "All-in-one motor protection solution combining short-circuit protection and overload protection in a single compact device.",
        image: "images/products/mpcb_motor_protection_circuit_breaker.png",
        datasheet: "#"
    },
    {
        id: "control-relay",
        productName: "Control Relay",
        manufacturerName: "Omron",
        category: "Controlgear",
        shortDescription: "Electromechanical relay for control circuits.",
        fullDescription: "Reliable control relays for switching low-power signals in industrial control systems. Features multiple contacts and long service life.",
        image: "images/products/control_relay_industrial.png",
        datasheet: "#"
    },
    {
        id: "industrial-contactor-alt",
        productName: "Industrial Contactor",
        manufacturerName: "ABB",
        category: "Controlgear",
        shortDescription: "Heavy-duty contactor for industrial use.",
        fullDescription: "Robust contactors for controlling high-power electrical loads in industrial environments. Features arc suppression and high durability.",
        image: "images/products/industrial_contactor.png",
        datasheet: "#"
    },
    {
        id: "power-relay",
        productName: "Power Relay",
        manufacturerName: "TE Connectivity",
        category: "Controlgear",
        shortDescription: "High-power switching relay.",
        fullDescription: "Electromechanical power relays for controlling high-current loads in industrial systems.",
        image: "images/products/power_relay_electrical.png",
        datasheet: "#"
    }
];

// Export for Node.js environment if needed, otherwise it's a global variable in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}
