const productsData = [
    {
        id: "acb-air-circuit-breaker",
        productName: "Air Circuit Breaker (ACB)",
        manufacturerName: "Schneider / ABB / L&T",
        category: "Electrical Switching & Protection",
        subCategory: "Air Circuit Breakers",
        shortDescription: "High-current circuit protection for industrial plants.",
        fullDescription: "Robust Air Circuit Breakers designed for the protection of electrical circuits in industrial and building low-voltage distribution systems. Features high breaking capacity and selective protection.",
        image: "../images/products/acb_air_circuit_breaker.png",
        datasheet: "#"
    },
    {
        id: "mccb-molded-case-circuit-breaker",
        productName: "Molded Case Circuit Breaker (MCCB)",
        manufacturerName: "Siemens / Legrand",
        category: "Electrical Switching & Protection",
        subCategory: "Moulded Case Circuit Breakers",
        shortDescription: "Reliable protection for distribution circuits.",
        fullDescription: "Molded Case Circuit Breakers provide protection against overloads and short circuits in electrical distribution systems. Available in various frame sizes and breaking capacities.",
        image: "../images/products/mccb_molded_case_circuit_breaker.png",
        datasheet: "#"
    },
    {
        id: "mcb-miniature-circuit-breaker",
        productName: "Miniature Circuit Breaker (MCB)",
        manufacturerName: "Polycab / Havells",
        category: "Electrical Switching & Protection",
        subCategory: "Modular Circuit Breakers",
        shortDescription: "Compact protection for final distribution.",
        fullDescription: "Standard MCBs for protection of cables and equipment against overload and short circuits. Ideal for domestic and commercial installations.",
        image: "../images/products/mcb_miniature_circuit_breaker.png",
        datasheet: "#"
    },
    {
        id: "electrical-contactor",
        productName: "Electrical Contactor",
        manufacturerName: "Schneider Electric",
        category: "Electrical Switching & Protection",
        subCategory: "Power Contactors",
        shortDescription: "Heavy-duty switching for motors and loads.",
        fullDescription: "High-performance contactors for controlling electric motors, lighting, heating, and capacitor banks. proven reliability in harsh industrial environments.",
        image: "../images/products/electrical_contactor.png",
        datasheet: "#"
    },
    {
        id: "thermal-overload-relay",
        productName: "Thermal Overload Relay",
        manufacturerName: "L&T Switchgear",
        category: "Electrical Switching & Protection",
        subCategory: "Thermal Overload Relays",
        shortDescription: "Motor protection against overload and phase failure.",
        fullDescription: "Reliable thermal overload relays for direct mounting on contactors. Provides accurate protection for motors against thermal overload and phase loss.",
        image: "../images/products/thermal_overload_relay.png",
        datasheet: "#"
    },
    {
        id: "mpcb-motor-protection",
        productName: "MPCB",
        manufacturerName: "Siemens",
        category: "Electrical Switching & Protection",
        subCategory: "Motor Protection Circuit Breakers",
        shortDescription: "Motor Protection Circuit Breaker.",
        fullDescription: "All-in-one motor protection solution combining short-circuit protection and overload protection in a single compact device.",
        image: "../images/products/mpcb_motor_protection_circuit_breaker.png",
        datasheet: "#"
    },
    {
        id: "plc-automation",
        productName: "PLC Controller",
        manufacturerName: "Allen-Bradley / Mitsubishi",
        category: "Automation & Control Components",
        subCategory: "Programmable Logic Controllers",
        shortDescription: "Programmable Logic Controller for industrial automation.",
        fullDescription: "Advanced PLCs for complex machine control and process automation. Features modular design, high processing speed, and multiple communication protocols.",
        image: "../images/products/plc_automation_controller.png",
        datasheet: "#"
    },
    {
        id: "hmi-touch-panel",
        productName: "HMI Touch Panel",
        manufacturerName: "Delta / Omron",
        category: "Automation & Control Components",
        subCategory: "Programmable Logic Controllers",
        shortDescription: "Human Machine Interface for system monitoring.",
        fullDescription: "High-resolution HMI touch screens for intuitive machine operation and monitoring. Supports data logging, remote access, and various industrial protocols.",
        image: "../images/products/hmi_touch_panel_industrial.png",
        datasheet: "#"
    },
    {
        id: "vfd-drive",
        productName: "VFD Drive",
        manufacturerName: "Danfoss / Yaskawa",
        category: "Automation & Control Components",
        subCategory: "Variable Frequency Drive Systems",
        shortDescription: "Variable Frequency Drive for motor speed control.",
        fullDescription: "Energy-efficient AC drives for precise control of motor speed and torque. Ideal for pumps, fans, conveyors, and general automation applications.",
        image: "../images/products/vfd_drive_industrial.png",
        datasheet: "#"
    },
    {
        id: "smps-power",
        productName: "Industrial SMPS",
        manufacturerName: "Mean Well",
        category: "Power Supply & Energy Management",
        subCategory: "Switch Mode Power Supplies",
        shortDescription: "Switched Mode Power Supply 24V DC.",
        fullDescription: "Reliable DIN-rail mounted power supplies for industrial control cabinets. Features high efficiency, wide input voltage range, and short-circuit protection.",
        image: "../images/products/smps_power_supply_industrial.png",
        datasheet: "#"
    },
    {
        id: "inductive-sensor",
        productName: "Inductive Proximity Sensor",
        manufacturerName: "Sick / P&F",
        category: "Sensors",
        shortDescription: "Non-contact detection of metal objects.",
        fullDescription: "Rugged inductive sensors for position detection in automation. IP67 rated for harsh environments, available in various sensing ranges and outputs.",
        image: "../images/products/inductive_proximity_sensor.png",
        datasheet: "#"
    },
    {
        id: "photoelectric-sensor",
        productName: "Photoelectric Sensor",
        manufacturerName: "Omron / Banner",
        category: "Sensors",
        shortDescription: "Optical detection for automation.",
        fullDescription: "Versatile photoelectric sensors for detecting objects regardless of material. Modes include through-beam, retro-reflective, and diffuse.",
        image: "../images/products/photoelectric_sensor_industrial.png",
        datasheet: "#"
    },
    {
        id: "industrial-motor",
        productName: "Industrial Electric Motor",
        manufacturerName: "Bharat Bijlee / Crompton",
        category: "Motors",
        shortDescription: "Three-phase induction motor.",
        fullDescription: "High-efficiency IE2/IE3 induction motors for continuous industrial duty. Suitable for pumps, compressors, fans, and conveyor systems.",
        image: "../images/products/industrial_electric_motor.png",
        datasheet: "#"
    },
    {
        id: "industrial-gearbox",
        productName: "Industrial Gearbox",
        manufacturerName: "Bonfiglioli",
        category: "Motors",
        shortDescription: "Heavy-duty transmission gearbox.",
        fullDescription: "Robust worm and helical gearboxes for torque multiplication and speed reduction. Designed for durability and smooth power transmission.",
        image: "../images/products/industrial_gearbox.png",
        datasheet: "#"
    },
    {
        id: "armoured-cable",
        productName: "Armoured Power Cable",
        manufacturerName: "Polycab / KEI",
        category: "Cables",
        shortDescription: "XLPE insulated armoured cable.",
        fullDescription: "Heavy-duty armoured aluminum/copper cables for underground power distribution. Resistant to mechanical stress and environmental factors.",
        image: "../images/products/armoured_electrical_cable.png",
        datasheet: "#"
    },
    {
        id: "cable-gland",
        productName: "Brass Cable Gland",
        manufacturerName: "Comet / Jainson",
        category: "Accessories",
        shortDescription: "Double compression brass gland.",
        fullDescription: "Weatherproof double compression cable glands for secure cable entry into panels and enclosures. IP66 rated for outdoor use.",
        image: "../images/products/brass_cable_gland.png",
        datasheet: "#"
    },
    {
        id: "lt-control-panel",
        productName: "LT Control Panel",
        manufacturerName: "Custom / CPRI Approved",
        category: "Panels",
        shortDescription: "Low Tension Power Distribution Panel.",
        fullDescription: "Custom-built electrical command and control panels. Powder-coated rugged enclosures with high-quality busbars and switchgear layout.",
        image: "../images/products/lt_control_panel.png",
        datasheet: "#"
    },
    {
        id: "led-flood-light",
        productName: "LED Flood Light",
        manufacturerName: "Philips / Bajaj",
        category: "Lighting",
        shortDescription: "High-intensity outdoor industrial lighting.",
        fullDescription: "Energy-saving LED floodlights for industrial yards, factories, and security lighting. IP65 waterproof housing with high lumen output.",
        image: "../images/products/led_flood_light.png",
        datasheet: "#"
    },
    {
        id: "digital-multimeter",
        productName: "Digital Multimeter",
        manufacturerName: "Fluke 179",
        category: "Tools",
        shortDescription: "True-RMS Industrial Multimeter.",
        fullDescription: "Professional-grade digital multimeter for measuring voltage, current, resistance, and continuity. Essential for troubleshooting electrical systems.",
        image: "../images/products/digital_multimeter_industrial.png",
        datasheet: "#"
    },
    {
        id: "power-tools",
        productName: "Industrial Power Tools",
        manufacturerName: "Bosch / Makita",
        category: "Tools",
        shortDescription: "Heavy-duty drill and grinder.",
        fullDescription: "Professional cordless and corded power tools for construction and maintenance. Ergonomic design with high durability.",
        image: "../images/products/industrial_power_tools.png",
        datasheet: "#"
    },
    {
        id: "safety-switch",
        productName: "Safety Interlock Switch",
        manufacturerName: "Schmersal",
        category: "Safety",
        shortDescription: "Door safety switch for machine guarding.",
        fullDescription: "Safety interlock switches with solenoid locking. Prevents machine operation when guard doors are open, ensuring operator safety.",
        image: "../images/products/door_safety_interlock_switch.png",
        datasheet: "#"
    },
    {
        id: "thermal-camera",
        productName: "Thermal Imaging Camera",
        manufacturerName: "FLIR",
        category: "Testing",
        shortDescription: "Infrared camera for hotspot detection.",
        fullDescription: "Handheld thermal imager for electrical inspections. Quickly identify overheating components, loose connections, and load imbalances.",
        image: "../images/products/thermal_imaging_camera_industrial.png",
        datasheet: "#"
    },
    {
        id: "abs-enclosure",
        productName: "ABS Enclosure",
        manufacturerName: "Sibass / Hensel",
        category: "Enclosures",
        shortDescription: "Weatherproof IP65 Junction Box.",
        fullDescription: "Impact-resistant ABS/Polycarbonate enclosures for electrical junctions. UV stabilized and dustproof, suitable for outdoor installation.",
        image: "../images/products/abs_electrical_enclosure.png",
        datasheet: "#"
    },
    {
        id: "industrial-bearing",
        productName: "Industrial Bearing",
        manufacturerName: "SKF / FAG",
        category: "Mechanical",
        shortDescription: "Ball and Roller Bearings.",
        fullDescription: "High-precision ball bearings for rotating machinery. Reduced friction and high load-carrying capacity for long service life.",
        image: "../images/products/industrial_bearing.png",
        datasheet: "#"
    },
    {
        id: "clamp-meter",
        productName: "Clamp Meter",
        manufacturerName: "Fluke",
        category: "Testing",
        shortDescription: "AC/DC current measurement tool.",
        fullDescription: "Digital clamp meter for measuring AC/DC current, voltage, and resistance without breaking the circuit. Essential for electrical troubleshooting.",
        image: "../images/products/clamp_meter_electrical.png",
        datasheet: "#"
    },
    {
        id: "cnc-machine-light",
        productName: "CNC Machine Light",
        manufacturerName: "Custom",
        category: "Lighting",
        shortDescription: "LED lighting for CNC machines.",
        fullDescription: "High-brightness LED lights designed for illuminating CNC machine work areas, providing clear visibility for precision operations.",
        image: "../images/products/cnc_machine_light.png",
        datasheet: "#"
    },
    {
        id: "control-relay",
        productName: "Control Relay",
        manufacturerName: "Omron",
        category: "Controlgear",
        shortDescription: "Electromechanical relay for control circuits.",
        fullDescription: "Reliable control relays for switching low-power signals in industrial control systems. Features multiple contacts and long service life.",
        image: "../images/products/control_relay_industrial.png",
        datasheet: "#"
    },
    {
        id: "din-rail-power-supply",
        productName: "DIN Rail Power Supply",
        manufacturerName: "Siemens",
        category: "Power Supply",
        shortDescription: "24V DC power supply for DIN rail mounting.",
        fullDescription: "Compact DIN-rail mounted power supplies for industrial applications, providing stable 24V DC output with overload protection.",
        image: "../images/products/din_rail_power_supply.png",
        datasheet: "#"
    },
    {
        id: "industrial-contactor-alt",
        productName: "Industrial Contactor",
        manufacturerName: "ABB",
        category: "Controlgear",
        shortDescription: "Heavy-duty contactor for industrial use.",
        fullDescription: "Robust contactors for controlling high-power electrical loads in industrial environments. Features arc suppression and high durability.",
        image: "../images/products/industrial_contactor.png",
        datasheet: "#"
    },
    {
        id: "industrial-ethernet-switch",
        productName: "Industrial Ethernet Switch",
        manufacturerName: "Moxa",
        category: "Automation",
        shortDescription: "Managed Ethernet switch for industrial networks.",
        fullDescription: "Rugged Ethernet switches for industrial automation networks, supporting Gigabit speeds and redundant power inputs.",
        image: "../images/products/industrial_ethernet_switch.png",
        datasheet: "#"
    },
    {
        id: "industrial-power-connector",
        productName: "Industrial Power Connector",
        manufacturerName: "Harting",
        category: "Accessories",
        shortDescription: "Heavy-duty power connector.",
        fullDescription: "IP67 rated power connectors for reliable electrical connections in industrial applications.",
        image: "../images/products/industrial_power_connector.png",
        datasheet: "#"
    },
    {
        id: "industrial-ups",
        productName: "Industrial UPS System",
        manufacturerName: "APC",
        category: "Power Supply",
        shortDescription: "Uninterruptible Power Supply for industrial equipment.",
        fullDescription: "Online UPS systems providing backup power and surge protection for critical industrial loads.",
        image: "../images/products/industrial_ups_system.png",
        datasheet: "#"
    },
    {
        id: "led-high-bay-light",
        productName: "LED High Bay Light",
        manufacturerName: "Osram",
        category: "Lighting",
        shortDescription: "High-intensity LED for warehouses.",
        fullDescription: "Energy-efficient LED high bay lights for illuminating large industrial spaces like warehouses and factories.",
        image: "../images/products/led_high_bay_light.png",
        datasheet: "#"
    },
    {
        id: "led-street-light",
        productName: "LED Street Light",
        manufacturerName: "Bajaj",
        category: "Lighting",
        shortDescription: "Outdoor LED street lighting.",
        fullDescription: "Solar-powered or grid-connected LED street lights for urban and industrial road lighting.",
        image: "../images/products/led_street_light.png",
        datasheet: "#"
    },
    {
        id: "limit-switch",
        productName: "Limit Switch",
        manufacturerName: "Honeywell",
        category: "Sensors",
        shortDescription: "Position sensing switch.",
        fullDescription: "Mechanical limit switches for detecting the presence or position of objects in automation systems.",
        image: "../images/products/limit_switch_industrial.png",
        datasheet: "#"
    },
    {
        id: "machine-safety-switch",
        productName: "Machine Safety Switch",
        manufacturerName: "Pilz",
        category: "Safety",
        shortDescription: "Safety switch for machine guarding.",
        fullDescription: "Non-contact safety switches for monitoring guard doors and ensuring safe machine operation.",
        image: "../images/products/machine_safety_switch.png",
        datasheet: "#"
    },
    {
        id: "mcb-electrical-switch",
        productName: "MCB Electrical Switch",
        manufacturerName: "Schneider",
        category: "Switchgear",
        shortDescription: "Miniature circuit breaker switch.",
        fullDescription: "Compact MCBs for branch circuit protection in electrical distribution systems.",
        image: "../images/products/mcb_electrical_switch.png",
        datasheet: "#"
    },
    {
        id: "mccb-electrical-switchgear",
        productName: "MCCB Electrical Switchgear",
        manufacturerName: "L&T",
        category: "Switchgear",
        shortDescription: "Molded case circuit breaker for switchgear.",
        fullDescription: "High-capacity MCCBs for main and feeder circuit protection in switchgear assemblies.",
        image: "../images/products/mccb_electrical_switchgear.png",
        datasheet: "#"
    },
    {
        id: "pneumatic-tools",
        productName: "Pneumatic Tools",
        manufacturerName: "Atlas Copco",
        category: "Tools",
        shortDescription: "Air-powered industrial tools.",
        fullDescription: "Pneumatic drills, wrenches, and grinders for heavy-duty industrial applications.",
        image: "../images/products/pneumatic_tools_industrial.png",
        datasheet: "#"
    },
    {
        id: "power-relay",
        productName: "Power Relay",
        manufacturerName: "TE Connectivity",
        category: "Controlgear",
        shortDescription: "High-power switching relay.",
        fullDescription: "Electromechanical power relays for controlling high-current loads in industrial systems.",
        image: "../images/products/power_relay_electrical.png",
        datasheet: "#"
    },
    {
        id: "rtd-sensor",
        productName: "RTD Temperature Sensor",
        manufacturerName: "Omega",
        category: "Sensors",
        shortDescription: "Resistance Temperature Detector.",
        fullDescription: "Accurate RTD sensors for measuring temperature in industrial processes, with high stability and linearity.",
        image: "../images/products/rtd_temperature_sensor.png",
        datasheet: "#"
    },
    {
        id: "safety-relay",
        productName: "Safety Relay",
        manufacturerName: "Pilz",
        category: "Safety",
        shortDescription: "Relay for safety circuits.",
        fullDescription: "Safety relays for monitoring emergency stop circuits and ensuring fail-safe operation.",
        image: "../images/products/safety_relay.png",
        datasheet: "#"
    },
    {
        id: "sfu-switch-fuse-unit",
        productName: "SFU Switch Fuse Unit",
        manufacturerName: "Siemens",
        category: "Switchgear",
        shortDescription: "Switch fuse unit for motor circuits.",
        fullDescription: "Combination switch and fuse units for protection and isolation of motor circuits.",
        image: "../images/products/sfu_switch_fuse_unit.png",
        datasheet: "#"
    },
    {
        id: "v-belt",
        productName: "V Belt",
        manufacturerName: "Gates",
        category: "Mechanical",
        shortDescription: "Industrial V-belt for power transmission.",
        fullDescription: "High-strength V-belts for efficient power transmission in industrial machinery.",
        image: "../images/products/v_belt_industrial.png",
        datasheet: "#"
    },
    {
        id: "vmc-machine-light",
        productName: "VMC Machine Light",
        manufacturerName: "Custom",
        category: "Lighting",
        shortDescription: "LED light for Vertical Machining Centers.",
        fullDescription: "Specialized LED lighting for VMC machines, providing bright illumination for machining operations.",
        image: "../images/products/vmc_machine_light.png",
        datasheet: "#"
    },
    {
        id: "distributed-io",
        productName: "Distributed I/O",
        manufacturerName: "Siemens / Rockwell",
        category: "Automation & Control Components",
        subCategory: "Programmable Logic Controllers",
        shortDescription: "Modular I/O for distributed control systems.",
        fullDescription: "Distributed I/O modules for extending PLC capabilities in remote locations. Supports various communication protocols and provides reliable signal processing.",
        image: "../images/products/distributed-io.png",
        datasheet: "#"
    },
    {
        id: "soft-starter",
        productName: "Soft Starter",
        manufacturerName: "Schneider / ABB",
        category: "Automation & Control Components",
        subCategory: "Variable Frequency Drive Systems",
        shortDescription: "Smooth motor starting and stopping.",
        fullDescription: "Soft starters provide controlled acceleration and deceleration of electric motors, reducing mechanical stress and electrical disturbances.",
        image: "../images/products/soft-starter.png",
        datasheet: "#"
    },
    {
        id: "pressure-switch",
        productName: "Pressure Switch",
        manufacturerName: "Danfoss / Honeywell",
        category: "Automation & Control Components",
        subCategory: "Pressure Switches & Transducers",
        shortDescription: "Pressure monitoring and control.",
        fullDescription: "Pressure switches and transducers for monitoring fluid pressure in industrial systems. Available in various pressure ranges and electrical outputs.",
        image: "../images/products/pressure-switch.png",
        datasheet: "#"
    },
    {
        id: "presence-detector",
        productName: "Presence Detector",
        manufacturerName: "Pepperl+Fuchs",
        category: "Automation & Control Components",
        subCategory: "Presence Detectors",
        shortDescription: "Detection of objects in automation.",
        fullDescription: "Presence detectors for reliable object detection in industrial automation applications. IP67 rated for harsh environments.",
        image: "../images/products/presence-detector.png",
        datasheet: "#"
    },
    {
        id: "coded-magnetic-switch",
        productName: "Coded Magnetic Switch",
        manufacturerName: "Schmersal",
        category: "Automation & Control Components",
        subCategory: "Coded Magnetic Switches",
        shortDescription: "Safety magnetic switch with coding.",
        fullDescription: "Coded magnetic safety switches for machine guarding. Provides high safety levels with unique coding to prevent tampering.",
        image: "../images/products/coded-magnetic-switch.png",
        datasheet: "#"
    },
    {
        id: "switch-fuse-unit",
        productName: "Switch Fuse Unit",
        manufacturerName: "Siemens / L&T",
        category: "Electrical Switching & Protection",
        subCategory: "Switch Fuse Units and Isolators",
        shortDescription: "Combined switching and protection device.",
        fullDescription: "Switch fuse units provide manual switching and fuse protection for electrical circuits. Used for motor control and distribution applications.",
        image: "../images/products/sfu_switch_fuse_unit.png",
        datasheet: "#"
    },
    {
        id: "auto-changeover-system",
        productName: "Auto Source Changeover System",
        manufacturerName: "Schneider / ABB",
        category: "Electrical Switching & Protection",
        subCategory: "Auto Source Changeover Systems",
        shortDescription: "Automatic switching between power sources.",
        fullDescription: "Automatic transfer switches for seamless switching between main and backup power sources. Ensures uninterrupted power supply.",
        image: "../images/products/auto-changeover-system.png",
        datasheet: "#"
    },
    {
        id: "surge-arrester",
        productName: "Surge Arrester",
        manufacturerName: "Siemens / ABB",
        category: "Electrical Switching & Protection",
        subCategory: "Surge Arresters",
        shortDescription: "Protection against voltage surges.",
        fullDescription: "Surge arresters protect electrical equipment from overvoltage transients caused by lightning or switching operations.",
        image: "../images/products/surge-arrester.png",
        datasheet: "#"
    },
    {
        id: "time-switch",
        productName: "Time Switch",
        manufacturerName: "Theben / L&T",
        category: "Electrical Switching & Protection",
        subCategory: "Time Switches / Light Sensitive Switches",
        shortDescription: "Programmable timer for electrical circuits.",
        fullDescription: "Digital time switches for automated control of lighting, heating, and other electrical loads based on time schedules.",
        image: "../images/products/time-switch.png",
        datasheet: "#"
    },
    {
        id: "electronic-overcurrent-relay",
        productName: "Electronic Over Current Relay",
        manufacturerName: "Siemens / ABB",
        category: "Electrical Switching & Protection",
        subCategory: "Electronic Over Current Relays",
        shortDescription: "Advanced overcurrent protection.",
        fullDescription: "Electronic overcurrent relays provide precise protection against overload and short circuit conditions in electrical systems.",
        image: "../images/products/electronic-overcurrent-relay.png",
        datasheet: "#"
    },
    {
        id: "power-meter",
        productName: "Power Meter",
        manufacturerName: "Schneider / Siemens",
        category: "Power Supply & Energy Management",
        subCategory: "Power Meters and Analyzers",
        shortDescription: "Electrical power measurement and monitoring.",
        fullDescription: "Digital power meters for measuring electrical parameters like voltage, current, power, and energy consumption.",
        image: "../images/products/power-meter.png",
        datasheet: "#"
    },
    {
        id: "power-quality-analyzer",
        productName: "Power Quality Analyzer",
        manufacturerName: "Fluke / Hioki",
        category: "Power Supply & Energy Management",
        subCategory: "Power Quality Analyzer",
        shortDescription: "Analysis of electrical power quality.",
        fullDescription: "Portable power quality analyzers for monitoring harmonics, transients, and other power quality parameters.",
        image: "../images/products/power-quality-analyzer.png",
        datasheet: "#"
    },
    {
        id: "pf-capacitor",
        productName: "PF Improvement Capacitor",
        manufacturerName: "EPCOS / ABB",
        category: "Power Supply & Energy Management",
        subCategory: "PF Improvement Capacitor",
        shortDescription: "Power factor correction capacitor.",
        fullDescription: "Power factor improvement capacitors for enhancing electrical system efficiency and reducing energy costs.",
        image: "../images/products/pf-capacitor.png",
        datasheet: "#"
    },
    {
        id: "tower-light",
        productName: "Tower Light",
        manufacturerName: "Patlite / Schneider",
        category: "Industrial Indicators & Signaling",
        subCategory: "Tower Light",
        shortDescription: "Multi-color signal tower.",
        fullDescription: "LED signal towers for visual indication of machine status, alarms, and process conditions in industrial environments.",
        image: "../images/products/tower-light.png",
        datasheet: "#"
    },
    {
        id: "warning-light",
        productName: "Warning / Revolving Light",
        manufacturerName: "Federal Signal",
        category: "Industrial Indicators & Signaling",
        subCategory: "Warning / Revolving Light",
        shortDescription: "Rotating warning beacon.",
        fullDescription: "Revolving warning lights for alerting personnel to hazardous conditions or equipment status.",
        image: "../images/products/warning-light.png",
        datasheet: "#"
    },
    {
        id: "siren-buzzer",
        productName: "Siren / Buzzer",
        manufacturerName: "Patlite / Honeywell",
        category: "Industrial Indicators & Signaling",
        subCategory: "Siren / Buzzer",
        shortDescription: "Audible alarm device.",
        fullDescription: "Industrial sirens and buzzers for audible signaling in noisy industrial environments.",
        image: "../images/products/siren-buzzer.png",
        datasheet: "#"
    },
    {
        id: "push-button",
        productName: "Push Button",
        manufacturerName: "Schneider / Siemens",
        category: "Machine Interface & Operator Control",
        subCategory: "Push Buttons, Switches, Pilot Lights",
        shortDescription: "Manual control interface.",
        fullDescription: "Industrial push buttons and switches for operator control of machinery and processes.",
        image: "../images/products/push-button.png",
        datasheet: "#"
    },
    {
        id: "control-station",
        productName: "Control Station",
        manufacturerName: "Rittal / Schneider",
        category: "Machine Interface & Operator Control",
        subCategory: "Control Stations",
        shortDescription: "Operator control panel.",
        fullDescription: "Pre-assembled control stations with push buttons, selectors, and indicators for machine control.",
        image: "../images/products/control-station.png",
        datasheet: "#"
    },
    {
        id: "pendant-station",
        productName: "Pendant Station",
        manufacturerName: "Schneider / Siemens",
        category: "Machine Interface & Operator Control",
        subCategory: "Pendant Stations",
        shortDescription: "Portable control pendant.",
        fullDescription: "Pendant control stations for crane and hoist operation, providing ergonomic control interfaces.",
        image: "../images/products/pendant-station.png",
        datasheet: "#"
    },
    {
        id: "joystick-controller",
        productName: "Joystick Controller",
        manufacturerName: "Schneider / ABB",
        category: "Machine Interface & Operator Control",
        subCategory: "Joystick Controllers",
        shortDescription: "Multi-axis control device.",
        fullDescription: "Industrial joysticks for precise control of machinery movement in multiple axes.",
        image: "../images/products/joystick-controller.png",
        datasheet: "#"
    },
    {
        id: "industrial-plug-socket",
        productName: "Industrial Plug and Socket",
        manufacturerName: "Mennekes / Schneider",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Industrial Plug and Socket",
        shortDescription: "Heavy-duty electrical connector.",
        fullDescription: "Industrial plugs and sockets for safe and reliable power connections in harsh environments.",
        image: "../images/products/industrial_electrical_switch_socket.png",
        datasheet: "#"
    },
    {
        id: "plug-socket-enclosure",
        productName: "Plug & Socket with Enclosure",
        manufacturerName: "ABB / Siemens",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Plug & Socket with Enclosure",
        shortDescription: "Weatherproof plug and socket assembly.",
        fullDescription: "Enclosed plug and socket combinations for outdoor and industrial applications.",
        image: "../images/products/plug-socket-enclosure.png",
        datasheet: "#"
    },
    {
        id: "cable-drum",
        productName: "Cable Drums",
        manufacturerName: "Custom",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Cable Drums",
        shortDescription: "Cable storage and dispensing.",
        fullDescription: "Cable drums for safe storage and controlled dispensing of electrical cables.",
        image: "../images/products/cable-drum.png",
        datasheet: "#"
    },
    {
        id: "pvc-channel",
        productName: "PVC Channel & MCB Channel",
        manufacturerName: "Legrand / Schneider",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "PVC Channel & MCB Channel",
        shortDescription: "Cable management channel.",
        fullDescription: "PVC channels and MCB channels for organizing and protecting electrical wiring.",
        image: "../images/products/din_rail_electrical.png",
        datasheet: "#"
    },
    {
        id: "heavy-duty-connector",
        productName: "Heavy Duty Connectors",
        manufacturerName: "Harting / Phoenix",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Heavy Duty Connectors",
        shortDescription: "Rugged electrical connector.",
        fullDescription: "Heavy-duty connectors for reliable power and signal connections in industrial environments.",
        image: "../images/products/industrial_power_connector.png",
        datasheet: "#"
    },
    {
        id: "empty-enclosure",
        productName: "Empty Enclosures",
        manufacturerName: "Rittal / Schneider",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Empty Enclosures",
        shortDescription: "Electrical enclosure housing.",
        fullDescription: "Empty electrical enclosures for housing control equipment and protecting against environmental factors.",
        image: "../images/products/empty-enclosure.png",
        datasheet: "#"
    },
    {
        id: "junction-box-ip65",
        productName: "Junction Box IP65",
        manufacturerName: "Hensel / Schneider",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Junction Box IP65",
        shortDescription: "Weatherproof junction box.",
        fullDescription: "IP65 rated junction boxes for protecting electrical connections in outdoor and wet environments.",
        image: "../images/products/abs_electrical_enclosure.png",
        datasheet: "#"
    },
    {
        id: "cooling-fan",
        productName: "Cooling Fan",
        manufacturerName: "ebm-papst / Schneider",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Cooling Fan",
        shortDescription: "Enclosure ventilation fan.",
        fullDescription: "Cooling fans for maintaining optimal temperatures inside electrical enclosures.",
        image: "../images/products/cooling-fan.png",
        datasheet: "#"
    },
    {
        id: "fan-filter",
        productName: "Fan Filter",
        manufacturerName: "Rittal / Schneider",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Fan Filter",
        shortDescription: "Filtered ventilation unit.",
        fullDescription: "Fan filter units for filtered air circulation in electrical enclosures.",
        image: "../images/products/fan-filter.png",
        datasheet: "#"
    },
    {
        id: "heat-shrink",
        productName: "Heat Shrink",
        manufacturerName: "3M / Raychem",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Heat Shrink",
        shortDescription: "Cable insulation tubing.",
        fullDescription: "Heat shrink tubing for electrical insulation and mechanical protection of cables and connections.",
        image: "../images/products/heat-shrink.png",
        datasheet: "#"
    },
    {
        id: "spiral-wrapping",
        productName: "Spiral",
        manufacturerName: "HellermannTyton",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Spiral",
        shortDescription: "Cable bundling spiral wrap.",
        fullDescription: "Spiral wrapping for organizing and protecting cable bundles.",
        image: "../images/products/spiral-wrapping.png",
        datasheet: "#"
    },
    {
        id: "safety-limit-switch",
        productName: "Safety Limit Switch",
        manufacturerName: "Schmersal / Pilz",
        category: "Safety, Testing & Measurement",
        subCategory: "Safety Products",
        shortDescription: "Safety position switch.",
        fullDescription: "Safety limit switches for monitoring guard positions and ensuring safe machine operation.",
        image: "../images/products/limit_switch_industrial.png",
        datasheet: "#"
    },
    {
        id: "foot-switch",
        productName: "Foot Switch",
        manufacturerName: "Schneider / Siemens",
        category: "Safety, Testing & Measurement",
        subCategory: "Safety Products",
        shortDescription: "Hands-free control switch.",
        fullDescription: "Foot-operated switches for hands-free control of machinery and processes.",
        image: "../images/products/foot-switch.png",
        datasheet: "#"
    },
    {
        id: "pull-cord-switch",
        productName: "Pull Cord Switch",
        manufacturerName: "Schmersal",
        category: "Safety, Testing & Measurement",
        subCategory: "Safety Products",
        shortDescription: "Emergency stop pull cord.",
        fullDescription: "Pull cord switches for emergency stopping of conveyor systems and machinery.",
        image: "../images/products/pull-cord-switch.png",
        datasheet: "#"
    },
    {
        id: "guard-protection-switch",
        productName: "Guard Protection Switch",
        manufacturerName: "Pilz / Schmersal",
        category: "Safety, Testing & Measurement",
        subCategory: "Safety Products",
        shortDescription: "Safety guard monitoring switch.",
        fullDescription: "Safety switches for monitoring the position of protective guards on machinery.",
        image: "../images/products/guard-protection-switch.png",
        datasheet: "#"
    },
    {
        id: "analog-insulation-tester",
        productName: "Analog Insulation Hi Tester",
        manufacturerName: "Hioki / Megger",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "Insulation resistance measurement.",
        fullDescription: "Analog insulation testers for measuring insulation resistance in electrical systems.",
        image: "../images/products/analog-insulation-tester.png",
        datasheet: "#"
    },
    {
        id: "digital-insulation-tester",
        productName: "Digital Insulation Tester",
        manufacturerName: "Fluke / Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "Digital insulation resistance tester.",
        fullDescription: "Digital insulation testers with advanced features for electrical safety testing.",
        image: "../images/products/digital-insulation-tester.png",
        datasheet: "#"
    },
    {
        id: "high-voltage-insulation-tester",
        productName: "High Voltage Insulation Tester",
        manufacturerName: "Megger / Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "High voltage insulation testing.",
        fullDescription: "High voltage insulation testers for testing insulation integrity in high-voltage systems.",
        image: "../images/products/high-voltage-insulation-tester.png",
        datasheet: "#"
    },
    {
        id: "automatic-insulation-tester",
        productName: "Automatic Insulation with Stand Tester",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "Automated insulation testing system.",
        fullDescription: "Automatic insulation testers with test stands for high-volume testing applications.",
        image: "../images/products/automatic-insulation-tester.png",
        datasheet: "#"
    },
    {
        id: "electronic-measuring-meter",
        productName: "Electronic Measuring Meters",
        manufacturerName: "Fluke / Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Measuring Instruments",
        shortDescription: "Electronic measurement instruments.",
        fullDescription: "Electronic measuring meters for various electrical parameters and industrial measurements.",
        image: "../images/products/electronic-measuring-meter.png",
        datasheet: "#"
    },
    {
        id: "led-voltmeter",
        productName: "LED Indicating Voltmeter / Ammeter",
        manufacturerName: "Schneider / Siemens",
        category: "Safety, Testing & Measurement",
        subCategory: "Measuring Instruments",
        shortDescription: "LED display measuring instrument.",
        fullDescription: "LED indicating voltmeters and ammeters for panel mounting and electrical parameter display.",
        image: "../images/products/led-voltmeter.png",
        datasheet: "#"
    },
    {
        id: "multifunction-meter",
        productName: "Multifunction Meter",
        manufacturerName: "Schneider / Siemens",
        category: "Safety, Testing & Measurement",
        subCategory: "Measuring Instruments",
        shortDescription: "Multi-parameter electrical meter.",
        fullDescription: "Multifunction meters for measuring multiple electrical parameters simultaneously.",
        image: "../images/products/multifunction-meter.png",
        datasheet: "#"
    },
    {
        id: "hour-meter",
        productName: "Hour Meter",
        manufacturerName: "Hengstler / Schneider",
        category: "Safety, Testing & Measurement",
        subCategory: "Measuring Instruments",
        shortDescription: "Equipment runtime counter.",
        fullDescription: "Hour meters for tracking equipment operating time and maintenance scheduling.",
        image: "../images/products/hour-meter.png",
        datasheet: "#"
    }
    , {
        id: "hydraulic-power-pack",
        productName: "Hydraulic Power Pack",
        manufacturerName: "Bosch Rexroth / Yuken",
        category: "Hydraulics & Pneumatics",
        subCategory: "Hydraulic Systems",
        shortDescription: "Compact hydraulic power unit for industrial applications.",
        fullDescription: "Hydraulic power packs generate and supply pressurized hydraulic oil to operate cylinders, motors, and valves. Designed for continuous-duty industrial use with high efficiency and reliability.",
        image: "../images/products/hydraulic-power-pack.png",
        datasheet: "#"
    },
    {
        id: "hydraulic-cylinder",
        productName: "Hydraulic Cylinder",
        manufacturerName: "Parker / Eaton",
        category: "Hydraulics & Pneumatics",
        subCategory: "Hydraulic Actuators",
        shortDescription: "Double-acting hydraulic cylinder for heavy-duty motion.",
        fullDescription: "High-performance hydraulic cylinders used for linear motion in industrial machinery. Built with robust seals and precision-machined barrels for long service life.",
        image: "../images/products/hydraulic-cylinder.png",
        datasheet: "#"
    },
    {
        id: "directional-control-valve",
        productName: "Directional Control Valve",
        manufacturerName: "Yuken / Bosch Rexroth",
        category: "Hydraulics & Pneumatics",
        subCategory: "Hydraulic Valves",
        shortDescription: "Solenoid-operated directional control valve.",
        fullDescription: "Directional control valves regulate the flow path of hydraulic fluid, enabling precise control of actuators. Suitable for high-pressure industrial hydraulic circuits.",
        image: "../images/products/directional-control-valve.png",
        datasheet: "#"
    },
    {
        id: "industrial-air-compressor",
        productName: "Industrial Air Compressor",
        manufacturerName: "Atlas Copco / ELGi",
        category: "Hydraulics & Pneumatics",
        subCategory: "Pneumatic Systems",
        shortDescription: "High-efficiency compressed air generation system.",
        fullDescription: "Industrial air compressors supply compressed air for pneumatic tools and automation systems. Designed for energy efficiency, low noise, and continuous operation.",
        image: "../images/products/industrial-air-compressor.png",
        datasheet: "#"
    },
    {
        id: "pneumatic-solenoid-valve",
        productName: "Pneumatic Solenoid Valve",
        manufacturerName: "SMC / Festo",
        category: "Hydraulics & Pneumatics",
        subCategory: "Pneumatic Valves",
        shortDescription: "Electrically actuated pneumatic control valve.",
        fullDescription: "Pneumatic solenoid valves control airflow in automation systems. Compact design with fast switching response, suitable for industrial and process automation.",
        image: "../images/products/pneumatic-solenoid-valve.png",
        datasheet: "#"
    },
    {
        id: "air-preparation-unit-frl",
        productName: "Air Preparation Unit (FRL)",
        manufacturerName: "SMC / Parker",
        category: "Hydraulics & Pneumatics",
        subCategory: "Pneumatic Accessories",
        shortDescription: "Filter, regulator, and lubricator unit for clean air supply.",
        fullDescription: "FRL units ensure clean, regulated, and lubricated compressed air supply to pneumatic equipment, improving performance and extending component life.",
        image: "../images/products/air-preparation-unit-frl.png",
        datasheet: "#"
    },

    // THERMAL IMAGING CAMERAS - Specific Models
    {
        id: "flir-tg297-thermal-camera",
        productName: "Flir TG-297 Thermal Camera",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Thermal Imaging Cameras",
        shortDescription: "Compact thermal imaging camera for electrical inspections.",
        fullDescription: "FLIR TG-297 thermal camera features a built-in laser pointer for precise targeting and thermal imaging capabilities for detecting hotspots in electrical systems.",
        image: "../images/products/flir-tg297-thermal-camera.png",
        datasheet: "#"
    },
    {
        id: "flir-c3-compact-thermal-imager",
        productName: "Flir C3 Compact Thermal Imager",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Thermal Imaging Cameras",
        shortDescription: "Pocket-sized thermal imaging camera.",
        fullDescription: "FLIR C3 compact thermal imager with MSX technology for enhanced image detail. Ideal for electrical, mechanical, and building inspections.",
        image: "../images/products/flir-c3-compact-thermal-imager.png",
        datasheet: "#"
    },
    {
        id: "flir-c2-compact-thermal-camera",
        productName: "Flir C2 Compact Thermal Camera",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Thermal Imaging Cameras",
        shortDescription: "Entry-level compact thermal camera.",
        fullDescription: "FLIR C2 compact thermal camera provides affordable thermal imaging for detecting energy loss, moisture intrusion, and electrical faults.",
        image: "../images/products/flir-c2-compact-thermal-camera.png",
        datasheet: "#"
    },
    {
        id: "flir-one-pro-lt",
        productName: "Flir One Pro LT Pro-Grade Thermal Camera for Smartphones",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Thermal Imaging Cameras",
        shortDescription: "Smartphone-attachable thermal camera.",
        fullDescription: "FLIR One Pro LT transforms smartphones into thermal imaging devices. Professional-grade thermal camera for mobile diagnostics and inspections.",
        image: "../images/products/flir-one-pro-lt.png",
        datasheet: "#"
    },

    // ELECTRONIC MEASURING METERS - Extech Products
    {
        id: "extech-480846-rf-emf-meter",
        productName: "Extech 480846 RF Electromagnetic Field Strength Meter",
        manufacturerName: "Extech",
        category: "Safety, Testing & Measurement",
        subCategory: "Electronic Measuring Meters",
        shortDescription: "RF electromagnetic field strength measurement.",
        fullDescription: "Extech 480846 measures RF electromagnetic field strength from 50MHz to 3.5GHz. Essential for EMF testing and compliance verification.",
        image: "../images/products/extech-480846-rf-emf-meter.png",
        datasheet: "#"
    },
    {
        id: "extech-382252-earth-ground-tester",
        productName: "Extech 382252 Earth Ground Resistance Tester Kit",
        manufacturerName: "Extech",
        category: "Safety, Testing & Measurement",
        subCategory: "Electronic Measuring Meters",
        shortDescription: "Earth ground resistance testing kit.",
        fullDescription: "Extech 382252 earth ground resistance tester measures ground resistance and earth voltage. Complete kit with accessories for comprehensive grounding tests.",
        image: "../images/products/extech-382252-earth-ground-tester.png",
        datasheet: "#"
    },
    {
        id: "extech-380260-megohmmeter",
        productName: "Extech 380260 Autoranging Digital Megohmmeter",
        manufacturerName: "Extech",
        category: "Safety, Testing & Measurement",
        subCategory: "Electronic Measuring Meters",
        shortDescription: "Digital insulation resistance tester.",
        fullDescription: "Extech 380260 autoranging digital megohmmeter for insulation resistance testing up to 4000MΩ. Features multiple test voltages and data hold function.",
        image: "../images/products/extech-380260-megohmmeter.png",
        datasheet: "#"
    },
    {
        id: "extech-easyview-10-thermometer",
        productName: "Extech EasyView 10 Dual Input Thermometers",
        manufacturerName: "Extech",
        category: "Safety, Testing & Measurement",
        subCategory: "Electronic Measuring Meters",
        shortDescription: "Dual-channel digital thermometer.",
        fullDescription: "Extech EasyView 10 dual input thermometer with large backlit display. Measures temperature from two K-type thermocouples simultaneously.",
        image: "../images/products/extech-easyview-10-thermometer.png",
        datasheet: "#"
    },

    // POWER METERS AND ANALYZERS - Hioki Products
    {
        id: "hioki-3331-power-hitester",
        productName: "Hioki 3331 Power HiTester",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Power Meters and Analyzers",
        shortDescription: "Portable power quality analyzer.",
        fullDescription: "Hioki 3331 Power HiTester for measuring power, harmonics, and power quality parameters. Essential for electrical system analysis and troubleshooting.",
        image: "../images/products/hioki-3331-power-hitester.png",
        datasheet: "#"
    },
    {
        id: "hioki-ft4310-bypass-diode-tester",
        productName: "Hioki FT4310 Bypass Diode Tester",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Power Meters and Analyzers",
        shortDescription: "Solar panel bypass diode testing.",
        fullDescription: "Hioki FT4310 bypass diode tester for quick and accurate testing of bypass diodes in solar panels without disconnecting wiring.",
        image: "../images/products/hioki-ft4310-bypass-diode-tester.png",
        datasheet: "#"
    },
    {
        id: "hioki-ft6031-earth-tester",
        productName: "Hioki FT6031 Earth Tester",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Power Meters and Analyzers",
        shortDescription: "Digital earth resistance tester.",
        fullDescription: "Hioki FT6031 earth tester for measuring ground resistance with high accuracy. Features compact design and simple operation for field testing.",
        image: "../images/products/hioki-ft6031-earth-tester.png",
        datasheet: "#"
    },

    // TEST & MEASUREMENT SYSTEM - FLIR Clamp Meters
    {
        id: "flir-cm275-wireless-clamp-meter",
        productName: "Flir CM275 Wireless Clamp Meter with Datalogging",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "Wireless clamp meter with data logging.",
        fullDescription: "FLIR CM275 wireless clamp meter with built-in data logging and wireless connectivity. Measures AC/DC current, voltage, and resistance with imaging capabilities.",
        image: "../images/products/flir-cm275-wireless-clamp-meter.png",
        datasheet: "#"
    },
    {
        id: "flir-cm174-clamp-meter",
        productName: "Flir CM174 Clamp Meter",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "True RMS clamp meter with thermal imaging.",
        fullDescription: "FLIR CM174 clamp meter combines electrical measurements with built-in thermal imaging for comprehensive electrical troubleshooting.",
        image: "../images/products/flir-cm174-clamp-meter.png",
        datasheet: "#"
    },
    {
        id: "flir-cm85-wireless-power-clamp",
        productName: "Flir CM85 Wireless True RMS Power Clamp",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "Wireless true RMS power clamp meter.",
        fullDescription: "FLIR CM85 wireless true RMS power clamp meter for measuring AC/DC current and power with wireless data transmission to mobile devices.",
        image: "../images/products/flir-cm85-wireless-power-clamp.png",
        datasheet: "#"
    },
    {
        id: "flir-cm83-wireless-power-clamp",
        productName: "Flir CM83 Wireless True RMS Power Clamp",
        manufacturerName: "FLIR",
        category: "Safety, Testing & Measurement",
        subCategory: "Test & Measurement System",
        shortDescription: "Compact wireless power clamp meter.",
        fullDescription: "FLIR CM83 wireless true RMS power clamp meter with compact design for confined spaces. Features wireless connectivity and comprehensive measurement capabilities.",
        image: "../images/products/flir-cm83-wireless-power-clamp.png",
        datasheet: "#"
    },

    // DATA LOGGERS - Hioki Products
    {
        id: "hioki-lr8520-wireless-fungal-logger",
        productName: "Hioki LR8520 Wireless Fungal Logger",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Data Loggers",
        shortDescription: "Wireless temperature and humidity data logger.",
        fullDescription: "Hioki LR8520 wireless fungal logger for monitoring temperature and humidity in environments where mold prevention is critical. Features wireless connectivity and long battery life.",
        image: "../images/products/hioki-lr8520-wireless-fungal-logger.png",
        datasheet: "#"
    },
    {
        id: "hioki-lr8432-heat-flow-logger",
        productName: "Hioki LR8432 Heat Flow Data Logger",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Data Loggers",
        shortDescription: "Heat flow and temperature data logger.",
        fullDescription: "Hioki LR8432 heat flow data logger for measuring and recording heat flow and temperature. Ideal for building energy analysis and HVAC optimization.",
        image: "../images/products/hioki-lr8432-heat-flow-logger.png",
        datasheet: "#"
    },
    {
        id: "hioki-lr8400-portable-logger",
        productName: "Hioki LR8400 Series Portable Data Logger",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Data Loggers",
        shortDescription: "Multi-channel portable data logger.",
        fullDescription: "Hioki LR8400 series portable data logger with multiple input channels for voltage, current, temperature, and other parameters. Features high-speed sampling and large memory capacity.",
        image: "../images/products/hioki-lr8400-portable-logger.png",
        datasheet: "#"
    },
    {
        id: "hioki-pw3360-clamp-power-logger",
        productName: "Hioki PW3360 Clamp On Power Logger",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Data Loggers",
        shortDescription: "Clamp-on power and energy logger.",
        fullDescription: "Hioki PW3360 clamp-on power logger for measuring and recording power consumption over time. Ideal for energy audits and load monitoring.",
        image: "../images/products/hioki-pw3360-clamp-power-logger.png",
        datasheet: "#"
    },

    // HIOKI HICORDER
    {
        id: "hioki-8870-memory-hicorder",
        productName: "Hioki 8870-2 Channel Memory HiCorder",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Hioki HiCorder",
        shortDescription: "High-speed memory recorder.",
        fullDescription: "Hioki 8870-2 channel memory HiCorder for high-speed data acquisition and analysis. Features isolated inputs and advanced triggering capabilities.",
        image: "../images/products/hioki-8870-memory-hicorder.png",
        datasheet: "#"
    },
    {
        id: "hioki-lr8431-memory-hicorder",
        productName: "Hioki LR8431 Memory HiCorder",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Hioki HiCorder",
        shortDescription: "Multi-channel data acquisition recorder.",
        fullDescription: "Hioki LR8431 memory HiCorder with 30-channel simultaneous recording capability. Ideal for complex measurement and analysis applications.",
        image: "../images/products/hioki-lr8431-memory-hicorder.png",
        datasheet: "#"
    },
    {
        id: "hioki-8206-micro-hicorder",
        productName: "Hioki 8206-10 Micro HiCorder",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Hioki HiCorder",
        shortDescription: "Compact portable HiCorder.",
        fullDescription: "Hioki 8206-10 Micro HiCorder provides portable high-speed data recording in a compact form factor. Battery-operated for field measurements.",
        image: "../images/products/hioki-8206-micro-hicorder.png",
        datasheet: "#"
    },
    {
        id: "hioki-mr8847a-memory-hicorder",
        productName: "Hioki MR8847A Memory HiCorder",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Hioki HiCorder",
        shortDescription: "High-performance multi-channel recorder.",
        fullDescription: "Hioki MR8847A memory HiCorder with up to 128 channels for comprehensive data acquisition. Features high-speed sampling and advanced analysis functions.",
        image: "../images/products/hioki-mr8847a-memory-hicorder.png",
        datasheet: "#"
    },

    // RECORD INSTRUMENTS
    {
        id: "hioki-mr8880-memory-recorder",
        productName: "Hioki MR8880-20 Memory Recorder",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Record Instruments",
        shortDescription: "High-capacity memory recorder.",
        fullDescription: "Hioki MR8880-20 memory recorder with large storage capacity and multiple input channels for long-term data recording and analysis.",
        image: "../images/products/hioki-mr8880-memory-recorder.png",
        datasheet: "#"
    },
    {
        id: "hioki-pr8111-pen-recorder",
        productName: "Hioki PR8111 Pen Recorders",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Record Instruments",
        shortDescription: "Chart pen recorder for continuous monitoring.",
        fullDescription: "Hioki PR8111 pen recorder provides continuous paper chart recording for monitoring processes and trends over extended periods.",
        image: "../images/products/hioki-pr8111-pen-recorder.png",
        datasheet: "#"
    },
    {
        id: "ss7012-dc-signal-source",
        productName: "SS7012 DC Signal Source",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Record Instruments",
        shortDescription: "Precision DC signal generator.",
        fullDescription: "SS7012 DC signal source for calibration and testing of measuring instruments. Provides stable and accurate DC voltage and current outputs.",
        image: "../images/products/ss7012-dc-signal-source.png",
        datasheet: "#"
    },
    {
        id: "hioki-pw3198-power-analyzer-kit",
        productName: "Hioki PW3198 Kit Power Quality Analyzer",
        manufacturerName: "Hioki",
        category: "Safety, Testing & Measurement",
        subCategory: "Record Instruments",
        shortDescription: "Complete power quality analysis kit.",
        fullDescription: "Hioki PW3198 kit power quality analyzer with comprehensive accessories for measuring harmonics, flicker, and power quality parameters.",
        image: "../images/products/hioki-pw3198-power-analyzer-kit.png",
        datasheet: "#"
    },

    // CABLE GLAND & ACCESSORIES
    {
        id: "sensor-power-connector-m08-m40",
        productName: "M08-M40 Sensor & Power Connector",
        manufacturerName: "Phoenix Contact / Murr",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Cable Gland & Protection",
        shortDescription: "Industrial sensor and power connectors.",
        fullDescription: "M08 to M40 sensor and power connectors for reliable electrical connections in automation systems. IP67 rated for industrial environments.",
        image: "../images/products/sensor-power-connector-m08-m40.png",
        datasheet: "#"
    },
    {
        id: "polyamide-cable-gland",
        productName: "Polyamide Cable Gland & Accessories",
        manufacturerName: "Jacob / Lapp",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Cable Gland & Protection",
        shortDescription: "Nylon cable glands with accessories.",
        fullDescription: "Polyamide (nylon) cable glands with locknut and sealing accessories. Lightweight and corrosion-resistant for general industrial applications.",
        image: "../images/products/polyamide-cable-gland.png",
        datasheet: "#"
    },
    {
        id: "cable-gland-reducer-adaptor",
        productName: "Cable Gland Reducer Adaptor",
        manufacturerName: "Hawke / CMP",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Cable Gland & Protection",
        shortDescription: "Size reduction adaptors for cable glands.",
        fullDescription: "Cable gland reducer adaptors for accommodating smaller cables in larger gland entries. Ensures proper sealing and strain relief.",
        image: "../images/products/cable-gland-reducer-adaptor.png",
        datasheet: "#"
    },
    {
        id: "flexible-electrical-conduit",
        productName: "Flexible Electrical Conduit & Fittings",
        manufacturerName: "Atkore / Legrand",
        category: "Enclosures, Wiring & Panel Accessories",
        subCategory: "Cable Gland & Protection",
        shortDescription: "Flexible conduit for cable protection.",
        fullDescription: "Flexible electrical conduit systems with fittings for protecting and routing electrical cables in industrial installations. Available in metallic and non-metallic variants.",
        image: "../images/products/flexible-electrical-conduit.png",
        datasheet: "#"
    },

    // HUMAN SAFETY PRODUCTS - COVID-19
    {
        id: "airpure-n95-mask-5layer",
        productName: "AIRPURE N95 Mask 5 Layer Protection",
        manufacturerName: "AIRPURE",
        category: "Safety & PPE",
        subCategory: "Human Safety Product",
        shortDescription: "N95 respirator mask with 5-layer protection.",
        fullDescription: "AIRPURE N95 mask with 5-layer protection against airborne particles, viruses, and bacteria. Provides 95% filtration efficiency for respiratory protection.",
        image: "../images/products/airpure-n95-mask-5layer.png",
        datasheet: "#"
    },
    {
        id: "disposable-face-mask-3ply",
        productName: "Use & Throw Face Mask 3 Ply Nose Mask with Stretching EAR",
        manufacturerName: "Generic",
        category: "Safety & PPE",
        subCategory: "Human Safety Product",
        shortDescription: "Disposable 3-ply surgical face mask.",
        fullDescription: "Disposable 3-ply face masks with elastic ear loops for comfort. Suitable for general protection against dust and droplets.",
        image: "../images/products/disposable-face-mask-3ply.png",
        datasheet: "#"
    },
    {
        id: "premium-n95-mask-3layer",
        productName: "PREMIUM 3 Layer N95 Mask",
        manufacturerName: "Generic",
        category: "Safety & PPE",
        subCategory: "Human Safety Product",
        shortDescription: "Premium 3-layer N95 respirator mask.",
        fullDescription: "Premium 3-layer N95 mask providing high-level respiratory protection with comfortable fit and adjustable nose clip.",
        image: "../images/products/premium-n95-mask-3layer.png",
        datasheet: "#"
    },
    {
        id: "alcohol-hand-sanitizer-spray",
        productName: "Alcohol Based Hand Sanitizer Spray",
        manufacturerName: "Generic",
        category: "Safety & PPE",
        subCategory: "Hand Sanitizers",
        shortDescription: "Alcohol-based hand sanitizer spray.",
        fullDescription: "Alcohol-based hand sanitizer spray with 70% alcohol content for effective disinfection. Portable spray bottle for easy application.",
        image: "../images/products/alcohol-hand-sanitizer-spray.png",
        datasheet: "#"
    },
    {
        id: "alcohol-liquid-sanitizer",
        productName: "Alcohol Based Liquid Sanitizer",
        manufacturerName: "Generic",
        category: "Safety & PPE",
        subCategory: "Hand Sanitizers",
        shortDescription: "Liquid hand sanitizer with alcohol.",
        fullDescription: "Alcohol-based liquid hand sanitizer for effective hand hygiene. Contains moisturizers to prevent skin dryness with regular use.",
        image: "../images/products/alcohol-liquid-sanitizer.png",
        datasheet: "#"
    },
    {
        id: "manual-hand-free-sanitizer-stand",
        productName: "Manual Hand Free Sanitizer Stand",
        manufacturerName: "Custom",
        category: "Safety & PPE",
        subCategory: "Sanitizer Dispensers",
        shortDescription: "Foot-operated sanitizer dispenser stand.",
        fullDescription: "Manual hands-free sanitizer stand with foot pedal operation for touchless dispensing. Suitable for entrances and public areas.",
        image: "../images/products/manual-hand-free-sanitizer-stand.png",
        datasheet: "#"
    },
    {
        id: "automatic-sanitizer-machine",
        productName: "Automatic Hand Free Sanitizer Machine",
        manufacturerName: "Custom",
        category: "Safety & PPE",
        subCategory: "Sanitizer Dispensers",
        shortDescription: "Automatic touchless sanitizer dispenser.",
        fullDescription: "Automatic hands-free sanitizer dispenser with infrared sensor for touchless operation. Battery-operated with adjustable dispensing volume.",
        image: "../images/products/automatic-sanitizer-machine.png",
        datasheet: "#"
    },

    // ADDITIONAL MISSING PRODUCTS
    {
        id: "light-sensitive-switch",
        productName: "Light Sensitive Switch",
        manufacturerName: "Theben / Schneider",
        category: "Electrical Switching & Protection",
        subCategory: "Time Switches / Light Sensitive Switches",
        shortDescription: "Photocell-based automatic lighting control.",
        fullDescription: "Light-sensitive switches automatically control outdoor lighting based on ambient light levels. Saves energy by turning lights on at dusk and off at dawn.",
        image: "../images/products/light-sensitive-switch.png",
        datasheet: "#"
    },
    {
        id: "rccb-residual-current-breaker",
        productName: "Residual Current Circuit Breaker (RCCB)",
        manufacturerName: "Siemens / ABB",
        category: "Electrical Switching & Protection",
        subCategory: "Residual Current Circuit Breakers",
        shortDescription: "Earth leakage protection device.",
        fullDescription: "Residual Current Circuit Breakers provide protection against electric shock and earth leakage faults. Essential for electrical safety in residential and commercial installations.",
        image: "../images/products/rccb-residual-current-breaker.png",
        datasheet: "#"
    }

];

// Export for Node.js environment if needed, otherwise it's a global variable in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}
