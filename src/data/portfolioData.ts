export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
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
  headline: "Java Developer & Software Engineer",
  tagline: "Computer Science graduate and aspiring Java Developer with a strong foundation in Core Java, Spring Boot, Servlets, JDBC, SQL, MySQL, and modern web development. Currently pursuing Java Full Stack Development training at JSPIDERS.",
  location: "Hyderabad, India",
  phone: "+91 9182290967",
  rawPhone: "9182290967",
  email: "bhavyachandaka@gmail.com",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  profileImage: "/bhavya-chandaka.jpg",
  availability: "Available for Entry-Level Roles",
};

export const aboutData = {
  summary: [
    "I am a Computer Science Engineering graduate with a strong focus on Java backend development and software engineering fundamentals. I have built practical web applications using Core Java, Spring Boot, Servlets, JDBC, SQL, and MySQL.",
    "Currently, I am undergoing intensive Java Full Stack Development training at JSPIDERS to deepen my mastery of enterprise Java, relational databases, object-oriented design principles, and scalable system architecture.",
    "I am seeking an entry-level Java Developer or Software Engineer opportunity where I can apply my programming skills, write clean and efficient code, and contribute effectively to real-world software engineering projects."
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
    title: "Programming",
    skills: ["Java", "SQL"]
  },
  {
    title: "Backend Development",
    skills: ["Core Java", "Servlets", "JDBC", "Spring Boot"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL"]
  },
  {
    title: "Core Concepts",
    skills: ["OOPs", "DBMS", "Basic Data Structures"]
  },
  {
    title: "Tools & IDEs",
    skills: ["Eclipse IDE", "VS Code"]
  }
];

export const softSkills: string[] = [
  "Team Leadership",
  "Communication",
  "Problem Solving",
  "Team Collaboration"
];

export const projectsData: Project[] = [
  {
    id: "student-management-system",
    title: "Student Management System",
    category: "Full-Stack Java Web Application",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    description: "Developed a web-based student management application using Java and Spring Boot for backend development, streamlining student record administration.",
    features: [
      "Complete CRUD operations: Add student, View student details, Update student records, and Delete student profiles",
      "Robust MySQL database integration ensuring structured data persistence and relational integrity",
      "Implemented Core Java OOP concepts for modular, scalable, and maintainable backend architecture",
      "Responsive web interface using HTML and CSS for administrative usability"
    ],
    featured: true
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    category: "Java Enterprise Application",
    technologies: ["Java", "Servlets", "JDBC", "MySQL", "HTML", "CSS"],
    description: "An enterprise-grade employee record management system engineered with Java Servlets and JDBC for structured corporate staff administration.",
    features: [
      "End-to-end employee record management with full CRUD functionality",
      "Direct JDBC database connectivity for reliable query execution and transactional safety",
      "Servlet-based request routing, session management, and business logic execution",
      "MySQL database schema with indexed queries for employee data retrieval",
      "Clean HTML/CSS user interface for intuitive record management"
    ],
    featured: false
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    category: "Java Enterprise Application",
    technologies: ["Java", "Servlets", "JDBC", "MySQL", "HTML", "CSS"],
    description: "A centralized library administration system designed to track book inventory, user memberships, and circulation lifecycles.",
    features: [
      "Comprehensive management of book inventory and registered member records",
      "Automated issue and return tracking with book availability status updates",
      "Search capability to look up books by title, author, or category",
      "Servlet and JDBC backend architecture communicating with MySQL database",
      "Structured relational schema for error-free circulation records"
    ],
    featured: false
  },
  {
    id: "disaster-prediction-ml",
    title: "Hybrid Machine Learning Framework for Disaster Prediction & Management",
    category: "Machine Learning & Academic Research",
    technologies: ["Python", "Neural Networks", "XGBoost"],
    description: "A predictive machine learning framework designed to analyze multi-source environmental data to forecast and manage natural disaster occurrences.",
    features: [
      "Predictive modeling for flood, earthquake, and cyclone forecasting",
      "Implemented Hybrid Neural Networks and XGBoost algorithms for classification accuracy",
      "Served as Team Leader, coordinating project milestones, member tasks, and code reviews",
      "Authored comprehensive technical documentation and presented project findings"
    ],
    featured: false
  }
];

export const experienceData: Experience[] = [
  {
    role: "Data Science Intern",
    organization: "EduSkills Foundation",
    type: "Internship",
    description: "Completed a Data Science internship, gaining hands-on exposure to data analysis, data preprocessing workflows, and machine learning concepts.",
    skillsGained: ["Data Analysis", "Machine Learning Concepts", "Data Interpretation"]
  },
  {
    role: "Android Development Intern",
    organization: "EduSkills Foundation",
    type: "Internship",
    description: "Completed an Android Development internship, gaining hands-on exposure to mobile application development, Android UI components, and application lifecycle.",
    skillsGained: ["Mobile App Development", "Android UI", "Java/XML Fundamentals"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech (Computer Science & Engineering)",
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
    details: "Graduated with academic distinction."
  }
];

export const trainingData: TrainingItem = {
  course: "Java Full Stack Development",
  institution: "JSPIDERS",
  status: "Currently Pursuing",
  modules: ["Core Java", "SQL", "HTML", "CSS"],
  description: "Comprehensive hands-on training focusing on Core Java programming, object-oriented concepts, relational SQL databases, database normalization, and frontend fundamentals."
};
