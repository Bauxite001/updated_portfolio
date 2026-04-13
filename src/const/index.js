// navBar Items
const menuItems = [
  { id: 1, label: "Projects", href: "#project" },
  { id: 2, label: "What I Do", href: "#whatido" },
  { id: 3, label: "About", href: "#about" },
  // { id: 4, label: "Contact", href: "#contact" },
];

const words = [
  { text: " Ideas", imgPath: "/images/ideas.svg" },
  { text: " Concepts", imgPath: "/images/concepts.svg" },
  { text: " Designs", imgPath: "/images/designs.svg" },
  { text: " Code", imgPath: "/images/code.svg" },
  { text: " Ideas", imgPath: "/images/ideas.svg" },
  { text: " Concepts", imgPath: "/images/concepts.svg" },
  { text: " Designs", imgPath: "/images/designs.svg" },
  { text: " Code", imgPath: "/images/code.svg" },
];

// Replace counterItems with role cards
const whatIDoItems = [
  {
    id: 1,
    icon: "🖥️",
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications from responsive frontends to scalable backends. React, Node.js, Supabase, PostgreSQL — full lifecycle, no handoffs needed.",
    tags: ["React", "Node.js", "Supabase", "PostgreSQL", "Tailwind"],
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Software Development",
    description:
      "Designing and building software solutions beyond the browser — CLI tools, automation scripts, backend services, and APIs. Python and Node.js are my go-to for getting things done at the system level.",
    tags: ["Python", "Node.js", "REST APIs", "Automation", "CLI"],
  },
  {
    id: 3,
    icon: "🔍",
    title: "QA & Testing",
    description:
      "Catching bugs before users do. Writing test cases, identifying edge cases, and making sure what ships actually works — across browsers, devices, and user flows.",
    tags: ["Manual Testing", "Bug Tracking", "Test Cases", "Cross-browser"],
  },
  {
    id: 4,
    icon: "🔐",
    title: "Security-Aware Development",
    description:
      "Building with security baked in — not bolted on. OWASP principles, auth best practices, input validation, and secure API design inform every project I touch.",
    tags: ["OWASP", "Auth", "Input Validation", "Secure APIs"],
  },
  {
    id: 5,
    icon: "🤖",
    title: "AI Training & Data",
    description:
      "Evaluating model outputs, labeling training data, and working as an AI data specialist. Also comfortable with data analysis — cleaning, querying, and making sense of structured datasets.",
    tags: ["AI Evaluation", "Data Labeling", "SQL", "Data Analysis"],
  },
];

const icons = [
  { imagePath: "/devIcons/css.png" },
  { imagePath: "/devIcons/figma.png" },
  { imagePath: "/devIcons/git.png" },
  { imagePath: "/devIcons/github.png" },
  { imagePath: "/devIcons/html.png" },
  { imagePath: "/devIcons/python.png" },
  { imagePath: "/devIcons/javascript.png" },
  { imagePath: "/devIcons/node-js.png" },
  { imagePath: "/devIcons/react.png" },
  { imagePath: "/devIcons/typescript.png" },
  { imagePath: "/devIcons/visual-studio.png" },

  // { imagePath: "/devIcons/supabase.png" },
  // { imagePath: "/devIcons/tailwind.png" },
  // { imagePath: "/devIcons/postgresql.png" },
];

// All projects — add new ones here, homepage auto-picks the first 3 featured ones
const projects = [
  {
    id: 1,
    title: "ATEF NGO Website",
    description:
      "Full frontend build for the Atokolo Empowerment Foundation. Includes a donation flow with Paystack (USD/NGN dual currency), admin dashboard, photo gallery, and Supabase backend integration.",
    image: "/images/atef.png",
    liveUrl: "https://www.atokoloempowermentfoundation.org/",
    githubUrl: "",
    tags: ["React", "Tailwind", "Supabase", "Paystack", "Vite"],
    category: "Full-Stack",
    featured: true,
    features: [
      "Dual currency donation flow — USD and NGN via Paystack",
      "Admin dashboard for managing content and donations",
      "Photo gallery with responsive grid layout",
      "Supabase backend — auth, database, and storage",
      "Fully responsive and mobile-first design",
    ],
    problem:
      "The foundation needed a professional web presence that could accept donations in both local and international currencies while managing their content independently.",
    solution:
      "Built a full-stack platform with a live Paystack integration, a custom admin dashboard, and a Supabase backend — giving the team full control without needing a developer for updates.",
  },
  {
    id: 2,
    title: "Weather Now",
    description:
      "A minimal weather PWA that lets users search any city and instantly view real-time conditions. Features speech-to-text search, animated backgrounds, city comparison, unit switching, and full offline support.",
    image: "/images/weatherapp.png",
    liveUrl: "https://weatherhaapp.netlify.app/",
    githubUrl: "",
    tags: ["React", "Tailwind CSS", "Weather API", "PWA", "Speech API"],
    category: "Frontend",
    featured: true,
    features: [
      "Search weather by city name or voice input",
      "Real-time weather data with animated backgrounds",
      "Unit switching — °C and °F",
      "City comparison side by side",
      "Fully responsive and mobile-first",
      "PWA — installable, works offline",
    ],
    problem:
      "Users need quick, distraction-free access to accurate weather without bloated interfaces.",
    solution:
      "Built a fast-loading PWA with voice search and animated visuals that make the experience feel native and alive.",
  },
  {
    id: 3,
    title: "Servly Marketplace",
    description:
      "A service marketplace platform connecting customers with local service providers. Built with a focus on customer acquisition, waitlist flow, and clean UX.",
    image: "/images/servly.png",
    liveUrl: "https://servly-ruby.vercel.app/",
    githubUrl: "",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Full-Stack",
    featured: true,
    features: [
      "Service provider listing and discovery",
      "Customer waitlist and onboarding flow",
      "Clean, conversion-focused landing page",
      "Role-based structure for customers and providers",
      "PostgreSQL database with Node.js backend",
    ],
    problem:
      "Local service providers in Nigeria have no reliable platform to reach customers, and customers have no trusted way to find vetted local help.",
    solution:
      "Built a marketplace MVP focused on fast customer acquisition — clean UX, waitlist flow, and a provider listing system designed to scale.",
  },

  {
    id: 4,
    title: "First Portfolio",
    description:
      "One of my early projects — built as part of my first portfolio to practice real-world React, tailwind, and UI structure.",
    image: "/images/project4.png",
    liveUrl: "https://bauzytech.netlify.app/",
    githubUrl: "",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Frontend Mentors",
    features: [
      "React-based UI structure and component design",
      "nothing to be wowed about",
    ],
    problem:
      "At the time, I was still learning how to structure frontend applications.",
    solution:
      "Built this project to strengthen my understanding of react+tailwind",
  },
  {
    id: 5,
    title: "E-commerce Frontend Project",
    description:
      "A frontend-only e-commerce UI built to practice product layouts, state handling, and responsive design with React and Tailwind.",
    image: "/images/project2.png",
    liveUrl: "https://firstecomm.netlify.app",
    githubUrl: "",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend Mentors",
    features: [
      "Product listing UI and layout design",
      "Basic cart interaction logic",
      "Responsive design across devices",
    ],
    problem:
      "I wanted to understand how real e-commerce interfaces are structured and how product flows work on the frontend.",
    solution:
      "Built a UI-focused e-commerce clone to practice component structure, layout systems, and state management basics.",
  },

  {
    id: 6,
    title: "Landing Page Practice Project",
    description:
      "A simple landing page built to practice modern UI structure, spacing, and responsive design using React and Tailwind.",
    image: "/images/project3.png",
    liveUrl: "https://bauxite2nd.netlify.app",
    githubUrl: "",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend Mentors",
    features: [
      "Hero section and structured layout",
      "Responsive design implementation",
      "Reusable UI components",
    ],
    problem:
      "I needed to improve my ability to build clean, structured landing pages from scratch.",
    solution:
      "Recreated a modern landing page layout to strengthen my understanding of spacing, hierarchy, and responsiveness.",
  },

  {
    id: 7,
    title: "Contact Form Practice Project",
    description:
      "A frontend contact form built as a practice project to understand form handling, validation, and UI states.",
    image: "/images/project1.png",
    liveUrl: "https://bauxitecontactform.netlify.app",
    githubUrl: "",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend Mentors",
    features: [
      "Form input handling and validation",
      "Basic UI feedback states",
      "Clean and accessible form design",
    ],
    problem:
      "I was still learning how forms work in React and how to manage user input properly.",
    solution:
      "Built a simple contact form to practice controlled inputs, validation, and user interaction handling.",
  },
];

// Filter categories for the projects page
const projectCategories = [
  "All",
  "Full-Stack",
  "software",
  "Frontend",
  "Frontend Mentors",
  "QA",
  "Data",
  "Security",
];

export { menuItems, words, whatIDoItems, icons, projects, projectCategories };
