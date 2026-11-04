// ============================================================
// portfolioData.js — venkata Divya Portfolio Data
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "venkata Divya",
  firstName: "venkata Divya",
  brandName: "venkata Divya", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bangalore, India",
  phone: "7695036067",
  emails: {
    primary: "divyavenkata456@gmail.com",
    secondary: "",
  },
  summary: "CS-AI student who builds projects using Java and React, eager to contribute to real-world software solutions.",
  resumeUrl: "/venkata divya_resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/venkata-divya4",
  linkedin: "https://www.linkedin.com/in/venkata-divya-291526281/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm venkata Divya",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "CS-AI student building high-performance web applications and machine learning models with Java, React, and MySQL.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:divyavenkata456@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/venkata divya_resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">venkata Divya</span>, a Motivated Full Stack Java Developer with a strong foundation in Java, OOPs, Collections, HTML, CSS, and MySQL, currently sharpening my skills through the placement training program at TAP Academy. Hands-on experience in developing projects and working with emerging technologies. A quick learner and problem-solver, eager to contribute to real-world projects and grow as a software developer.`,
  techStack: ["Java", "React", "MySQL", "Python", "HTML", "CSS", "OOPs"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured engineering approach connecting requirement analysis to reliable deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing project requirements, system constraints, and data flows to design clean architecture.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting structured relational database schemas, modular components, and responsive interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing clean, maintainable Java and React code adhering to OOP principles and solid design patterns.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Thoroughly testing endpoints, optimizing performance, and preparing production-ready deployments.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML & CSS" }, { name: "React.js" }, { name: "Tailwind CSS" }],
    },
    {
      title: "Databases & Storage",
      skills: [{ name: "MySQL" }, { name: "IPFS" }],
    },
    {
      title: "Core & Tools",
      skills: [{ name: "OOPs" }, { name: "Collection Framework" }, { name: "Git & GitHub" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Smart Parking System Research",
    description: "Conducted research on automated Smart Parking Systems, analyzing sensor integration and urban traffic optimization.",
    role: "Researcher",
    badge: "Publication",
  },
  {
    title: "Sustainable Smart Cities Competition",
    description: "Secured 2nd place in an inter-college competition presenting sustainable technology solutions for urban development.",
    role: "Competitor",
    badge: "2nd Place",
  },
  {
    title: "IoT & Power BI Workshops",
    description: "Participated in hands-on workshops covering IoT device connectivity and Power BI data analytics at SVCE.",
    role: "Participant",
    badge: "Workshop",
  },
];

export const internshipsList = [
  {
    organization: "SUPRMENTR Technologies Pvt. Ltd.",
    role: "Artificial Intelligence with Cloud Computing",
    duration: "Feb 2026 – May 2026",
    skills: [
      "Data Analysis & ML",
      "Computer Vision & NLP",
      "Cloud Anomaly Detection",
      "LLMs & Prompt Engineering",
    ],
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "OpenCV"],
  },
  {
    organization: "Government of Karnataka – BDA Complex Housing Board",
    role: "Data Digitization Specialist",
    duration: "Jun 2026 – Aug 2026",
    skills: [
      "Digitized 10,000+ government records",
      "OCR-based data extraction",
      "Duplicate & inconsistent data correction",
      "Document classification & metadata",
    ],
    tech: ["OCR Tools", "Database Management", "Scanning Hardware"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Coordinates effectively within cross-functional teams, actively contributing to shared goals and technical discussions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Breaks down complex problem statements logically to build efficient, scalable algorithmic solutions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulates technical concepts, project architectures, and progress clearly to both team members and stakeholders.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Balances project sprints, research goals, and certifications systematically to deliver high quality on schedule.",
  },
];

export const projects = [
  {
    id: "blockchain-certificates",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Blockchain-Powered Certificate Issuance and Verification System",
    description: "Developed certificate issuance and verification portals using React.js. Integrated Ethereum smart contracts, IPFS storage, SHA-256 hashing, and QR codes for fraud-proof digital credential verification.",
    techTags: ["React.js", "Ethereum", "Solidity", "IPFS", "Web3.js", "Ethers.js", "Node.js"],
    links: { github: "https://github.com/venkata-divya4", demo: "" },
    isFlagship: true,
  },
  {
    id: "house-price-prediction",
    number: "02",
    badge: null,
    title: "House Price Prediction Using Machine Learning",
    description: "Developed a machine learning model to predict house prices based on property features using Linear Regression with feature engineering and performance evaluation on R² Score, MAE, and MSE.",
    techTags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Linear Regression"],
    links: { github: "https://github.com/venkata-divya4", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Deep Learning", issuer: "NPTEL", icon: "🏅" },
    { name: "Affective Computing", issuer: "NPTEL", icon: "🏅" },
    { name: "Conservation Geography", issuer: "NPTEL", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/venkata-divya-291526281/",
};

export const education = {
  degree: "B.E CSE (Artificial Intelligence)",
  institution: "Sri Venkateshwara College of Engineering",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · React · MySQL · AI",
    "Turning ideas into reliable, real-world software",
  ],
  credential: "B.E CSE (Artificial Intelligence)",
  copyright: `© ${new Date().getFullYear()} venkata Divya | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
