export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    action: string;
    colSpan: string;
}

export const projects: Project[] = [
    {
        id: "PROJ_01",
        title: "MOSAIC",
        description: "Quick-Commerce Logistics Engine (Blinkit-like)",
        longDescription: "Built the backend for a quick-commerce platform similar to Blinkit using Node.js and MongoDB. Implemented Redis caching to improve performance and integrated Stripe for secure payment processing. Designed scalable REST APIs for products, cart, and order management, ensuring high availability and low latency during peak traffic.",
        tech: ["Node.js", "MongoDB", "Redis", "Stripe"],
        action: "VIEW_SOURCE_CODE",
        colSpan: "md:col-span-8",
    },
    {
        id: "PROJ_02",
        title: "CALLNDR",
        description: "Talent Recruitment with Face Verification",
        longDescription: "Developed a mobile application for talent recruitment in the film industry using React.js, Node.js, and MongoDB. The platform enables agencies to connect with skilled professionals, streamlining the hiring process. Implemented full-text search for talent discovery, real-time chat, and integrated AWS Rekognition for identity verification and profile authenticity.",
        tech: ["React", "Node.js", "MongoDB", "AWS Rekognition"],
        action: "LAUNCH_APP",
        colSpan: "md:col-span-4",
    },
    {
        id: "PROJ_03",
        title: "B2B CAMERA HUB",
        description: "Portfolio & Resource Hub for Camera Professionals",
        longDescription: "Developed a web application designed to connect professionals in the camera industry. Features include portfolio creation with high-resolution image support, product registration for warranty tracking, and an interactive event registration system for industry workshops and meetups.",
        tech: ["Next.js", "Portfolio Builder", "Event Management"],
        action: "EXPLORE_HUB",
        colSpan: "md:col-span-6",
    },
    {
        id: "PROJ_04",
        title: "DENTCARE",
        description: "Dental Industry Professional Connector",
        longDescription: "A specialized networking platform designed to facilitate collaboration between dentists, clinics, and equipment suppliers. Focused on streamlining resource sharing and professional knowledge exchange within the dental healthcare ecosystem.",
        tech: ["React", "Community Platform", "Professional Networking"],
        action: "VIEW_PROJECT",
        colSpan: "md:col-span-6",
    },
    {
        id: "PROJ_05",
        title: "TASK & REWARD",
        description: "Employee Performance & Reward System",
        longDescription: "Internal organization platform designed to encourage skill contribution across departments. Features include automated performance evaluation based on task completion metrics, peer-rating systems, and a reward distribution engine using MySQL for data integrity.",
        tech: ["NestJS", "React", "MySQL"],
        action: "VIEW_SYSTEM",
        colSpan: "md:col-span-4",
    },
    {
        id: "PROJ_06",
        title: "TASK MGMT OS",
        description: "Robust Enterprise Task Management System",
        longDescription: "A comprehensive internal tool for tracking project progress across large teams. Built with NestJS and Vue.js, featuring real-time updates, multi-level authentication, and extensive unit testing coverage using Jest to ensure enterprise-grade reliability.",
        tech: ["NestJS", "Vue.js", "MySQL", "Jest"],
        action: "VIEW_SPECS",
        colSpan: "md:col-span-4",
    },
    {
        id: "PROJ_07",
        title: "JOB PORTAL",
        description: "Comprehensive Full-Stack Job Board",
        longDescription: "A full-scale job recruitment platform built with Spring Boot and Angular. Features include sophisticated filtering for job listings, automated application workflows, user profile management with resume parsing support, and a responsive dashboard for recruiters.",
        tech: ["Spring Boot", "Angular", "MySQL"],
        action: "LAUNCH_PORTAL",
        colSpan: "md:col-span-4",
    },
    {
        id: "PROJ_08",
        title: "AWS CLOUD DEPLOYMENTS",
        description: "Architecting & Deploying Scalable Infrastructure",
        longDescription: "Managed and deployed several freelance and internal projects using a suite of AWS services. Utilized Amplify for seamless frontend hosting, EC2 for high-performance backend APIs, and RDS for managed relational database instances, ensuring 99.9% uptime and auto-scaling capabilities.",
        tech: ["AWS Amplify", "EC2", "RDS", "S3"],
        action: "VIEW_ARCH_DIAGRAMS",
        colSpan: "md:col-span-12",
    },
];
