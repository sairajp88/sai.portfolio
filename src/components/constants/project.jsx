const project = [
  {
    name: "Community Problem Reporter",
    logo: "https://i.ibb.co/r41nZkd/image.png", // replace with your actual logo later
    briefDesc: "A map-driven civic issue reporting platform with real-time collaboration.",
    desc: [
      "Community Problem Reporter is a location-aware civic platform that enables residents to report local issues directly on an interactive map.",
      "Built with MERN Stack + OpenLayers, the system renders zone boundaries as polygons and performs spatial mapping to automatically assign issues to the correct zone.",
      "Implements a role-based architecture (Resident, Zone Manager, Admin) with JWT-based authentication and strict server-side authorization.",
      "Supports real-time issue discussions using Socket.IO, emergency issue highlighting, and an admin dashboard for monitoring and resolution tracking."
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "OpenLayers",
      "Socket.IO",
      "JWT",
      "REST API"
    ],
    githubLink: "https://github.com/sairajp88/community-problem-reporter",
    liveLink: "https://your-live-link.com",
    previewImages: [
      "https://via.placeholder.com/800x500.png?text=Map+View",
      "https://via.placeholder.com/800x500.png?text=Issue+Reporting",
      "https://via.placeholder.com/800x500.png?text=Admin+Dashboard",
      "https://via.placeholder.com/800x500.png?text=Emergency+Highlight"
    ]
  },
  {
    name: "PropChains",
    logo: "https://i.ibb.co/r41nZkd/image.png", // replace later
    briefDesc: "A clean, mobile-first real estate platform focused on product UX.",
    desc: [
      "PropChains is a production-ready MERN real estate platform where buyers can compare properties and sellers manage listings efficiently.",
      "Implements property comparison (2–3 listings), a seller dashboard for listing management, and JWT-based authentication.",
      "Designed with a mobile-first, Apple-inspired UI and includes light/dark mode for improved user experience.",
      "Focused purely on core product functionality — no AI, no analytics — just clean architecture and practical UX execution."
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "REST API",
      "Vercel",
      "Render"
    ],
    githubLink: "https://github.com/sairajp88/realestate-platform",
    liveLink: " https://propchains.vercel.app",
    previewImages: [
      "https://via.placeholder.com/800x500.png?text=Home+Page",
      "https://via.placeholder.com/800x500.png?text=Property+Comparison",
      "https://via.placeholder.com/800x500.png?text=Seller+Dashboard",
      "https://via.placeholder.com/800x500.png?text=Dark+Mode+UI"
    ]
  }
];

export { project };
