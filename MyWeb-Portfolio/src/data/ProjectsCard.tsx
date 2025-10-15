export const ProjCards = [
  {
    description: "A travel companion matching users with personalized itineraries",
    title : "ThamRoi",
    src : "/projects/thamroi.png",
    ctaText : "Developing",
    ctaLink : "https://github.com/orgs/G08SE25-Kikkaksaranungkukuk/repositories",
    techList: [
      {
        icon: "/tech/nextjs.png",
        techStack: "Next.js",
      },
      {
        icon: "/tech/ts.png",
        techStack: "TypeScript",
      },
      {
        icon: "/tech/tailwind.png",
        techStack: "Tailwind",
      },
      {
        icon: "/tech/nodejs.png",
        techStack: "Node.js",
      },
      {
        icon: "/projects/expressjs.png",
        techStack: "Express.js",
      },
      {
        icon: "/tech/docker.webp",
        techStack: "Docker",
      },
      {
        icon: "/tech/pgsql.png",
        techStack: "PostgreSQL",
      }
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            ThamRoi is a travel companion matching platform that enables users to find and connect with travel partners based on shared interests and travel preferences.
          </p>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>🔐 User Authentication - Registration, login with JWT tokens</li>
            <li>👤 User Profiles - Manage personal info, interests, and travel styles</li>
            <li>🏖️ Interest-Based Matching - 17 travel interests (Sea, Mountain, Temple, Food, etc.)</li>
            <li>✈️ Travel Style Preferences - Budget, Luxury, Backpacker, Family-friendly options</li>
            <li>👥 Group Management - Create, join, and manage travel groups</li>
            <li>📸 Profile & Group Images - Upload and manage profile pictures</li>
            <li>🔍 Smart Filtering - Find groups by interests, location, and preferences</li>
            <li>🎯 Group Operations - Join/leave groups, transfer ownership, member management</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "an AI-powered educational assistant",
    title: "CapyKnow 2.0",
    src: "/projects/capyknow.png",
    ctaText: "Developing",
    ctaLink: "https://github.com/RookieJoel/capyknow-INDIV",
    techList: [
      {
        icon: "📖",
        techStack: "Individual Study",
      },
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            CapyKnow 2.0 — AI-powered educational assistant; migrated primary inference from AWS Bedrock to Chula Genie, with Bedrock retained as a stability fallback.
          </p>
          <h4 className="font-semibold mb-2">Responsibilities & Impact:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Built AI tutor experiences for personalized learning</li>
            <li>Automated exam generation system</li>
            <li>Course-outline creation and management</li>
            <li>Conducted prompt-effect evaluations for summarization</li>
            <li>Optimized mock-exam generation for accuracy and efficiency</li>
            <li>Implemented fallback systems for stability</li>
          </ul>
        </div>
      );
    }
  },

  {
    description: "A modern, responsive personal portfolio website built with Next.js and Tailwind CSS",
    title: "MyWeb Portfolio",
    src: "/projects/port.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/MyWeb-Portfolio",
    techList: [
      {
        icon: "/tech/nextjs.png",
        techStack: "Next.js",
      },
      {
        icon: "/tech/tailwind.png",
        techStack: "Tailwind",
      },
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            Welcome to my personal portfolio website, built with Next.js and Tailwind CSS. This site showcases my skills, projects, and journey as a developer.
          </p>
          <h4 className="font-semibold mb-2">Features:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Clean, modern design with responsive layout</li>
            <li>Smooth animations powered by Framer Motion</li>
            <li>Project showcase with detailed descriptions</li>
            <li>Skills and experience timeline</li>
            <li>Interactive contact form</li>
            <li>Optimized performance with Next.js</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "turn-based strategy game inspired by Catan",
    title: "Columbus Project: New Heavens",
    src: "/projects/columbus.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/Columbus-Project-New-Heaven",
    techList: [
      {
        icon: "/projects/java.svg",
        techStack: "Java",
      },
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            Columbus Project: New Heaven is a turn-based strategy game inspired by Catan, developed as part of the Programming Methodology course @Chulalongkorn University.
          </p>
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Java and JavaFX implementation</li>
            <li>Object-Oriented Programming principles (inheritance, polymorphism, encapsulation, abstraction)</li>
            <li>Turn-based strategy gameplay mechanics</li>
            <li>Resource management system</li>
            <li>Strategic building and combat systems</li>
          </ul>
          <p>
            Set in a post-apocalyptic world, players compete to colonize New Heaven, ensuring their civilization's survival through strategic gameplay.
          </p>
        </div>
      );
    },
  },
  {
    description: "A comprehensive Go learning project demonstrating fundamental Go concepts, API development, and database integration patterns",
    title: "GoAPI Essential",
    src: "/projects/goapi.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/GoAPI-essential",
    techList: [
      {
        icon: "/tech/go.png",
        techStack: "Go",
      },
      {
        icon: "/tech/pgsql.png",
        techStack: "PostgreSQL",
      },
      {
        icon: "/tech/docker.webp",
        techStack: "Docker",
      },
      {
        icon: "/tech/fiber.png",
        techStack: "Fiber",
      },
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            GoAPI Essential is a comprehensive Go learning project that demonstrates fundamental Go concepts, API development, and database integration patterns. This repository contains four distinct modules showcasing different aspects of Go programming from basic syntax to advanced web API development.
          </p>
          
          <h4 className="font-semibold text-lg mb-2">🚀 Modules Overview:</h4>
          <div className="space-y-3 mb-4">
            <div>
              <strong>1. Basic Go:</strong> Go fundamentals and core concepts including variables, control structures, functions, and interfaces.
            </div>
            <div>
              <strong>2. GoAPI:</strong> REST API development with Fiber framework, JWT authentication, and CRUD operations.
            </div>
            <div>
              <strong>3. GoDB:</strong> Raw SQL database operations with PostgreSQL and direct database interaction.
            </div>
            <div>
              <strong>4. GORM:</strong> ORM-based API with advanced features including user authentication, password hashing, and soft deletes.
            </div>
          </div>

          <h4 className="font-semibold text-lg mb-2">🎯 Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>JWT token-based authentication</li>
            <li>RESTful API design patterns</li>
            <li>Database operations (both raw SQL and ORM)</li>
            <li>Docker containerization</li>
            <li>Password hashing with bcrypt</li>
            <li>Comprehensive CRUD operations</li>
          </ul>

          <p>
            This project showcases modern Go development practices, from basic language concepts to production-ready API development with proper authentication, database integration, and containerization.
          </p>
        </div>
      );
    },
  },
  {
    description: "full‑stack development using SvelteKit",
    title: "ShopShap with SvelteKit",
    src: "/projects/shopshap.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/ShopShap-with-sveltekit",
    techList: [
      {
        icon: "/tech/svelte.png",
        techStack: "SvelteKit",
      },
      {
        icon: "/tech/ts.png",
        techStack: "TypeScript",
      },
      {
        icon: "/tech/tailwind.png",
        techStack: "Tailwind",
      },
      {
        icon: "/tech/mongo.png",
        techStack: "MongoDB",
      },
      {
        icon: "/tech/nodejs.png",
        techStack: "Node.js",
      },
      {
        icon: "/projects/expressjs.png",
        techStack: "Express.js",
      },
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            This mini-project is a personal playground for practicing full‑stack development using SvelteKit. It covers both the frontend and backend aspects of an e‑commerce style application.
          </p>
          <h4 className="font-semibold mb-2">Features:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>SvelteKit powered frontend using TypeScript</li>
            <li>Tailwind CSS for styling</li>
            <li>MongoDB with Mongoose for data storage</li>
            <li>User authentication with JWT tokens and Google OAuth</li>
            <li>Fetches product data from DummyJSON</li>
          </ul>
        </div>
      );
    },
  },
  {
    description:
      "educational platform designed to enhance collaboration and knowledge-sharing among students",
    title: "MyCourseMate",
    src: "/projects/mcm.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/Final-Project-CEE/tree/main",
    techList: [
      {
        icon: "/tech/html.webp",
        techStack: "HTML",
      },
      {
        icon: "/tech/css.webp",
        techStack: "CSS",
      },
      {
        icon: "/tech/js.png",
        techStack: "JavaScript",
      },
      {
        icon: "/projects/aws.png",
        techStack: "AWS",
      },
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            MyCourseMate is an educational platform designed to enhance collaboration and knowledge-sharing among students, developed as part of the Computer Engineering Essentials course @Chulalongkorn University.
          </p>
          <h4 className="font-semibold mb-2">Features:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Task organization and management</li>
            <li>Academic topic discussions</li>
            <li>Study materials access</li>
            <li>Interactive and user-friendly web interface</li>
            <li>Student collaboration tools</li>
          </ul>
        </div>
      );
    },
  },
  {
    description:
      "visually appealing fashion storefront prototype built with Svelte and Tailwind CSS",
    title: "Shop Web Design",
    src: "/projects/shop.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/Shop-Web-Design",
    techList: [
      {
        icon: "/tech/svelte.png",
        techStack: "Svelte",
      },
      {
        icon: "/tech/tailwind.png",
        techStack: "Tailwind",
      },
      {
        icon: "/tech/docker.webp",
        techStack: "Docker",
      },
    ],
    content: () => {
      return (
        <div>
          <p className="mb-4">
            🛍️ ShopShap - Welcome to ShopShap, a modern, responsive fashion storefront built as a mini-project to practice UI/UX design using the Svelte framework and Tailwind CSS.
          </p>
          <h4 className="font-semibold mb-2">Project Goals:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Learn Svelte, a fast and elegant JavaScript framework</li>
            <li>Practice rapid prototyping with Tailwind CSS</li>
            <li>Create beautiful, responsive layouts</li>
            <li>Maintain clean and scalable code</li>
            <li>Showcase modern frontend development skills</li>
          </ul>
          <p>
            Built to demonstrate how fun and powerful modern frontend tools can be in creating visually appealing applications.
          </p>
        </div>
      );
    },
  }
];
