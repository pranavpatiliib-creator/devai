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
        id: "plc-automation",
        productName: "PLC Controller",
        manufacturerName: "Allen-Bradley / Mitsubishi",
        category: "Automation",
        shortDescription: "Programmable Logic Controller for industrial automation.",
        fullDescription: "Advanced PLCs for complex machine control and process automation. Features modular design, high processing speed, and multiple communication protocols.",
        image: "images/products/plc_automation_controller.png",
        datasheet: "#"
    },
    {
        id: "hmi-touch-panel",
        productName: "HMI Touch Panel",
        manufacturerName: "Delta / Omron",
        category: "Automation",
        shortDescription: "Human Machine Interface for system monitoring.",
        fullDescription: "High-resolution HMI touch screens for intuitive machine operation and monitoring. Supports data logging, remote access, and various industrial protocols.",
        image: "images/products/hmi_touch_panel_industrial.png",
        datasheet: "#"
    },
    {
        id: "vfd-drive",
        productName: "VFD Drive",
        manufacturerName: "Danfoss / Yaskawa",
        category: "Automation",
        shortDescription: "Variable Frequency Drive for motor speed control.",
        fullDescription: "Energy-efficient AC drives for precise control of motor speed and torque. Ideal for pumps, fans, conveyors, and general automation applications.",
        image: "images/products/vfd_drive_industrial.png",
        datasheet: "#"
    },
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
        id: "inductive-sensor",
        productName: "Inductive Proximity Sensor",
        manufacturerName: "Sick / P&F",
        category: "Sensors",
        shortDescription: "Non-contact detection of metal objects.",
        fullDescription: "Rugged inductive sensors for position detection in automation. IP67 rated for harsh environments, available in various sensing ranges and outputs.",
        image: "images/products/inductive_proximity_sensor.png",
        datasheet: "#"
    },
    {
        id: "photoelectric-sensor",
        productName: "Photoelectric Sensor",
        manufacturerName: "Omron / Banner",
        category: "Sensors",
        shortDescription: "Optical detection for automation.",
        fullDescription: "Versatile photoelectric sensors for detecting objects regardless of material. Modes include through-beam, retro-reflective, and diffuse.",
        image: "images/products/photoelectric_sensor_industrial.png",
        datasheet: "#"
    },
    {
        id: "industrial-motor",
        productName: "Industrial Electric Motor",
        manufacturerName: "Bharat Bijlee / Crompton",
        category: "Motors",
        shortDescription: "Three-phase induction motor.",
        fullDescription: "High-efficiency IE2/IE3 induction motors for continuous industrial duty. Suitable for pumps, compressors, fans, and conveyor systems.",
        image: "images/products/industrial_electric_motor.png",
        datasheet: "#"
    },
    {
        id: "industrial-gearbox",
        productName: "Industrial Gearbox",
        manufacturerName: "Bonfiglioli",
        category: "Motors",
        shortDescription: "Heavy-duty transmission gearbox.",
        fullDescription: "Robust worm and helical gearboxes for torque multiplication and speed reduction. Designed for durability and smooth power transmission.",
        image: "images/products/industrial_gearbox.png",
        datasheet: "#"
    },
    {
        id: "armoured-cable",
        productName: "Armoured Power Cable",
        manufacturerName: "Polycab / KEI",
        category: "Cables",
        shortDescription: "XLPE insulated armoured cable.",
        fullDescription: "Heavy-duty armoured aluminum/copper cables for underground power distribution. Resistant to mechanical stress and environmental factors.",
        image: "images/products/armoured_electrical_cable.png",
        datasheet: "#"
    },
    {
        id: "cable-gland",
        productName: "Brass Cable Gland",
        manufacturerName: "Comet / Jainson",
        category: "Accessories",
        shortDescription: "Double compression brass gland.",
        fullDescription: "Weatherproof double compression cable glands for secure cable entry into panels and enclosures. IP66 rated for outdoor use.",
        image: "images/products/brass_cable_gland.png",
        datasheet: "#"
    },
    {
        id: "lt-control-panel",
        productName: "LT Control Panel",
        manufacturerName: "Custom / CPRI Approved",
        category: "Panels",
        shortDescription: "Low Tension Power Distribution Panel.",
        fullDescription: "Custom-built electrical command and control panels. Powder-coated rugged enclosures with high-quality busbars and switchgear layout.",
        image: "images/products/lt_control_panel.png",
        datasheet: "#"
    },
    {
        id: "led-flood-light",
        productName: "LED Flood Light",
        manufacturerName: "Philips / Bajaj",
        category: "Lighting",
        shortDescription: "High-intensity outdoor industrial lighting.",
        fullDescription: "Energy-saving LED floodlights for industrial yards, factories, and security lighting. IP65 waterproof housing with high lumen output.",
        image: "images/products/led_flood_light.png",
        datasheet: "#"
    },
    {
        id: "digital-multimeter",
        productName: "Digital Multimeter",
        manufacturerName: "Fluke 179",
        category: "Tools",
        shortDescription: "True-RMS Industrial Multimeter.",
        fullDescription: "Professional-grade digital multimeter for measuring voltage, current, resistance, and continuity. Essential for troubleshooting electrical systems.",
        image: "images/products/digital_multimeter_industrial.png",
        datasheet: "#"
    },
    {
        id: "power-tools",
        productName: "Industrial Power Tools",
        manufacturerName: "Bosch / Makita",
        category: "Tools",
        shortDescription: "Heavy-duty drill and grinder.",
        fullDescription: "Professional cordless and corded power tools for construction and maintenance. Ergonomic design with high durability.",
        image: "images/products/industrial_power_tools.png",
        datasheet: "#"
    },
    {
        id: "safety-switch",
        productName: "Safety Interlock Switch",
        manufacturerName: "Schmersal",
        category: "Safety",
        shortDescription: "Door safety switch for machine guarding.",
        fullDescription: "Safety interlock switches with solenoid locking. Prevents machine operation when guard doors are open, ensuring operator safety.",
        image: "images/products/door_safety_interlock_switch.png",
        datasheet: "#"
    },
    {
        id: "thermal-camera",
        productName: "Thermal Imaging Camera",
        manufacturerName: "FLIR",
        category: "Testing",
        shortDescription: "Infrared camera for hotspot detection.",
        fullDescription: "Handheld thermal imager for electrical inspections. Quickly identify overheating components, loose connections, and load imbalances.",
        image: "images/products/thermal_imaging_camera_industrial.png",
        datasheet: "#"
    },
    {
        id: "abs-enclosure",
        productName: "ABS Enclosure",
        manufacturerName: "Sibass / Hensel",
        category: "Enclosures",
        shortDescription: "Weatherproof IP65 Junction Box.",
        fullDescription: "Impact-resistant ABS/Polycarbonate enclosures for electrical junctions. UV stabilized and dustproof, suitable for outdoor installation.",
        image: "images/products/abs_electrical_enclosure.png",
        datasheet: "#"
    },
    {
        id: "industrial-bearing",
        productName: "Industrial Bearing",
        manufacturerName: "SKF / FAG",
        category: "Mechanical",
        shortDescription: "Ball and Roller Bearings.",
        fullDescription: "High-precision ball bearings for rotating machinery. Reduced friction and high load-carrying capacity for long service life.",
        image: "images/products/industrial_bearing.png",
        datasheet: "#"
    },
    {
        id: "clamp-meter",
        productName: "Clamp Meter",
        manufacturerName: "Fluke",
        category: "Testing",
        shortDescription: "AC/DC current measurement tool.",
        fullDescription: "Digital clamp meter for measuring AC/DC current, voltage, and resistance without breaking the circuit. Essential for electrical troubleshooting.",
        image: "images/products/clamp_meter_electrical.png",
        datasheet: "#"
    },
    {
        id: "cnc-machine-light",
        productName: "CNC Machine Light",
        manufacturerName: "Custom",
        category: "Lighting",
        shortDescription: "LED lighting for CNC machines.",
        fullDescription: "High-brightness LED lights designed for illuminating CNC machine work areas, providing clear visibility for precision operations.",
        image: "images/products/cnc_machine_light.png",
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
        id: "industrial-ethernet-switch",
        productName: "Industrial Ethernet Switch",
        manufacturerName: "Moxa",
        category: "Automation",
        shortDescription: "Managed Ethernet switch for industrial networks.",
        fullDescription: "Rugged Ethernet switches for industrial automation networks, supporting Gigabit speeds and redundant power inputs.",
        image: "images/products/industrial_ethernet_switch.png",
        datasheet: "#"
    },
    {
        id: "industrial-power-connector",
        productName: "Industrial Power Connector",
        manufacturerName: "Harting",
        category: "Accessories",
        shortDescription: "Heavy-duty power connector.",
        fullDescription: "IP67 rated power connectors for reliable electrical connections in industrial applications.",
        image: "images/products/industrial_power_connector.png",
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
    },
    {
        id: "led-high-bay-light",
        productName: "LED High Bay Light",
        manufacturerName: "Osram",
        category: "Lighting",
        shortDescription: "High-intensity LED for warehouses.",
        fullDescription: "Energy-efficient LED high bay lights for illuminating large industrial spaces like warehouses and factories.",
        image: "images/products/led_high_bay_light.png",
        datasheet: "#"
    },
    {
        id: "led-street-light",
        productName: "LED Street Light",
        manufacturerName: "Bajaj",
        category: "Lighting",
        shortDescription: "Outdoor LED street lighting.",
        fullDescription: "Solar-powered or grid-connected LED street lights for urban and industrial road lighting.",
        image: "images/products/led_street_light.png",
        datasheet: "#"
    },
    {
        id: "limit-switch",
        productName: "Limit Switch",
        manufacturerName: "Honeywell",
        category: "Sensors",
        shortDescription: "Position sensing switch.",
        fullDescription: "Mechanical limit switches for detecting the presence or position of objects in automation systems.",
        image: "images/products/limit_switch_industrial.png",
        datasheet: "#"
    },
    {
        id: "machine-safety-switch",
        productName: "Machine Safety Switch",
        manufacturerName: "Pilz",
        category: "Safety",
        shortDescription: "Safety switch for machine guarding.",
        fullDescription: "Non-contact safety switches for monitoring guard doors and ensuring safe machine operation.",
        image: "images/products/machine_safety_switch.png",
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
        id: "pneumatic-tools",
        productName: "Pneumatic Tools",
        manufacturerName: "Atlas Copco",
        category: "Tools",
        shortDescription: "Air-powered industrial tools.",
        fullDescription: "Pneumatic drills, wrenches, and grinders for heavy-duty industrial applications.",
        image: "images/products/pneumatic_tools_industrial.png",
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
    },
    {
        id: "rtd-sensor",
        productName: "RTD Temperature Sensor",
        manufacturerName: "Omega",
        category: "Sensors",
        shortDescription: "Resistance Temperature Detector.",
        fullDescription: "Accurate RTD sensors for measuring temperature in industrial processes, with high stability and linearity.",
        image: "images/products/rtd_temperature_sensor.png",
        datasheet: "#"
    },
    {
        id: "safety-relay",
        productName: "Safety Relay",
        manufacturerName: "Pilz",
        category: "Safety",
        shortDescription: "Relay for safety circuits.",
        fullDescription: "Safety relays for monitoring emergency stop circuits and ensuring fail-safe operation.",
        image: "images/products/safety_relay.png",
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
    },
    {
        id: "v-belt",
        productName: "V Belt",
        manufacturerName: "Gates",
        category: "Mechanical",
        shortDescription: "Industrial V-belt for power transmission.",
        fullDescription: "High-strength V-belts for efficient power transmission in industrial machinery.",
        image: "images/products/v_belt_industrial.png",
        datasheet: "#"
    },
    {
        id: "vmc-machine-light",
        productName: "VMC Machine Light",
        manufacturerName: "Custom",
        category: "Lighting",
        shortDescription: "LED light for Vertical Machining Centers.",
        fullDescription: "Specialized LED lighting for VMC machines, providing bright illumination for machining operations.",
        image: "images/products/vmc_machine_light.png",
        datasheet: "#"
    }
];

// Export for Node.js environment if needed, otherwise it's a global variable in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}
