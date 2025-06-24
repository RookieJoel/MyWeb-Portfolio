export const ProjCards = [
  {
    description: "turn-based strategy game inspired by Catan",
    title: "Columbus Project: New Heavens",
    src: "/projects/columbus.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/Columbus-Project-New-Heaven",
    content: () => {
      return (
        <p>
          Columbus Project: New Heaven is a turn-based strategy game inspired by
          Catan, developed as part of the Programming Methodology course
          @Chulalongkorn University. The game is designed using Java and JavaFX,
          implementing Object-Oriented Programming (OOP) principles such as
          inheritance, polymorphism, encapsulation, and abstraction. Set in a
          post-apocalyptic world, players take on the role of factions competing
          to colonize New Heaven, a habitable planet discovered after Earth's
          destruction. Players must strategically build structures, manage
          resources, and engage in combat to ensure their civilization's
          survival.
        </p>
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
    content: () => {
      return (
        <p>
          MyCourseMate is an educational platform designed to enhance
          collaboration and knowledge-sharing among students, developed as part
          of the Computer Engineering Essentials course @Chulalongkorn
          University.. The platform allows users to organize tasks, discuss
          academic topics, and access study materials through an interactive and
          user-friendly web interface.
        </p>
      );
    },
  },

  {
    description: "full‑stack development using SvelteKit",
    title: "ShopShap with SvelteKit",
    src: "/projects/shopshap.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/ShopShap-with-sveltekit",
    content: () => {
      return (
        <>
          <p>
            This mini-project is a personal playground for practicing full‑stack
            development using SvelteKit. It covers both the frontend and backend
            aspects of an e‑commerce style application.
          </p>
          <p>
            Features
            <br />
            - SvelteKit powered frontend using TypeScript
            <br />
            - Tailwind CSS for styling
            <br />
            - MongoDB with Mongoose for data storage
            <br />
            - User authentication with JWT tokens and Google OAuth
            <br />- Fetches product data from DummyJSON
          </p>
        </>
      );
    },
    technologies: [
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose", 
    ]
  },
  {
    description:
      "visually appealing fashion storefront prototype built with Svelte and Tailwind CSS",
    title: "Shop Web Design",
    src: "/projects/shop.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/RookieJoel/Shop-Web-Design",
    content: () => {
      return (
        <p>
          🛍️ ShopShap
          <br />
          <br />
          Welcome to ShopShap, a modern, responsive fashion storefront built as
          a mini-project to practice UI/UX design using the Svelte framework and
          Tailwind CSS.
          <br />
          <br />
          As someone passionate about both design and development, I wanted to
          challenge myself by learning Svelte, a fast and elegant JavaScript
          framework. Pairing it with Tailwind CSS allowed me to rapidly
          prototype beautiful, responsive layouts while keeping code
          maintainable and scalable. 🧠 My goal: Build something that looks
          great, works cleanly, and shows off how fun and powerful modern
          frontend tools can be.
        </p>
      );
    },
  },
];
