export const siteConfig = {
  name: "Saurabh Chidrawar",
  title: "Java Backend Engineer",
  tagline:
    "Designing scalable microservices, event-driven systems, and cloud-native applications on AWS.",
  availability: "Available for new opportunities",
  location: "Hyderabad, Telangana",
  email: "saurabhchidrawar2@gmail.com",
  phone: "+91-9579646281",
  phoneHref: "tel:+919579646281",
  resumeUrl: "/resume.pdf",
  brand: "SC",
  github: "https://github.com/saurabhchidrawar2",
  linkedin: "https://www.linkedin.com/in/sourabh-b95701208",
  summary:
    "Results-driven Java Backend Engineer with 3+ years of experience designing and developing scalable microservices, cloud-native applications, and distributed systems using Java, Spring Boot, K[...]",
  about: [
    "I'm a Java Backend Engineer with 3+ years of experience building enterprise-grade financial and analytics applications. I specialize in scalable microservices, Apache Kafka event streaming, a[...]",
    "At S&P Global, I design cloud-native services on AWS EKS, lead Spark ETL migrations to AWS EMR, and strengthen security and observability across distributed systems. I also build automation f[...]",
    "I collaborate closely with cross-functional Agile teams to deliver resilient, business-critical software—with a strong focus on CI/CD, secure coding, and production reliability.",
  ],
  education: {
    degree: "Bachelor of Engineering (B.E.)",
    school: "Sinhgad College of Engineering, Pune",
    period: "2018 – 2022",
  },
}

export const aboutHighlights = [
  {
    title: "Event-Driven Systems",
    description:
      "Kafka, Debezium CDC, retry topics, and DLQs for reliable distributed processing",
  },
  {
    title: "Cloud Native",
    description:
      "AWS EKS, EMR, Step Functions, EventBridge, and Secrets Manager at scale",
  },
  {
    title: "Microservices",
    description:
      "Spring Boot REST APIs and distributed services for financial analytics",
  },
  {
    title: "Quality & Automation",
    description:
      "CI/CD, BDD test automation, and observability with Splunk and Prometheus",
  },
]

export const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 82 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: 92 },
      { name: "Spring MVC", level: 88 },
      { name: "Hibernate", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 90 },
    ],
  },
  {
    title: "Event Streaming",
    skills: [
      { name: "Apache Kafka", level: 90 },
      { name: "Kafka Connect", level: 85 },
      { name: "Debezium CDC", level: 88 },
      { name: "DLQ & Retry Topics", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EKS, EMR, S3)", level: 88 },
      { name: "Docker & Kubernetes", level: 85 },
      { name: "Jenkins / GitLab CI", level: 88 },
      { name: "Azure DevOps", level: 75 },
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      { name: "MS SQL Server", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 85 },
      { name: "Apache Spark", level: 82 },
      { name: "Elasticsearch", level: 78 },
    ],
  },
]

export const experiences = [
  {
    company: "S&P Global",
    role: "Associate Engineer, IT",
    period: "Aug 2024 – Present",
    location: "Hyderabad, Telangana",
    description:
      "Building cloud-native microservices and event-driven data pipelines for enterprise financial analytics on AWS.",
    achievements: [
      "Designed scalable microservices with Java, Spring Boot, and Kafka on AWS EKS for distributed financial systems",
      "Architected Kafka Debezium CDC pipelines for real-time MS SQL synchronization across analytical systems",
      "Led migration of six large-scale Spark ETL workloads to AWS EMR with Step Functions and EventBridge",
      "Remediated 100+ security vulnerabilities using ArmorCode across enterprise applications",
      "Migrated secrets for 20+ Spring Boot microservices to AWS Secrets Manager with IAM-based access control",
      "Built Python/Selenium BDD automation framework, reducing manual testing effort by ~75%",
      "Integrated automated tests into Jenkins CI/CD for continuous validation of microservices",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Debezium",
      "AWS EKS",
      "EMR",
      "Spark",
      "Python",
    ],
  },
  {
    company: "NeoSOFT Technologies",
    role: "Software Engineer",
    period: "Feb 2023 – Jun 2024",
    location: "Pune, Maharashtra",
    description:
      "Developed backend microservices and event-driven workflows for insurance and digital banking platforms.",
    achievements: [
      "Built Spring Boot microservices for policy management, transactions, and insurance operations",
      "Implemented Kafka messaging with retry mechanisms, DLQs, and backoff for reliable banking transactions",
      "Enhanced React enterprise apps with Redux optimization and dependency upgrades",
      "Improved observability with Splunk, ELK Stack, and Prometheus monitoring and alerting",
      "Led microservices repository migration to GitHub preserving history and CI/CD integrations",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "React",
      "Redis",
      "PostgreSQL",
      "Splunk",
    ],
  },
]

export const projects = [
  {
    title: "MaxLimit Platform",
    description:
      "Scalable event-driven backend services using Java, Spring Boot, Kafka, and Debezium CDC for real-time financial data synchronization across cloud-native AWS infrastructure.",
    architecture:
      "Microservices on AWS EKS with CDC-driven pipelines and asynchronous messaging for distributed financial datasets.",
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Debezium",
      "AWS EKS",
      "MS SQL",
    ],
    github: siteConfig.github,
    featured: true,
  },
  {
    title: "AWS EMR Migration",
    description:
      "Migrated on-premise Spark ETL pipelines to AWS EMR orchestrated with Step Functions and EventBridge, improving scalability and operational efficiency for analytics workloads.",
    architecture:
      "Six large-scale ETL workloads moved to cloud with scheduled batch processing and EventBridge-driven orchestration.",
    technologies: [
      "Apache Spark",
      "AWS EMR",
      "Step Functions",
      "EventBridge",
      "S3",
      "Python",
    ],
    github: siteConfig.github,
    featured: true,
  },
  {
    title: "Banking Insurance Platform",
    description:
      "Microservices and Kafka-driven workflows for policy management and banking transactions within a distributed digital banking ecosystem.",
    architecture:
      "RESTful APIs with event-driven Kafka integration, retry/DLQ patterns, and centralized logging for production support.",
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "React",
      "PostgreSQL",
      "Swagger",
    ],
    github: siteConfig.github,
    featured: false,
  },
]

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Pursuing",
    skills: ["EC2", "S3", "Lambda", "EKS", "EMR"],
  },
  {
    title: "Confluent Kafka Fundamentals",
    issuer: "Confluent",
    date: "Pursuing",
    skills: ["Kafka", "Connect", "Streams", "CDC"],
  },
]

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]
