export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  organization: string;
  type: string;
  duration?: string;
  description: string;
  skillsGained: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration?: string;
  score: string;
  scoreLabel: string;
  details?: string;
}

export interface TrainingItem {
  course: string;
  institution: string;
  status: string;
  modules: string[];
  description: string;
}

export const personalInfo = {
  name: "Bhavya Chandaka",
  roleTitle: "Java Developer | Software Engineer",
  headline: "Aspiring Software Engineer & Java Backend Developer",
  tagline: "Computer Science graduate and aspiring Java Developer with a strong foundation in Core Java, Spring Boot, Servlets, JDBC, SQL, MySQL, and modern web development. Currently pursuing Java Full Stack Development training at JSPIDERS.",
  location: "Hyderabad, India",
  phone: "+91 9182290967",
  rawPhone: "9182290967",
  email: "chandakabhavyasri@gmail.com",
  githubUrl: "https://github.com/chandakabhavyasri-ctrl",
  linkedinUrl: "https://www.linkedin.com/in/bhavya-chandaka-335865287/?isSelfProfile=false",
  profileImage: "/bhavya-chandaka.jpg",
  availability: "Available for Full-time Roles",
};

export const aboutData = {
  summary: [
    "I am a Computer Science Engineering graduate with a strong passion for backend architecture, object-oriented programming, and reliable database systems. My technical foundation spans Core Java, Spring Boot, Servlets, JDBC, SQL, and MySQL, alongside responsive web frontend development.",
    "Currently, I am expanding my practical engineering skills through professional Java Full Stack Development training at JSPIDERS, focusing on building end-to-end web applications, writing clean modular code, and mastering relational schema design.",
    "I am actively seeking an entry-level Java Developer or Software Engineer role where I can contribute to meaningful engineering projects, solve real-world problems, and continuously grow alongside experienced engineering teams."
  ],
  highlights: [
    { label: "Target Role", value: "Java Developer / Software Engineer" },
    { label: "Degree", value: "B.Tech in CSE (8.1 CGPA)" },
    { label: "Current Training", value: "Java Full Stack @ JSPIDERS" },
    { label: "Core Focus", value: "Java, Spring Boot, Servlets, JDBC, SQL" },
    { label: "Location", value: "Hyderabad, India" },
    { label: "Status", value: "Open for Opportunities" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "SQL"]
  },
  {
    title: "Backend Engineering",
    skills: ["Core Java", "Spring Boot", "Servlets", "JDBC"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Databases & Storage",
    skills: ["MySQL", "SQL"]
  },
  {
    title: "Core Computer Science",
    skills: ["OOPs Concepts", "DBMS", "Basic Data Structures"]
  },
  {
    title: "Tools & Environments",
    skills: ["Eclipse IDE", "VS Code", "Git"]
  }
];

export const softSkills: string[] = [
  "Team Leadership",
  "Technical Communication",
  "Problem Solving",
  "Team Collaboration"
];

export const projectsData: Project[] = [
  {
    id: "student-management-system",
    title: "Student Management System",
    category: "Full-Stack Java Web Application",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    description: "Developed a comprehensive web-based student management application using Java and Spring Boot for backend development, streamlining administrative workflows.",
    features: [
      "Implemented full CRUD operations: Add student, View records, Update student details, and Delete profiles",
      "Integrated MySQL database for secure relational data persistence and structured querying",
      "Applied Core Java OOP principles (Encapsulation, Inheritance, Polymorphism) for modular architecture",
      "Designed a clean, responsive user interface using HTML and CSS for administrative operations"
    ],
    githubUrl: "https://github.com/chandakabhavyasri-ctrl",
    featured: true
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    category: "Enterprise Java Application",
    technologies: ["Java", "Servlets", "JDBC", "MySQL", "HTML", "CSS"],
    description: "An enterprise employee management application engineered to handle employee records, department allocations, and relational database operations.",
    features: [
      "Structured employee record management with end-to-end CRUD capabilities",
      "Direct JDBC database connectivity for reliable transaction execution and query dispatch",
      "Java Servlets managing HTTP requests, response routing, and business logic execution",
      "Normalized MySQL relational database schema for employee data integrity",
      "Clean HTML5/CSS3 frontend templates for smooth data input and review"
    ],
    githubUrl: "https://github.com/chandakabhavyasri-ctrl",
    featured: false
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    category: "Enterprise Java Application",
    technologies: ["Java", "Servlets", "JDBC", "MySQL", "HTML", "CSS"],
    description: "A centralized library administration system designed to track book inventory, member registrations, and circulation workflows.",
    features: [
      "Complete book catalogue and registered member management system",
      "Automated issue and return tracking with real-time book availability status",
      "Search functionality to quickly find books by title, author, or category",
      "Servlet and JDBC backend handling business operations and data persistence",
      "Relational MySQL database ensuring consistent circulation transaction history"
    ],
    githubUrl: "https://github.com/chandakabhavyasri-ctrl",
    featured: false
  },
  {
    id: "disaster-prediction-ml",
    title: "Hybrid Machine Learning Framework for Disaster Prediction & Management",
    category: "Machine Learning & Research Project",
    technologies: ["Python", "Neural Networks", "XGBoost"],
    description: "A predictive machine learning framework designed to analyze multi-source environmental data to forecast and manage natural disaster occurrences.",
    features: [
      "Predictive modeling for flood, earthquake, and cyclone forecasting",
      "Implemented Hybrid Neural Networks and XGBoost algorithms for classification accuracy",
      "Served as Team Leader, coordinating milestones, task delegation, and code integration",
      "Authored comprehensive technical documentation and conducted project presentations"
    ],
    githubUrl: "https://github.com/chandakabhavyasri-ctrl",
    featured: false
  }
];

export const experienceData: Experience[] = [
  {
    role: "Data Science Intern",
    organization: "EduSkills Foundation",
    type: "Internship",
    duration: "Completed Internship",
    description: "Completed a Data Science internship, gaining hands-on exposure to data analysis, data preprocessing workflows, and machine learning concepts.",
    skillsGained: ["Data Analysis", "Machine Learning Concepts", "Data Interpretation"]
  },
  {
    role: "Android Development Intern",
    organization: "EduSkills Foundation",
    type: "Internship",
    duration: "Completed Internship",
    description: "Completed an Android Development internship, gaining hands-on exposure to mobile application development, Android UI components, and application lifecycles.",
    skillsGained: ["Mobile App Development", "Android UI", "Java/XML Fundamentals"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Eluru College of Engineering and Technology, JNTUK",
    duration: "2022 – 2026",
    score: "8.1",
    scoreLabel: "CGPA",
    details: "Core coursework in Java, OOPs, Database Management Systems, Data Structures, and Software Engineering."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    score: "82%",
    scoreLabel: "Percentage",
    details: "Comprehensive study in Mathematics, Physics, and Chemistry."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "SK RES High School, Eluru",
    score: "96%",
    scoreLabel: "Percentage",
    details: "Graduated with high academic distinction."
  }
];

export const trainingData: TrainingItem = {
  course: "Java Full Stack Development",
  institution: "JSPIDERS",
  status: "Currently Pursuing",
  modules: ["Core Java", "SQL", "HTML", "CSS"],
  description: "Comprehensive hands-on training focusing on Core Java programming, object-oriented concepts, relational SQL databases, database normalization, and frontend fundamentals."
};
