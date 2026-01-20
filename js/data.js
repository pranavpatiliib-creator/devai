const products = [
    {
        id: "panels-switchgear",
        name: "Electrical Panels & Switchgear",
        image: "images/products/lt_control_panel.png",
        description: "LT / Control Panels, ACB, MCCB, MCB, SFU, Contactors, MPCB, Control Relays",
        link: "/products/panels-switchgear.html"
    },
    {
        id: "automation",
        name: "Automation Products",
        image: "images/products/plc_automation_controller.png",
        description: "PLC Systems, HMI Panels, AC / VFD Drives, Limit Switches, Industrial Ethernet Switches",
        link: "/products/automation.html"
    },
    {
        id: "sensors-safety",
        name: "Sensors & Safety Devices",
        image: "images/products/inductive_proximity_sensor.png",
        description: "Inductive Proximity Sensors, Photoelectric Sensors, Capacitive Sensors, Thermocouple & RTD, Reed Switch, Motion Sensors, Machine & Door Safety Switches",
        link: "/products/sensors-safety.html"
    },
    {
        id: "power-supply",
        name: "Power Supply & UPS",
        image: "images/products/smps_power_supply_industrial.png",
        description: "SMPS / Power Supplies, Industrial UPS, Batteries",
        link: "/products/power-supply.html"
    },
    {
        id: "lighting",
        name: "Industrial & Commercial Lighting",
        image: "images/products/led_flood_light.png",
        description: "Tube Lights, Highbay Lights, Flood Lights, Street Lights, CNC / VMC Lights, COB & Spot Lights",
        link: "/products/lighting.html"
    },
    {
        id: "motors-drives",
        name: "Motors, Drives & Hydraulics",
        image: "images/products/industrial_electric_motor.png",
        description: "Industrial Motors, Gearboxes, Hydraulic Valves, Pneumatic Systems",
        link: "/products/motors-drives.html"
    },
    {
        id: "tools",
        name: "Tools & Accessories",
        image: "images/products/industrial_power_tools.png",
        description: "Industrial Hand Tools, Power Tools, Pneumatic Tools, Cordless Tools",
        link: "/products/tools.html"
    },
    {
        id: "cables",
        name: "Cables & Connectivity",
        image: "images/products/armoured_electrical_cable.png",
        description: "Armoured Cables, Flexible Cables, Cable Glands (Brass / SS / PVC), Reducers & Conduits (PVC / Metal), Power & Sensor Connectors (Male / Female)",
        link: "/products/cables.html"
    },
    {
        id: "enclosures",
        name: "Enclosures & Panels",
        image: "images/products/abs_electrical_enclosure.png",
        description: "ABS Enclosures, Polycarbonate Transparent Enclosures, Aluminium Enclosures, Industrial Control Panels",
        link: "/products/enclosures.html"
    },
    {
        id: "measuring",
        name: "Measuring & Testing Instruments",
        image: "images/products/digital_multimeter_industrial.png",
        description: "Multimeters, Clamp Meters, Power Meters, Calibration Instruments",
        link: "/products/measuring.html"
    },
    {
        id: "mechanical",
        name: "Mechanical & Industrial Components",
        image: "images/products/industrial_bearing.png",
        description: "Industrial Bearings, V-Belts & Timing Belts, Cable Trays, Terminal Blocks, DIN Rails, Lugs & Cable Ties",
        link: "/products/mechanical.html"
    },
    {
        id: "domestic",
        name: "Domestic & Industrial Electricals",
        image: "images/products/industrial_electrical_switch_socket.png",
        description: "Switches & Sockets, Plugs, LED Lights & Tube Lights, Fans",
        link: "/products/domestic.html"
    },
    {
        id: "advanced-safety",
        name: "Advanced Services & Safety",
        image: "images/products/thermal_imaging_camera_industrial.png",
        description: "Thermography, Instrument Calibration, Retrofitting Services, Human Safety Products, Masks, Sanitizers, Temperature Guns, Thermal Imaging Cameras",
        link: "/products/advanced-safety.html"
    }
];

// If running in a Node.js environment (e.g. testing), export the module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
