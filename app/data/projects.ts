export const mainProjects = [
    {
        title: "Habits Warrior",
        alt:"Habits Warrior: A habit tracking app",
        description: "A habit tracking app that helps you build good habits and break bad ones.",
        img:"/images/ui-page.png",
        demo: "https://habitswarrior.com/",
        technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
    },
    {
        title: "Baran UI",
        alt:"UI page screenshot",
        description: "A collection of reusable UI components for rapid web development.",
        img:"/images/ui-page.png",
        demo:"https://ui.ybarandogan.com",
        github:"https://github.com/phscloq/ui-library",
        technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
    },
    {
        title: "Shopping Cart",
        alt:"Shopping-cart website image",
        description: "An e-commerce platform showcasing advanced shopping cart functionality. Demonstrates proficiency in state management and creating intuitive user interfaces.",
        img:"/images/shopping-cart-women-page.png",
        demo:"https://shopping-site-rho.vercel.app/",
        github:"https://github.com/phscloq/shopping-site",
        technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
    },
];

export const sideProjects = [
    {
        title: "Guess the Color!",
        description: "An HEX color guessing game",
        alt:"Guess the Color! An HEX color guessing game",
        img: "/images/guess-the-color.png",
        demo: "https://phscloq.github.io/guess-the-color/",
        github:"https://github.com/phscloq/guess-the-color",
        technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
    },
    {
        title: "Search Flight",
        description: "Interactive flight search application with advanced filtering and sorting capabilities.",
        alt:"A flight search web app based on mock data",
        img:"/images/shopping-cart-women-page.png",
        demo:"https://flight-search-app-bay.vercel.app",
        github:"https://github.com/phscloq/flight-search-app",
        technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
    },
    {
        title: "Election Observer",
        description: "Mobile app for election observers to document and report election processes.",
        alt:"A mobile app to help observersin elections",
        img:"/images/ui-page.png",
        github:"https://github.com/phscloq/secim-app",
        technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
    },
    {
        title: "CSS Challenges",
        description: "Collection of advanced CSS implementations showcasing frontend expertise.",
        alt:"A repo of the CSS challenges I've done",
        img:"/images/ui-page.png",
        demo:"https://challenges-inky.vercel.app",
        github:"https://github.com/phscloq/challenges",
        technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
    },
];


export const projectsData = {
    'baran-ui': {
      title: "Baran UI",
      description: "A comprehensive UI library featuring reusable components and consistent design patterns for rapid development.",
      fullDescription: "Baran UI is a robust and flexible UI component library built with React, TypeScript and Tailwind CSS. It aims to provide developers with a set of high-quality, customizable components that adhere to modern design principles. The library includes a wide range of components from basic buttons and inputs to modal dialogs, all designed with accessibility and performance in mind.",
      image: "/images/ui-page.png",
      liveUrl: "https://ui.ybarandogan.com",
      githubUrl: "https://github.com/phscloq/ui-library",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"],
      features: [
        "Comprehensive set of UI components",
        "Fully customizable theming system",
        "Accessibility-first design",
        "Extensive documentation and examples",
        "TypeScript support for enhanced developer experience"
      ],
      challenges: "The biggest challenge was creating a flexible theming system that could accommodate a wide range of design preferences while maintaining consistency across components. This was addressed by implementing a robust set of design tokens and a theme provider system.",
      futureImprovements: "Future plans include adding more complex components like data visualization tools, expanding the documentation with more real-world examples, and implementing a plugin system for easy integration with popular frameworks and tools."
    },
    'shopping-cart': {
      title: "Shopping Cart",
      description: "A fully functional e-commerce platform with a responsive design, showcasing products and handling cart operations.",
      fullDescription: "This project is a comprehensive e-commerce solution built with React and Next.js. It features a responsive design that adapts seamlessly to various screen sizes, ensuring a consistent user experience across devices. The shopping cart functionality allows users to add, remove, and update items, with real-time price calculations. State management is handled efficiently using React hooks, providing a smooth and interactive shopping experience.",
      image: "/images/shopping-cart.png",
      liveUrl: "https://shopping-site-rho.vercel.app/",
      githubUrl: "https://github.com/phscloq/shopping-site",
      techStack: ["React", "Next.js", "Tailwind CSS", "Context API", "Git", "GitHub", "Vercel" ],
      features: [
        "Responsive design for mobile and desktop",
        "Dynamic product listing",
        "Interactive shopping cart",
        "Checkout process simulation"
      ],
      challenges: "One of the main challenges was implementing a seamless state management system that could handle complex cart operations while maintaining performance. This was overcome by leveraging React's Context API and custom hooks.",
      futureImprovements: "Future plans include integrating a backend API for real-time inventory management, implementing user reviews and ratings, and adding a recommendation system based on user browsing history."
    },
    'habits-warrior': {
        title: "Habits Warrior",
        description: "A habit tracking app that helps you build good habits and break bad ones.",
        fullDescription: "Habits Warrior is a habit tracking app designed to help users build positive habits and break negative ones. The app features a clean and intuitive interface that allows users to set goals, track progress, and receive motivational reminders. With a focus on simplicity and usability, Habits Warrior empowers users to take control of their daily routines and achieve their personal goals.",
        image: "/images/ui-page.png",
        liveUrl: "https://habitswarrior.com/",
        githubUrl: "",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Vercel", "Git", "GitHub"],
        features: [
          "Goal setting and tracking",
          "Daily habit reminders",
          "Progress visualization",
          "User account management",
          "Data synchronization across devices",
          "Dark mode support",
          "Data management and API entegration",
          "User authentication and authorization",
          "User-friendly and responsive design"
        ],
        challenges: "The main challenge was implementing a robust data synchronization system that could handle real-time updates across multiple devices. This was achieved by leveraging Supabase's real-time database and authentication features.",
        futureImprovements: "Future plans include adding social sharing features, implementing advanced habit tracking analytics, and expanding the app to support multiple languages"
    },
    'guess-the-color': {
        title: "Guess the Color!",
        description: "An HEX color guessing game. Test your knowledge of HEX colors!",
        fullDescription: "Guess the Color! is a fun and interactive game that tests your knowledge of HEX colors. The game presents you with a random color and challenges you to guess the correct HEX value. With multiple difficulty levels and a time limit, Guess the Color! offers a thrilling experience for color enthusiasts and designers alike.",
        image: "/images/guess-the-color-light-new.png",
        darkThemedImage: "/images/guess-the-color-dark-new.png",
        liveUrl: "https://phscloq.github.io/guess-the-color/",
        githubUrl: "https://github.com/phscloq/guess-the-color",
        techStack: ["Vite", "React", "TypeScript", "CSS3", "Git", "GitHub"],
        features: [
          "Color picker interface",
          "Score tracking",
          "Responsive design for mobile and desktop"
        ],
        challenges: "The main challenge I encountered was publishing the app on GitHub Pages. Initially, it didn't work as expected, so I addressed the issue by creating a deployment script specifically for the GitHub Actions workflow and configuring the Vite build settings to ensure compatibility.",
        futureImprovements: "Future plans include adding time based features, implementing a multiplayer mode, and integrating a color blindness simulator for enhanced accessibility."
    },
    'search-flight': {
        title: "Search Flight",
        description: "Interactive flight search application with advanced filtering and sorting capabilities.",
        fullDescription: "Search Flight is an interactive flight search application that allows users to find and book flights based on their preferences. The app features a user-friendly interface with advanced filtering and sorting options, enabling users to quickly find the best flight deals. With real-time data updates and seamless navigation, Search Flight provides a hassle-free booking experience for travelers.",
        image: "/images/flight-light.png",
        darkThemedImage: "/images/flight-dark.png",
        liveUrl: "https://flight-search-app-bay.vercel.app",
        githubUrl: "https://github.com/phscloq/flight-search-app",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Context API", "Vercel", "Git", "GitHub"],
        features: [
          "Interactive flight search",
          "Advanced filtering and sorting",
          "Real-time data updates",
          "Responsive design for mobile and desktop"
        ],
        challenges: "The main challenge was integrating the flight data API and handling real-time updates efficiently. This was addressed by implementing a custom data fetching solution with Next.js and optimizing the API calls to minimize latency.",
        futureImprovements: "Future plans include implementing a booking system with payment integration.",
    },
    'election-observer': {
        title: "Election Observer",
        description: "Mobile app for election observers to document and report election processes.",
        fullDescription: "Election Observer is a mobile app designed to assist election observers in documenting and reporting election processes. The app features a user-friendly interface that allows observers to record incidents, take photos, and submit reports in real-time. With a focus on transparency and accountability, Election Observer empowers citizens to monitor and safeguard the integrity of democratic elections.",
        image: "/images/ui-page.png",
        liveUrl: "",
        githubUrl: "https://github.com/phscloq/secim-app",
        techStack: ["React Native", "Expo", "TypeScript", "Context API", "Git", "GitHub"],
        features: [
          "Incident reporting",
          "Photo documentation",
          "Real-time data submission",
          "User authentication and authorization",
          "Offline data storage and synchronization",
          "User-friendly and responsive design"
        ],
        challenges: "The main challenge was implementing a secure and reliable data submission system that could handle intermittent network connectivity. This was achieved by leveraging Expo's offline storage capabilities and implementing data synchronization strategies.",
        futureImprovements: "Future plans include adding real-time incident tracking, integrating a map-based reporting system, and expanding the app to support multiple election scenarios."
    },
    'css-challenges': {
        title: "CSS Challenges",
        description: "Collection of advanced CSS implementations showcasing frontend expertise.",
        fullDescription: "CSS Challenges is a collection of advanced CSS implementations that showcase my frontend expertise and creativity. Each challenge is designed to push the boundaries of CSS and HTML, exploring new techniques and design patterns. From complex layouts to interactive animations, CSS Challenges offers a glimpse into the world of modern web design and development.",
        image: "/images/css-challenges.png",
        liveUrl: "https://challenges-inky.vercel.app",
        githubUrl: "https://github.com/phscloq/challenges",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"],
        features: [
          "Advanced CSS layouts",
          "Interactive animations",
          "Responsive design for mobile and desktop",
          "Accessibility-first design principles"
        ],
        challenges: "",
        futureImprovements: "Future plans include adding more challenges, expanding the collection with new themes and concepts, and creating interactive tutorials to help others learn and explore modern CSS techniques."
    },
  }