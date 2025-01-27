import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  PhoneOutgoing,
} from 'lucide-react';
import { title } from 'process';

export const socialNetworks = [
  {
    id: 1,
    logo: <Github size={30} strokeWidth={1} />,
    src: 'https://github.com/kennethdevpc',
    title: 'Github',
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: 'https://www.linkedin.com/in/kenneth-e-pc-9a5b02272/',
    title: 'Linkedin',
  },
  {
    id: 3,
    logo: <PhoneOutgoing size={30} strokeWidth={1} />,
    src: 'https://wa.link/yuij7m',
    title: 'Phone',
  },

  {
    id: 5,
    logo: <Github size={30} strokeWidth={1} />,
    src: 'https://github.com/kenpulicorre',
    title: 'Github 2',
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: 'Home',
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: '/',
  },
  {
    id: 2,
    title: 'Experience',
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: '/about-me',
  },
  {
    id: 3,
    title: 'Technologies',
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: '/services',
  },
  {
    id: 4,
    title: 'Projects',
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: '/portfolio',
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: 'Sofware Developer',
    subtitle: 'Globaldigiops (Fulltime)',
    description:
      'I handled 10 to 15 tickets per week, where I developed functional components and migrated systems to modern frameworks like React, utilizing TypeScript, JavaScript, and Node.js. I have become proficient in using CMS for constructing and deploying responsive web content. In addition, I gained significant experience working with a diverse, multicultural team, including colleagues from Canada, the UK, and Georgia, which greatly enhanced my communication and collaboration skills.',
    date: 'NOV 2024 ',
    technologies: ' TypeScript | JavaScript | Node.js | React | CMS | Jira | GitHub |scrum',
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    subtitle: 'OpenCode (Fulltime && Freelancer)',
    description:
      'Handled 20 to 22 tickets per month using PHP, Node.js, and TypeScript (Laravel, React). Worked as a Fullstack Developer under the SCRUM agile methodology, developing user stories based on requirements. Contributed to 4 projects focused on managing social subsidies for vulnerable populations, leveraging the technologies mentioned. Additionally, conducted research on tools and libraries to generate Excel, Word, and PDF documents, utilizing the MVC architecture.',
    date: 'DEC 2023',
    technologies:
      ' PHP | Laravel | angular |TypeScript | JavaScript | Node.js | GitHub |scrum | MySQL | vuejs (4 months)',
  },
  {
    id: 3,
    title: 'Full-Stack Developer',
    subtitle: 'Dashfleet (contract)',
    description:
      'I contributed to a public transportation monitoring project using PHP, TypeScript, JavaScript, and Docker (Laravel, Angular), focused on tracking public transportation vehicles, determining arrival times and their location. This project was one of my favorites, as it was my first experience working with PHP in a development team. I had to face learning new technologies like Laravel and Angular, and although I was familiar with programming logic, I had never worked with PHP. I spent hours learning and perfecting my skills to collaborate effectively with the team. I am grateful for this opportunity and will always remember it.',
    date: 'DEC 2022',
    technologies:
      'PHP | Laravel |JavaScript | React | Redux | Angular |  Node.js | Express | Docker | Sequelize | PostgreSQL | MongoDB | Jira | GitHub | Bitbucket',
  },
  {
    id: 4,
    title: 'E-Commerce Developer',
    subtitle: 'Work From Home/ Fresher & Experience Jobs (Freelancer)',
    description:
      'In this e-commerce project, I worked as a JavaScript developer, using React, Node.js, and JavaScript. I contributed to the development from the mockups and the creation of individual pages. Additionally, I utilized technologies such as PostgreSQL, Sequelize, socket.io, CSS, and HTML to ensure a functional and efficient backend, integrating React-Redux for state management.',
    date: 'Mar 2022',
    technologies:
      'JavaScript | React | Node.js | PostgreSQL | Sequelize | socket.io | CSS | HTML | React-Redux',
  },
  {
    id: 5,
    title: 'Industrial Jobs',
    subtitle: 'Café Aguila Roja | B. Altman | Surtiaceites',
    description:
      'My professional career also includes extensive experience in the industry (2019-2021). I began with corrective and preventive maintenance, microprocessor programming (C++), and communication with actuators and sensors. I worked with technologies such as SCADA systems, Siemens PLCs, and wired logic programming. I actively participated in the innovation of machinery to optimize production and developed metal-mechanical parts using milling machines and lathes. Additionally, I was responsible for the installation and assembly of electrical, mechanical, and control systems. I managed the search for maintenance equipment and collaborated in the planning and scheduling of machinery.',
    date: 'Dec 2021',
    technologies:
      'SCADA | Wonderware INTOUCH | PLC Siemens, TIA Portal | Siemens S7| C++ | STM32  ',
  },
  {
    id: 6,
    title: 'Specialization in Industrial Automation && Master Degree coursework ',
    subtitle: 'UNIVALLE -university',
    description:
      'During this period, what I enjoyed the most was programming industrial processes, especially SCADA systems and their implementation in distributed systems. I applied industrial programming logic and gained valuable knowledge in instrumentation and control, including tuning equipment.I also started my master`s degree during this time (currently looking for a Software development project). Among the courses I completed, the one I enjoyed the most was "Fundamentals of Distributed Systems." Through this course, I gained experience with various technologies like Docker, Git, Vagrant, and Github, which sparked my interest in programming.',
    date: 'JUL 2021',
  },
  {
    id: 7,
    title: 'Bachelor`s in Mechatronic Engineering',
    subtitle: 'UAO-University',
    description:
      'Mechatronic Engineer, focused on industrial control and programming: During my university studies, I actively participated in various activities, such as assisting in research groups and participating in projects aimed at developing academic knowledge. These experiences allowed me to delve into key areas such as automation and industrial control. Additionally, I developed skills in programming languages and industrial technologies, including:Java,C,C++, PLC, Ladder. I was also part of groups related to the arts and the engineering seedbed, which allowed me to complement my technical education with a multidisciplinary approach.',
    date: 'DIC 2019',
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 5,
    text: 'Years of Work Experience',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 2,
    text: 'Sofware Development Experience',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 2,
    endCounter: 6,
    text: 'Software Development Projects in Companies',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 8,
    text: 'personal Software Development Projects',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 4,
    endCounter: 2,
    text: 'University Degrees Completed',
    lineRight: true,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: 'Principal Programming Languages	used',
    description: 'JavaScript, TypeScript, PHP,',
  },
  {
    icon: <Computer />,
    title: 'Databases',
    description: '- SQL: PostgreSQL, MySQL.- NoSQL: MongoDB',
  },
  {
    icon: <Book />,
    title: 'DevOps && Versioning ',
    description: 'Git, Docker (basic), Vagrant (basic)',
  },
  {
    icon: <Rocket />,
    title: 'Other Technical Skills	',
    description: 'HTML & CSS, SOLID principles (basic)',
  },
  {
    icon: <Crop />,
    title: 'Backend Development	',
    description:
      'Languages and Frameworks: Node.js (javascript/typescript), PHP (Laravel, Express.js). - ORMs and Libraries: Sequelize,Eloquent ',
  },
  {
    icon: <Pencil />,
    title: 'Frontend ',
    description:
      '- Frameworks and Libraries: React.js, Next.js, Angular.   State Management: React Redux, React Query, Context API, Reducers',
  },
  {
    icon: <Computer />,
    title: 'Other Frontend Tools used',
    description:
      'React Forms, Chakra UI, Swiper, Lucide-react, React Motion, Type Animation, CountUp, Particles.js, Bootstrap, Tailwind,',
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: 'Project Dashfleet',
    image: 'https://dashfleet.com/assets/img/recent-work/9.png',
    urlGithub: 'https://dashfleet.com/assets/img/recent-work/9.png',
    urlDemo: 'https://dashfleet.com/',
    description:
      'public transportation monitoring project. Technologies: PHP | Laravel |JavaScript | React | Redux | Angular | Node.js | Express | Docker | Sequelize | PostgreSQL | MongoDB | Jira | GitHub | Bitbucket',
  },
  {
    id: 11,
    title: 'Verify Health claims(in progress...)',
    image: '/influencerApp.png',
    urlGithub: 'https://github.com/kennethdevpc/verify-influencers',
    urlDemo: 'https://verify-influencers-hci5.onrender.com/',
    description:
      'A cutting-edge admin panel leveraging AI to validate health claims from influencers, ensuring transparency and credibility. Technologies: Node.js | React | TypeScript | MongoDB | Twitter API | OpenAI API',
  },
  {
    id: 2,
    title: 'Chat App socket.io',
    image: '/chatapp2.png',
    urlGithub: 'https://github.com/kennethdevpc/chatAppMERN',
    urlDemo: 'https://chatappmern-23ko.onrender.com/',
    description:
      'A cutting-edge system built for real-time chat, featuring seamless user authentication, dynamic message handling, and state-of-the-art design practices. Technologies: Node.js | React | MongoDB | Socket.IO | DaisyUI | Zustand',
  },
  {
    id: 10,
    title: 'Employee Management',
    image: '/crudEmploye.png',
    urlGithub: 'https://github.com/kennethdevpc/php_nexura_test',
    urlDemo: '/crudEmploye.png',
    description:
      'A system designed for managing employee records, including features for authentication and user management. Technologies:PHP | Laravel |JavaScript | node.js | Eloquent | MySQL | GitHub ',
  },

  {
    id: 3,
    title: 'Task Management',
    image: '/taskApp.png',
    urlGithub: 'https://github.com/kennethdevpc/nodeMongoodb',
    urlDemo: 'https://notes-app-mongo.onrender.com/',
    description:
      'A task management app with note-taking and login functionality, built using MongoDB, Express, React, and Node.js. Technologies: MERN | Handlebars | JavaScript | GitHub',
  },
  {
    id: 4,
    title: 'Cofee APP',
    image: '/cafeteria.png',
    urlGithub: 'https://github.com/kennethdevpc/cafeteria',
    urlDemo: '/cafeteria.png',
    description:
      'A product management platform for a café to handle inventory, CRUD operations, Using database queries for analytics. Technologies: Laravel | Blade | JavaScript | PHP | MySQL.',
  },
  {
    id: 5,
    title: 'Weather App',
    image: '/weatherapp.png',
    urlGithub: 'https://github.com/kennethdevpc/weatherApp',
    urlDemo: 'https://weatherapp-kennethdevpc.netlify.app/',
    description:
      'A one-page weather application showcasing time characteristics through API consumption. Built with JavaScript | React | Redux for efficient state management.',
  },
  {
    id: 6,
    title: 'TextReverse',
    image: '/textReverse.png',
    urlGithub: 'https://github.com/kenpulicorre/text_reverse',
    urlDemo: 'https://kenpucoapp1.herokuapp.com/',
    description:
      'A REST API that reverses text input and responds with the inverted version. Technologies: React, Redux, Node.js, Express, Sequelize, PostgreSQL, Bootstrap',
  },
  {
    id: 7,
    title: 'SHOOP APP',
    image: '/shoop.png',
    urlGithub: 'https://github.com/kennethdevpc/miniMarketReact',
    urlDemo: 'https://wonderful-bean.surge.sh/',
    description:
      'A React shopping cart application enabling users to browse products, manage their cart, and complete a seamless checkout process. Technologies: React | Node.js | JavaScript | GitHub',
  },
  {
    id: 8,
    title: 'Country APP',
    image: '/countries.png',
    urlGithub: 'https://github.com/kenpulicorre/React_node_apiCount',
    urlDemo: '/countries.png',
    description:
      'React App that fetches country data from an API and stores it in PostgreSQL with Node.js, Focused on practicing API integration and database management. Technologies:  Express, Sequelize.',
  },
  {
    id: 9,
    title: 'Pokemon APP',
    image: '/pokemon1.png',
    urlGithub: 'https://github.com/kenpulicorre/React_node_apiPok',
    urlDemo: '/pokemon1.png',
    description:
      'React App that fetches Pokemon data from an API and stores it in PostgreSQL with Node.js, Focused on practicing API integration and database management. Technologies:  Express, Sequelize.',
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: 'George Snow',
    description:
      '¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!',
    imageUrl: '/profile1.png',
  },
  {
    id: 2,
    name: 'Juan Pérez',
    description:
      'Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!',
    imageUrl: '/profile2.png',
  },
  {
    id: 3,
    name: 'María García',
    description:
      'Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!',
    imageUrl: '/profile3.png',
  },
  {
    id: 4,
    name: 'Laura Snow',
    description:
      '¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.',
    imageUrl: '/profile4.png',
  },
  {
    id: 5,
    name: 'Carlos Sánchez',
    description:
      'Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!',
    imageUrl: '/profile5.png',
  },
  {
    id: 6,
    name: 'Antonio Martínez',
    description:
      '¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!',
    imageUrl: '/profile6.png',
  },
];
