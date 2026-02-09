export const blogPosts = [
  {
    id: "blog-2025-1",
    title: "Web Security Essentials",
    category: "Security",
    date: "May 20, 2025",
    image: "/assets/images/web-security.jpeg",
    content: `
      <p>Security is not an add-on; it's a fundamental part of software design. In 2025, the threat landscape has evolved, making standard practices more important than ever.</p>
      <h3>Core Principles</h3>
      <p>1. <strong>Input Validation:</strong> Never trust user input. Sanitize and validate everything to prevent SQL injection and XSS.</p>
      <p>2. <strong>HTTPS Everywhere:</strong> Encrypt data in transit. With Let's Encrypt, there's no excuse for HTTP.</p>
      <p>3. <strong>Authentication & Authorization:</strong> Use OAuth2 and JWTs correctly. Follow the principle of least privilege.</p>
    `
  },
  {
    id: "blog-2025-2",
    title: "The Rise of WebAssembly",
    category: "Performance",
    date: "Apr 02, 2025",
    image: "/assets/images/webassembly.jpeg",
    content: `
      <p>WebAssembly (Wasm) allows code written in languages like Rust and C++ to run in the browser at near-native speed. This opens up the web to high-performance applications like video editing and gaming.</p>
      <h3>Why Wasm?</h3>
      <p>It complements, not replaces, JavaScript. heavy computational tasks can be offloaded to Wasm modules while JS handles the UI and DOM interaction.</p>
    `
  },
  {
    id: "blog-2025-3",
    title: "Node.js Performance Tuning",
    category: "Backend",
    date: "Mar 15, 2025",
    image: "/assets/images/blog-api.jpeg",
    content: `
      <p>Node.js is fast by default due to its non-blocking I/O, but poor coding practices can block the event loop and kill performance.</p>
      <h3>Optimization Techniques</h3>
      <p>1. <strong>Profiling:</strong> Use the built-in inspector to find bottlenecks.</p>
      <p>2. <strong>Clustering:</strong> Take advantage of multi-core systems by forking the process.</p>
      <p>3. <strong>Stream API:</strong> Process large files chunk by chunk instead of loading them into memory.</p>
    `
  },
  {
    id: "blog-new-1",
    title: "Scalable Microservices Architecture",
    category: "Backend",
    date: "Feb 12, 2026",
    image: "/assets/images/microservices.gif",
    content: `
      <p>Microservices have revolutionized backend development by allowing teams to build, deploy, and scale services independently. In this deep dive, we explore the patterns that make microservices effective.</p>
      <h3>Key Patterns</h3>
      <p>1. <strong>API Gateway:</strong> A single entry point for all clients, handling routing, authentication, and rate limiting.</p>
      <p>2. <strong>Circuit Breaker:</strong> Preventing cascading failures by detecting and isolating failing services.</p>
      <p>3. <strong>Event-Driven Design:</strong> Decoupling services using message queues like Kafka or RabbitMQ.</p>
      <p>Designing for failure is crucial in distributed systems. We'll verify how to implement these patterns using Node.js and Docker.</p>
    `
  },
  {
    id: "blog-new-2",
    title: "IoT and Real-Time Systems",
    category: "Embedded Systems",
    date: "Jan 28, 2026",
    image: "/assets/images/iot-and-real-time-systems.jpeg",
    content: `
      <p>The Internet of Things (IoT) is connecting the physical world to the digital realm. Building real-time embedded systems requires a deep understanding of hardware constraints and concurrency.</p>
      <h3>Real-Time Operating Systems (RTOS)</h3>
      <p>Unlike general-purpose OSs, an RTOS guarantees that tasks are completed within strict timing constraints. We'll look at FreeRTOS and how it manages tasks and interrupts.</p>
      <h3>Connectivity Protocols</h3>
      <p>From MQTT to CoAP, choosing the right protocol is vital for energy-efficient and reliable communication in constrained environments.</p>
    `
  },
  {
    id: "blog-1",
    title: "Building Scalable Backend Systems",
    category: "Backend",
    date: "Aug 15, 2024",
    image: "/assets/images/blog-backend.jpeg",
    content: `
      <p>Building scalable backend systems is a critical skill for modern software engineers. As applications grow from hundreds to millions of users, the architecture must evolve to handle increased load without compromising performance.</p>
      <h3>The Pillars of Scalability</h3>
      <p>1. <strong>Horizontal Scaling:</strong> Instead of making one server bigger, add more servers. This requires a load balancer and stateless application design.</p>
      <p>2. <strong>Database Optimization:</strong> Use indexing, read replicas, and sharding to ensure your data layer doesn't become a bottleneck.</p>
      <p>3. <strong>Caching:</strong> Implement Redis or Memcached to store frequently accessed data and reduce database hits.</p>
      <blockquote>"Scalability is not just about handling more traffic; it's about doing so efficiently and reliably."</blockquote>
      <p>In this post, we'll dive deeper into each of these pillars and look at real-world examples of how large-scale systems are architected.</p>
    `
  },
  {
    id: "blog-2",
    title: "Modern Frontend Development Trends",
    category: "Frontend",
    date: "Jul 22, 2024",
    image: "/assets/images/blog-frontend.jpeg",
    content: `
      <p>The frontend landscape changes rapidly. From new frameworks to CSS features, staying updated is a full-time job. Let's look at what's shaping 2024.</p>
      <h3>Server Components and Islands</h3>
      <p>React Server Components and architectures like Astro's "Islands" are changing how we think about hydration and performance. By shipping less JavaScript to the client, we get faster load times and better SEO.</p>
      <h3>The Rise of CSS-in-JS (Again?)</h3>
      <p>While some are moving back to utility-first CSS like Tailwind, others are embracing zero-runtime CSS-in-JS libraries like Panda CSS or StyleX.</p>
    `
  },
  {
    id: "blog-3",
    title: "API Design Essentials",
    category: "API",
    date: "Jun 10, 2024",
    image: "/assets/images/blog-api.jpeg",
    content: `
      <p>A well-designed API is a joy to use. A poorly designed one can be a maintenance nightmare. Here are the essentials of RESTful API design.</p>
      <h3>Resource-Based Routing</h3>
      <p>Always use nouns, not verbs, for your endpoints. Use HTTP methods (GET, POST, PUT, DELETE) to define actions.</p>
    `
  },
  {
    id: "blog-4",
    title: "Optimizing Database Performance",
    category: "Database",
    date: "May 3, 2024",
    image: "/assets/images/blog-db.jpeg",
    content: `
      <p>Slow queries are the silent killer of user experience. Optimizing your database is one of the most impactful things you can do for your app's speed.</p>
    `
  },
  {
    id: "blog-5",
    title: "Building RESTful APIs with Node.js",
    category: "Backend",
    date: "Apr 18, 2024",
    image: "/assets/images/blog-restapi.jpeg",
    content: `
      <p>Node.js is a powerhouse for building fast, scalable APIs. Combined with Express, it's the go-to choice for many developers.</p>
    `
  },
  {
    id: "blog-6",
    title: "System Design for Web Developers",
    category: "System Design",
    date: "Mar 5, 2024",
    image: "/assets/images/blog-sysdesign.jpeg",
    content: `
      <p>System design is the process of defining the architecture, components, and interfaces of a system to satisfy specified requirements.</p>
    `
  }
];

export const portfolioItems = [
  {
    id: "project-1",
    title: "Real Estate Platform",
    category: "Full Stack Development",
    image: "/assets/images/project-1.jpg",
    content: `
      <p>A comprehensive real estate discovery platform that allows users to search, filter, and view properties in real-time. Built with a focus on performance and intuitive user experience.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Real-time property search and filtering</li>
        <li>Interactive maps integration</li>
        <li>User bookmarks and notifications</li>
        <li>Agent dashboard for property management</li>
      </ul>
      <p>The backend was built using Node.js and MongoDB, ensuring high scalability and flexible data structures.</p>
    `
  },
  {
    id: "project-2",
    title: "E-commerce Dashboard",
    category: "Backend & API Development",
    image: "/assets/images/project-2.png",
    content: `
      <p>An administrative dashboard for an e-commerce giant, focusing on data visualization and inventory management. This project involved complex API integrations and high-security standards.</p>
    `
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    category: "UI/UX & Frontend Design",
    image: "/assets/images/project-3.jpg",
    content: `
      <p>A sleek, dark-themed portfolio website designed for a creative professional. Features smooth transitions and a responsive layout that works across all devices.</p>
    `
  },
  {
    id: "project-4",
    title: "Task Tracker App",
    category: "Mobile Application",
    image: "/assets/images/project-4.png",
    content: `
      <p>A cross-platform mobile application for tracking daily tasks and productivity. Built using React Native for a native feel and performance.</p>
    `
  },
  {
    id: "project-5",
    title: "Corporate Landing Page",
    category: "Web Design",
    image: "/assets/images/project-5.png",
    content: `
      <p>A high-conversion landing page for a corporate client, following modern design principles and SEO best practices.</p>
    `
  },
  {
    id: "project-6",
    title: "Agency Website",
    category: "Responsive UI Design",
    image: "/assets/images/project-6.png",
    content: `
      <p>A vibrant and interactive website for a digital marketing agency, showcasing their services and case studies.</p>
    `
  },
  {
    id: "project-7",
    title: "Analytics Dashboard",
    category: "Web Development",
    image: "/assets/images/project-7.png",
    content: `
      <p>A data-intensive dashboard that provides real-time analytics and insights for business owners.</p>
    `
  },
  {
    id: "project-8",
    title: "Expense Manager",
    category: "Applications",
    image: "/assets/images/project-8.jpg",
    content: `
      <p>A web application to help individuals manage their daily expenses and savings goals.</p>
    `
  },
  {
    id: "project-9",
    title: "API Integration System",
    category: "Web Development",
    image: "/assets/images/project-9.png",
    content: `
      <p>An automated system that synchronizes data across multiple third-party services via APIs.</p>
    `
  }
];
