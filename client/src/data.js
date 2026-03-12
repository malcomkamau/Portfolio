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
    image: "/assets/images/nodejs-performance.jpeg",
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
    id: "project-lithos-kernel",
    title: "Lithos Kernel",
    category: "Systems Programming",
    image: "/assets/images/lithos.jpeg",
    github: "https://github.com/malcomkamau/lithos-kernel",
    content: `
      <p><strong>Lithos is an ambitious x86_64 microkernel-architected operating system being built from the ground up in Rust.</strong></p>
      <h3>Vision</h3>
      <p>Lithos aims to provide a safe, modular, and high-performance foundation for modern computing, leveraging Rust's zero-cost abstractions and memory safety.</p>
      <h3>Current Progress</h3>
      <ul>
        <li><strong>Bare-metal Environment:</strong> Custom target specification and no_std environment.</li>
        <li><strong>VGA Text Driver:</strong> Safe interface for screen output.</li>
        <li><strong>Serial Logging:</strong> Professional-grade debugging interface.</li>
        <li><strong>Testing Infrastructure:</strong> Integrated framework for verified development.</li>
        <li><strong>CPU Foundation:</strong> GDT, IDT, and Interrupt Handling.</li>
        <li><strong>Memory Management:</strong> Paging, Frame Allocation, and Heap Support.</li>
        <li><strong>Multitasking:</strong> Context switching with CPU register preservation and timer-based preemption.</li>
        <li><strong>Virtual File System:</strong> Unified file interface with ramfs implementation.</li>
        <li><strong>Block Device Layer:</strong> Abstract disk I/O with RAM disk support.</li>
        <li><strong>FAT32 Support:</strong> Boot sector parsing and directory structures (read-only foundation).</li>
        <li><strong>Device Files:</strong> /dev/null, /dev/zero, /dev/random.</li>
        <li><strong>Interactive Shell:</strong> Command-line interface with ls, mkdir, cd, touch, echo, and more.</li>
        <li><strong>System Calls:</strong> Full syscall interface (read, write, open, close, exit, fork, exec, wait).</li>
        <li><strong>ATA/IDE Driver:</strong> Physical disk access via PIO mode.</li>
        <li><strong>ELF Loader:</strong> Parse and load ELF64 binaries.</li>
      </ul>
    `
  },
  {
    id: "project-uselayouts",
    title: "uselayouts",
    category: "Frontend UI Library",
    image: "https://uselayouts.vercel.app/og.png",
    github: "https://github.com/malcomkamau/uselayouts",
    content: `
      <p><strong>A clone of uselayouts.com - a micro-interaction UI library for professionals.</strong></p>
      <p>Provides free premium animated React components and micro-interactions built with Framer Motion and Tailwind CSS. Designed to integrate seamlessly with Shadcn UI, it helps you bring your interfaces to life with ease.</p>
      <h3>Why uselayouts?</h3>
      <ul>
        <li><strong>Premium Animations:</strong> Built with Framer Motion for buttery smooth transitions.</li>
        <li><strong>Shadcn Compatible:</strong> Designed to work with your existing Shadcn UI setup.</li>
        <li><strong>Micro-interactions:</strong> Focused on the small details that make a big difference in UX.</li>
        <li><strong>Copy & Paste:</strong> Easy to integrate into any React project.</li>
      </ul>
      <br />
      <p><strong>Website:</strong> <a href="https://uselayouts.vercel.app" target="_blank" rel="noopener noreferrer" style="color: var(--vegas-gold); text-decoration: underline;">uselayouts.vercel.app</a></p>
    `
  },
  {
    id: "project-1",
    title: "Osiris - Futuristic Web Experience",
    category: "Full Stack Development & UI/UX",
    image: "/assets/images/project-1.jpg",
    github: "https://github.com/malcomkamau/Osiris",
    content: `
      <p>A full-fledged, multi-page web application featuring high-fidelity, futuristic visual effects. Designed with a deep focus on immersive user experience and complex interactive elements.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Advanced animations including Matrix rain, glitch transitions, and holographic UI elements.</li>
        <li>Subtle aurora backgrounds, magnet animations, and shiny text effects.</li>
        <li>Custom thematic pages encompassing Home, Arsenal, Vehicles, and Technology.</li>
      </ul>
      <p>This project showcases pushing the boundaries of modern DOM manipulation and CSS for a highly aesthetic, next-generation design.</p>
    `
  },
  {
    id: "project-2",
    title: "Qrib Real Estate Platform",
    category: "Full Stack Development",
    image: "/assets/images/project-2.png",
    github: "https://qrib.vercel.app",
    content: `
      <p>A comprehensive real estate discovery platform allowing users to search, filter, and view properties. Built with precise data modeling and an intuitive user experience.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Granular property listing filters for characteristics like size, amenities, and property types.</li>
        <li>Advanced user interface incorporating sliding drawers and dynamic interactions.</li>
        <li>Robust backend driven by Prisma ORM for efficient database queries and complex relations.</li>
      </ul>
    `
  },
  {
    id: "project-3",
    title: "Enterprise Backend Architecture",
    category: "Backend & API Architecture",
    image: "/assets/images/boilerplate.gif",
    github: "https://github.com/malcomkamau/backend-boilerplate",
    content: `
      <p>A highly robust and scalable backend foundation constructed using Express.js, Prisma, and TypeScript. Designed to serve as the structural backbone for future microservices and enterprise applications.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Standardized API versioning and structured snake_case JSON responses.</li>
        <li>Built-in stringent security with input validation (using Zod), authorization, and comprehensive rate limiting.</li>
        <li>Advanced handling of pagination, filtering capabilities, and structured error responses.</li>
      </ul>
    `
  },
  {
    id: "project-4",
    title: "E-Commerce Admin Dashboard",
    category: "Full Stack & Security",
    image: "/assets/images/project-4.png",
    github: "https://github.com/malcomkamau/ecommerce-admin-dashboard",
    content: `
      <p>A centralized administrative panel for managing e-commerce data. Focused heavily on robust security and synchronized data flows to manage products, categories, and internal blogs seamlessly.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Secure OTP (One-Time Password) verification flow ensuring authorized administrative access.</li>
        <li>Resilient client-side infrastructure capable of unpacking complex backend API payloads automatically.</li>
        <li>Dynamic session states, secure authentication contexts, and an immersive dark-theme oriented UI.</li>
      </ul>
    `
  },
  {
    id: "project-5",
    title: "Data Sync & Alignment Service",
    category: "Systems Integration",
    image: "/assets/images/project-5.png",
    github: "https://github.com/malcomkamau/data-sync-service",
    content: `
      <p>A sophisticated synchronization proxy integrating modern robust JavaScript backends with corresponding Java model counterparts to ensure cross-platform coherence across organizational silos.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Real-time bi-directional synchronization specifically tailored for core Product and Sales entities.</li>
        <li>Architectural mapping that aligns heterogeneous data models between distinct backend ecosystems.</li>
        <li>Guaranteed stateless JWT validation and strict error handling tracking across distributed services.</li>
      </ul>
    `
  },
  {
    id: "project-6",
    title: "Electron Workspace Application",
    category: "Desktop Development",
    image: "/assets/images/project-6.png",
    github: "https://github.com/malcomkamau/electron-workspace",
    content: `
      <p>A modern, cross-platform desktop integration system built entirely upon resilient web technologies. Incorporates a sleek user interface using optimized shadcn/ui components within a performant Electron environment to guarantee broad accessibility and distinct visual consistency.</p>
    `
  },
  {
    id: "project-7",
    title: "CLI System Metrics Monitor",
    category: "CLI Tooling",
    image: "/assets/images/project-7.png",
    github: "https://github.com/malcomkamau/cli-system-monitor",
    content: `
      <p>A lightweight, powerful terminal-based system monitoring utility crafted to control terminal output positioning and screen clearing specifically, guaranteeing an elegant, continuous visualization of runtime system metrics evading traditional console clutter.</p>
    `
  },
  {
    id: "project-8",
    title: "ESP32-S3 Connected IoT Node",
    category: "Embedded Systems",
    image: "/assets/images/project-8.jpg",
    github: "https://github.com/malcomkamau/esp32-s3-iot-node",
    content: `
      <p>An initial integration and development stack targeting the adaptable ESP32-S3-N16R8 microcontroller platforms. It actively prepares necessary groundwork handling precise hardware interfacing, streamlined multi-channel sensor data orchestration, alongside fault-tolerant Wi-Fi interactions.</p>
    `
  },
  {
    id: "project-9",
    title: "Creative Portfolio Engine",
    category: "Frontend Design",
    image: "/assets/images/portfolio.png",
    github: "https://github.com/malcomkamau/Portfolio",
    content: `
      <p>A sleek, elegant portfolio engine architecture (this precise instance). Integrates smooth CSS-driven interactions, persistent dark-mode preferences, efficient React-based routing structures, tailored beautifully for visionary creatives tracking diverse complex arrays of multi-domain experience.</p>
    `
  }
];
