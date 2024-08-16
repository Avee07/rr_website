import {
    ispat,
    logistics,
    store,
    hr,
    logistics1,
    purchase,
    store1,
    hr1,
    factory,
    cloud,
    web1,
    mobile1,
    backend1,
    devops,
    java,
    mongodb,
    tailwind,
    docker,
    grafana,
    nestjs,
    nodejs,
    javascript,
    typescript,
    reactjs,
    github,
    vscode,
    springboot,
    flutter,
    emptyprofile,
    sales,
    galva,
    tlt,
    solar,
    CloudMonitoring,
    
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "products",
      title: "Products",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web1,
    },
    {
      title: "App Development",
      icon: mobile1,
    },
    {
      title: "Backend Development",
      icon: backend1,
    },
    {
      title: "DevOps",
      icon: devops,
    },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    // {
    //   name: "NestJS",
    //   icon: nestjs,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Srping Boot",
    //   icon: springboot,
    // },
    {
      name: "Java",
      icon: java,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "github",
    //   icon: github,
    // },
    // {
    //   name: "Grafana",
    //   icon: grafana,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HR Software Solutions",
      company_name: "HR",
      icon: hr,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "Internal communications",
        "Employee engagement",
        "Productivity improvement",
        "Employee retention",
      ],
    },
    {
      title: "Logistics Software Solutions",
      company_name: "Logistics",
      icon: logistics,
      iconBg: "#383E56",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Efficient Operations",
        "Enhanced Communication",
        "Boost Productivity",
        "Customer Satisfaction",
      ],
    },
    {
      title: "Sales & Purchase Software Solutions",
      company_name: "Sales & Purchase",
      icon: purchase,
      iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        "Inquiry Management",
        "Order Management",
        "Production Management",
        "Inventory Management",
      ],
    },
    {
      title: "Store Management Software Solutions",
      company_name: "Store",
      icon: store,
      iconBg: "#383E56",
      // date: "Jan 2023 - Present",
      points: [
        "Inventory Management",
        "Order Management",
        "Responsive Design",
        "Integration with ERP Systems",
      ],
    },
    {
      title: "Plant Sector Software Solutions",
      company_name: "Plant",
      icon: factory,
      iconBg: "#383E56",
      // date: "Jan 2023 - Present",
      points: [
        "Centralized Data Management & Accuracy",
        "Enhanced Accessibility",
        "Streamlined Communication",
        "Real-Time Monitoring and Reporting",
      ],
    },
    {
      title: "Cloud & Monitoring Service Solutions",
      company_name: "Cloud & Monitoring",
      icon: cloud,
      iconBg: "#383E56",
      // date: "Jan 2023 - Present",
      points: [
        "Docker Services with Jenkins Integration",
        "Kubernetes Solutions",
        "Monitoring with Prometheus and Grafana Dashboarding",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The Director of RR Ispat oversees strategic planning, operational efficiency, financial management, and team leadership in steel manufacturing.",
      name: "Pranay Agrawal",
      designation: "Director",
      company: "RR Ispat",
      image: emptyprofile,
    },
    {
      testimonial:
        "The Deputy Manager of IT at RR Ispat supports technology strategy, manages IT infrastructure, ensures system reliability, and leads team initiatives.",
      name: "Ajay Mishra",
      designation: "Deputy Manager",
      company: "RR Ispat",
      image: emptyprofile,
    },
    {
      testimonial:
        "The Assistant Manager of IT at RR Ispat assists with system management, technical support, and implementation of IT projects and solutions.",
      name: "Avinash Dewangan",
      designation: "Assistant Manager",
      company: "RR Ispat",
      image: emptyprofile,
    },
  ];
  
  const projects = [
    {
      name: "HR",
      description:
        "We create dynamic HR web and mobile apps that enhance internal communications, employee engagement, and productivity. Our expertise lies in designing intuitive, visually appealing interfaces that streamline recruitment, onboarding, training, performance tracking, and rewards programs, helping businesses attract, retain top talent, and drive growth efficiently.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "NestJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: hr1,
      source_code_link: "https://app.rrispat.in/home/hr_home",
      demo_link: "https://app.rrispat.in/home/hr_home" ,
    },
    {
      name: "Pipe Mill",
      description:
        "Pipe Mill is a company specializing in the design, manufacturing, and distribution of high-quality pipeline components and systems. Catering to the oil, gas, and water industries, Pipe Mill ensures durability and efficiency with its innovative solutions, aiming to enhance infrastructure performance and reliability.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "NestJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: ispat,
      source_code_link: "https://app.rrispat.in/home/pm",
      demo_link: "https://app.rrispat.in/home/pm" ,
    },
    {
      name: "Logistics",
      description:
        "Logistics specializes in efficient and reliable supply chain solutions, offering end-to-end logistics services including warehousing, transportation, and distribution. Their expertise ensures timely delivery and optimized operations, leveraging advanced technology and a dedicated team to meet diverse client needs in various industries.",
        tags: [
          {
            name: "Flutter",
            color: "blue-text-gradient",
          },
          {
            name: "NestJS",
            color: "green-text-gradient",
          },
          {
            name: "MongoDB",
            color: "pink-text-gradient",
          },
        ],
      image: logistics1,
      source_code_link: "https://app.rrispat.in/home/logistics",
      demo_link: "https://app.rrispat.in/home/logistics" ,
    },
    {
      name: "Store",
      description:
        "Store offers a wide range of high-quality steel and metal products, including beams, plates, and rods. Catering to diverse industrial needs, they provide exceptional customer service and expert advice. With a commitment to reliability and excellence, Store is a trusted source for durable, cost-effective materials.",
        tags: [
          {
            name: "Flutter",
            color: "blue-text-gradient",
          },
          {
            name: "NestJS",
            color: "green-text-gradient",
          },
          {
            name: "MongoDB",
            color: "pink-text-gradient",
          },
        ],
      image: store1,
      source_code_link: "https://app.rrispat.in/home/store",
      demo_link: "https://app.rrispat.in/home/store" ,
    },
    {
      name: "Sales",
      description:
        "The Sales app for Ispat streamlines sales operations by providing real-time tracking of orders, inventory management, and customer relationship management. It empowers sales teams with detailed analytics, seamless communication, and automated reporting, ensuring efficient order processing and enhanced customer satisfaction for Ispat's sales operations.",
        tags: [
          {
            name: "Flutter",
            color: "blue-text-gradient",
          },
          {
            name: "NestJS",
            color: "green-text-gradient",
          },
          {
            name: "MongoDB",
            color: "pink-text-gradient",
          },
        ],
      image: sales,
      source_code_link: "https://app.rrispat.in/home/sales",
      demo_link: "https://app.rrispat.in/home/sales" ,
    },
    {
      name: "Galva",
      description:
        "Galva is a mobile app developed by RR Ispat, designed to streamline and manage galvanizing processes. It offers real-time tracking, quality control, and data management for industrial operations, ensuring efficiency and consistency. The app integrates seamlessly with existing systems, providing users with a comprehensive tool for monitoring and optimizing galvanizing tasks.",
        tags: [
          {
            name: "Flutter",
            color: "blue-text-gradient",
          },
          {
            name: "NestJS",
            color: "green-text-gradient",
          },
          {
            name: "MongoDB",
            color: "pink-text-gradient",
          },
        ],
      image: galva,
      source_code_link: "https://app.rrispat.in/home/gihome",
      demo_link: "https://app.rrispat.in/home/gihome" ,
    },
    {
      name: "TLT",
      description:
        "The TLT app for Ispat streamlines the management and monitoring of Transmission Line Towers (TLT) projects. It provides real-time updates, project tracking, and efficient communication between teams, ensuring timely completion and adherence to quality standards. The app enhances operational efficiency in the construction and maintenance of TLTs.",
        tags: [
          {
            name: "Flutter",
            color: "blue-text-gradient",
          },
          {
            name: "NestJS",
            color: "green-text-gradient",
          },
          {
            name: "MongoDB",
            color: "pink-text-gradient",
          },
        ],
      image: tlt,
      source_code_link: "https://app.rrispat.in/home/tlt",
      demo_link: "https://app.rrispat.in/home/tlt" ,
    },
    {
      name: "Solar",
      description:
        "The Solar App by Ispat is a user-friendly platform designed to monitor and manage solar energy systems efficiently. It provides real-time data on energy production, consumption, and savings, helping users optimize their solar power usage. The app enhances sustainability efforts with detailed analytics and easy-to-understand insights.",
        tags: [
          {
            name: "Flutter",
            color: "blue-text-gradient",
          },
          {
            name: "NestJS",
            color: "green-text-gradient",
          },
          {
            name: "MongoDB",
            color: "pink-text-gradient",
          },
        ],
      image: solar,
      source_code_link: "https://app.rrispat.in/home/solar",
      demo_link: "https://app.rrispat.in/home/solar" ,
    },
    {
      name: "Cloud & Monitoring",
      description:
        "We offer Cloud and Monitoring Solutions, including Docker services with Jenkins integration for seamless deployment and automation, Kubernetes for efficient container orchestration, and real-time monitoring with Prometheus. Paired with Grafana dashboards, our solutions provide actionable insights into system performance, enabling informed decision-making and optimized operations.",
        tags: [
          {
            name: "Docker",
            color: "green-text-gradient",
          },
          {
            name: "Grafana",
            color: "blue-text-gradient",
          },
          {
            name: "Prometheus",
            color: "pink-text-gradient",
          },
        ],
      image: CloudMonitoring,
      source_code_link: "https://dashboard.rrispat.in/",
      demo_link: "https://dashboard.rrispat.in/" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };