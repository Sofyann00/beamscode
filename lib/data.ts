import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Full Stack Web Development",
    description: "Complete web application development using Next.js, React, Node.js, and PostgreSQL. Includes responsive UI/UX design and API integration.",
    price: 25000000,
    image: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e",
    category: "Web Development",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Native mobile application development using React Native, Redux, and Firebase. Support for both iOS and Android platforms.",
    price: 30000000,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    category: "Mobile Development",
  },
  {
    id: 3,
    name: "E-commerce Solution",
    description: "Custom e-commerce platform built with Next.js, Stripe integration, MongoDB, and AWS deployment. Includes admin dashboard and inventory management.",
    price: 35000000,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "Web Development",
  },
  {
    id: 4,
    name: "Backend API Development",
    description: "Scalable REST API development using Node.js, Express, PostgreSQL, and Docker. Includes authentication and authorization systems.",
    price: 20000000,
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011",
    category: "Backend Development",
  },
  {
    id: 5,
    name: "UI/UX Design & Development",
    description: "Modern user interface design and development using Figma, React, Tailwind CSS, and Framer Motion. Includes user research and prototyping.",
    price: 15000000,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    category: "Design",
  },
  {
    id: 6,
    name: "DevOps Implementation",
    description: "Complete DevOps setup with CI/CD pipeline using GitHub Actions, Docker, Kubernetes, and AWS/GCP infrastructure.",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    category: "DevOps",
  },
  {
    id: 7,
    name: "WordPress Development",
    description: "Custom WordPress development with PHP, MySQL, and custom theme development. Includes SEO optimization and security implementation.",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
    category: "Web Development",
  },
  {
    id: 8,
    name: "Data Analytics Dashboard",
    description: "Interactive dashboard development using React, D3.js, Python, and PostgreSQL. Includes data visualization and real-time analytics.",
    price: 22000000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Data Analytics",
  },
  {
    id: 9,
    name: "Cloud Migration Service",
    description: "Enterprise application migration to cloud using AWS/Azure, Docker containers, and Terraform. Includes performance optimization.",
    price: 40000000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    category: "Cloud Services",
  },
  {
    id: 10,
    name: "Progressive Web App Development",
    description: "PWA development with React, Service Workers, and IndexedDB. Includes offline functionality and push notifications.",
    price: 18000000,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "Web Development",
  },
  {
    id: 11,
    name: "Microservices Architecture",
    description: "Microservices implementation using Node.js, Docker, Kubernetes, and message queues (RabbitMQ/Kafka). Includes service mesh setup.",
    price: 45000000,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
    category: "Backend Development",
  },
  {
    id: 12,
    name: "AI/ML Integration",
    description: "Machine learning model integration using Python, TensorFlow, and Flask/FastAPI. Includes model training and API development.",
    price: 50000000,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    category: "AI Development",
  },
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
