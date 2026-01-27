const productSuppliersData = [
    {
        "name": "ABB",
        "image": "images/manufacturers/ABB.png",
        "description": "ABB is a global technology leader in electrification and automation, enabling a more sustainable and resource-efficient future. The company offers solutions for instrumentation, robotics, and process automation across diverse industries.",
        "country": "Switzerland",
        "website": "https://new.abb.com/"
    },
    {
        "name": "Taparia",
        "image": "images/manufacturers/TAPARIA.png",
        "description": "Taparia is a leading manufacturer of industrial automation components, specializing in high-quality sensors, actuators, and control systems for various industrial applications.",
        "country": "India",
        "website": "https://www.taparia.com/"
    },
    {
        "name": "Seimens",
        "image": "images/manufacturers/SEIMENS.png",
        "description": "Siemens is a global technology leader in industrial automation and digitalization, offering comprehensive solutions for manufacturing, infrastructure, and energy sectors.",
        "country": "Germany",
        "website": "https://www.siemens.com/"
    },
    {
        "name": "L&T Electrical & Automation",
        "image": "images/manufacturers/LT_ELECTRICAL_AUTOMATION.png",
        "description": "L&T Electrical & Automation is a leading provider of electrical and automation solutions, offering a wide range of products for industrial and commercial applications.",
        "country": "India",
        "website": "https://www.lntinfotech.com/"
    },
    {
        "name": "Legrand",
        "image": "images/manufacturers/LEGRAND.png",
        "description": "Legrand is a global leader in electrical and automation solutions, offering a wide range of products for residential, commercial, and industrial applications.",
        "country": "France",
        "website": "https://www.legrand.com/"
    },
    {
        "name": "APC",
        "image": "images/manufacturers/APC.png",
        "description": "APC by Schneider Electric provides power protection and management solutions, including UPS systems, surge suppressors, and power conditioning products for home and business networks.",
        "country": "USA",
        "website": "https://www.apc.com/"
    },
    {
        "name": "BOSCH",
        "image": "images/manufacturers/BOSCH.png",
        "description": "Bosch Rexroth offers comprehensive industrial automation solutions including linear motion, assembly technology, and advanced control and drive systems aligning with Industry 4.0 standards.",
        "country": "Germany",
        "website": "https://www.boschrexroth.com/"
    },
    {
        "name": "CONNECTWELL",
        "image": "images/manufacturers/CONNECTWELL.png",
        "description": "Connectwell is a leading manufacturer of terminal blocks, interface modules, and professional electrical connection technology, known for high-quality standard compliance.",
        "country": "India",
        "website": "https://www.connectwell.com/"
    },
    {
        "name": "DANFOSS",
        "image": "images/manufacturers/DANFOSS.png",
        "description": "Danfoss is a global leader in engineering solutions for cooling, heating, and motor control. In automation, they specialize in fluid controls, pressure transmitters, and solenoid valves.",
        "country": "Denmark",
        "website": "https://www.danfoss.com/"
    },
    {
        "name": "ELDON PANEL",
        "image": "images/manufacturers/ELDON_PANEL.png",
        "description": "Eldon (now part of nVent/Hoffman) provides comprehensive enclosure solutions for industrial and building markets, known for user-friendly and flexible electrical cabinets.",
        "country": "Spain",
        "website": "https://www.nvent.com/en/hoffman"
    },
    {
        "name": "FESTO",
        "image": "images/manufacturers/FESTO.png",
        "description": "Festo is a leading global supplier of pneumatic and electrical automation technology, offering actuators, motors, and intelligent automation modules for factory and process automation.",
        "country": "Germany",
        "website": "https://www.festo.com/"
    },
    {
        "name": "FLIR",
        "image": "images/manufacturers/FLIR.png",
        "description": "Teledyne FLIR specializes in the design and manufacture of thermal imaging infrared cameras and sensors, enhancing perception for industrial, security, and scientific applications.",
        "country": "USA",
        "website": "https://www.flir.com/"
    },
    {
        "name": "FLUKE",
        "image": "images/manufacturers/FLUKE.png",
        "description": "Fluke Corporation is the world leader in the manufacture, distribution, and service of electronic test tools and software for industrial maintenance, installation, and quality control.",
        "country": "USA",
        "website": "https://www.fluke.com/"
    },
    {
        "name": "HARTING",
        "image": "images/manufacturers/HARTING.png",
        "description": "Harting specializes in robust industrial connectivity solutions, providing heavy-duty connectors and cabling for data, signal, and power transmission in automation and machinery.",
        "country": "Germany",
        "website": "https://www.harting.com/"

    },
    {
        "name": "HIOKI",
        "image": "images/manufacturers/HIOKI.png",
        "description": "Hioki E.E. Corporation manufactures electrical measuring instruments, including power meters, data loggers, and sensors, supporting maintenance and testing in various industries.",
        "country": "Japan",
        "website": "https://www.hioki.com/"

    },
    {
        "name": "HIWIN",
        "image": "images/manufacturers/HIWIN.png",
        "description": "HIWIN Technologies is a leading manufacturer of motion control components such as linear guideways, ballscrews, and industrial robots used in high-precision machinery.",
        "country": "Taiwan",
        "website": "https://www.hiwin.com/"


    },
    {
        "name": "HUMMEL CONNECTOR",
        "image": "images/manufacturers/HUMMEL_CONNECTOR.png",
        "description": "HUMMEL AG is a renowned manufacturer of connection technology, electrotechnical components, and heating accessories, famous for their high-quality cable glands and circular connectors.",
        "country": "Germany",
        "website": "https://www.hummel.com/"
    },
    {
        "name": "JIGO",
        "image": "images/manufacturers/JIGO.png",
        "description": "JIGO connects industrial markets with high-quality electrical accessories and automation components, often specializing in cable management and panel accessories.",
        "country": "India",
        "website": "https://www.jigo.in/"
    },
    {
        "name": "KOSMOS",
        "image": "images/manufacturers/KOSMOS.png",
        "description": "Kosmos specializes in LED lighting and electrical solutions, providing efficient and durable lighting products for industrial and commercial applications.",
        "country": "India",
        "website": "https://www.kosmoslighting.com/"

    },
    {
        "name": "LAPP",
        "image": "images/manufacturers/LAPP.png",
        "description": "Lapp Group is a leading global supplier of integrated solutions for cable and connection technology, offering highly flexible cables, industrial connectors, and automation accessories.",
        "country": "Germany",
        "website": "https://www.lappgroup.com/"
    },
    {
        "name": "MAKITA",
        "image": "images/manufacturers/MAKITA.png",
        "description": "Makita is a global manufacturer of professional-grade power tools, pneumatic tools, and gardening equipment, known for their performance, durability, and cordless innovation.",
        "country": "Japan",
        "website": "https://www.makita.com/"
    },
    {
        "name": "MEANWELL",
        "image": "images/manufacturers/MEANWELL.png",
        "description": "MEAN WELL is a leading standard switching power supply manufacturer, offering a complete range of power supply solutions for industrial, medical, and LED lighting applications.",
        "country": "Taiwan",
        "website": "https://www.meanwell.com/"
    },
    {
        "name": "MECO",
        "image": "images/manufacturers/MECO.png",
        "description": "Meco Instruments manufactures diverse electrical testing and measuring instruments, including multimeters and clamp meters, serving the Indian industrial market for decades.",
        "country": "India",
        "website": "https://www.meco.in/"

    },
    {
        "name": "MULTISPAN",
        "image": "images/manufacturers/MULTISPAN.png",
        "description": "Multispan Control Instruments manufactures industrial automation control panels and instruments, such as temperature controllers, timers, and counters.",
        "country": "India",
        "website": "https://www.multispanindia.com/"
    },
    {
        "name": "MURR",
        "image": "images/manufacturers/MURR.png",
        "description": "Murrelektronik offers decentralized installation technology for industrial automation, focusing on power supplies, interfaces, cables, and IO systems to optimize machine connectivity.",
        "country": "Germany",
        "website": "https://www.murrelektronik.com/"
    },
    {
        "name": "OMRON",
        "image": "images/manufacturers/OMRON.png",
        "description": "Omron is a global leader in automation, providing complete solutions including sensing, control, safety, vision, motion, and robotics to innovate manufacturing worldwide.",
        "country": "Japan",
        "website": "https://www.omron.com/"

    },
    {
        "name": "PANDF",
        "image": "images/manufacturers/PANDF.png",
        "description": "Pepperl+Fuchs (P&F) is a leading developer and manufacturer of industrial sensors and explosion protection equipment, critical for factory and process automation.",
        "country": "Germany",
        "website": "https://www.pepperl-fuchs.com/"

    },
    {
        "name": "PHOENIX CONTACT",
        "image": "images/manufacturers/PHOENIX_CONTACT.png",
        "description": "Phoenix Contact is a global market leader in electrical engineering and automation, producing terminal blocks, relays, connectors, and control systems for various industries.",
        "country": "Germany",
        "website": "https://www.phoenixcontact.com/"
    },
    {
        "name": "PHOENIX MECCANO",
        "image": "images/manufacturers/PHOENIX_MECCANO.png",
        "description": "Phoenix Mecano is a global technology company specializing in enclosures and mechanical components for industrial electronics, offering protection for sensitive equipment.",
        "country": "Switzerland",
        "website": "https://www.phoenix-mecano.com/"
    },
    {
        "name": "POLYCAB CABLE",
        "image": "images/manufacturers/POLYCAB_CABLE.png",
        "description": "Polycab is India's largest manufacturer of wires and cables, also producing fans, lighting, and switchgear. They are a market leader in the electrical industry.",
        "country": "India",
        "website": "https://www.polycab.com/"
    },
    {
        "name": "RITTAL PANEL",
        "image": "images/manufacturers/RITTAL_PANEL.png",
        "description": "Rittal is a leading global supplier of enclosure systems, power distribution, climate control, and IT infrastructure, emphasizing modular and high-quality industrial solutions.",
        "country": "Germany",
        "website": "https://www.rittal.com/"
    },
    {
        "name": "RR",
        "image": "images/manufacturers/RR.png",
        "description": "RR Kabel is a premier wire and cable manufacturer, known for its German engineering and safety standards in building wires and industrial cables.",
        "country": "India",
        "website": "https://www.rrkabel.com/"

    },
    {
        "name": "SCHNEIDER ELECTRIC",
        "image": "images/manufacturers/SCHNEIDER_ELECTRIC.png",
        "description": "Schneider Electric drives digital transformation in energy management and automation, providing integrated solutions for homes, buildings, data centers, and industries.",
        "country": "France",
        "website": "https://www.se.com/"

    },
    {
        "name": "SELEC",
        "image": "images/manufacturers/SELEC.png",
        "description": "Selec Controls manufactures electrical measurements and protection equipment, including meters, relays, and PLCs, known for reliability and precision.",
        "country": "India",
        "website": "https://www.selec.com/"


    },
    {
        "name": "SIBBAS",
        "image": "images/manufacturers/SIBBAS.png",
        "description": "Sibass Electric specializes in industrial electrical components, supplying switches, sockets, and heavy-duty connectors for various industrial applications.",
        "country": "India",
        "website": "https://www.sibbas.com/"
    },
    {
        "name": "SICK",
        "image": "images/manufacturers/SICK.png",
        "description": "SICK is one of the world's leading producers of sensors and sensor solutions for industrial applications, focusing on factory, logistics, and process automation safety.",
        "country": "Germany",
        "website": "https://www.sick.com/"


    },
    {
        "name": "SMC",
        "image": "images/manufacturers/SMC.png",
        "description": "SMC Corporation is the world's largest manufacturer of pneumatic control engineering components, offering a vast array of air cylinders, solenoids, and air preparation equipment.",
        "country": "Japan",
        "website": "https://www.smcworld.com/"


    },
    {
        "name": "STANLEY",
        "image": "images/manufacturers/STANLEY.png",
        "description": "Stanley Black & Decker provides high-quality hand tools, power tools, and fastening solutions for industrial and construction professionals worldwide.",
        "country": "USA",
        "website": "https://www.stanleytools.com/"
    },
    {
        "name": "TAPARIA",
        "image": "images/manufacturers/TAPARIA.png",
        "description": "Taparia Tools is an ISO-certified manufacturer of high-quality hand tools in India, known for their screwdrivers, pliers, and wrenches used in industrial applications.",
        "country": "India",
        "website": "https://www.taparia.com/"
    },
    {
        "name": "TEKNIC",
        "image": "images/manufacturers/TEKNIC.png",
        "description": "Teknic manufactures high-quality industrial servo motion control components and electromechanical devices like push buttons and pilot lights.",
        "country": "USA/India",
        "website": "https://www.teknic.com/"
    },
    {
        "name": "TELTONIKA",
        "image": "images/manufacturers/TELTONIKA.png",
        "description": "Teltonika Networks offers reliable industrial networking devices, including routers, gateways, and switches for IoT and M2M communication solutions.",
        "country": "Lithuania",
        "website": "https://teltonika-networks.com/"
    },
    {
        "name": "TESTO",
        "image": "images/manufacturers/TESTO.png",
        "description": "Testo is a world leader in portable measuring technology, providing instruments for temperature, humidity, pressure, and combustion analysis in industrial settings.",
        "country": "Germany",
        "website": "https://www.testo.com/"
    },
    {
        "name": "TRINITY TOUCH",
        "image": "images/manufacturers/TRINITY_TOUCH.png",
        "description": "Trinity Touch provides critical components for control cabinets such as enclosures, cable glands, and wiring ducts, serving solar, wind, and railway industries.",
        "country": "India",
        "website": "https://www.trinitytouch.com/"
    },
    {
        "name": "VERTIV EMERSON",
        "image": "images/manufacturers/VERTIV_EMERSON.png",
        "description": "Vertiv (formerly Emerson Network Power) designs critical digital infrastructure technologies, including UPS, thermal management, and IT management systems.",
        "country": "USA",
        "website": "https://www.vertiv.com/"
    },
    {
        "name": "WAGO",
        "image": "images/manufacturers/WAGO.png",
        "description": "WAGO is a global leader in electrical connection and automation technology, famous for its screwless spring-clamp connection systems and modular I/O.",
        "country": "Germany",
        "website": "https://www.wago.com/"

    },
    {
        "name": "WERNER ELECTRIC",
        "image": "images/manufacturers/WERNER_ELECTRIC.png",
        "description": "Werner Electric specializes in electrical distribution and control components, offering a range of industrial relays, switches, and pilot devices.",
        "country": "India/USA",
        "website": "https://www.werner-electric.com/"
    }
];
