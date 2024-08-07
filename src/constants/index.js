import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  arrow,
  cc,
  navy,
  piqum,
  threejs,
  logo,
  KSG,
  SH,
  dynasty,
  python,
  postg,
  scipy,
  seaborn,
  numpy,
  matplotlib,
  powerBI,
  tableau,
  excel,
  kw,
  datastuff,
  macro,
  reading,
  DYNASTY1,
  art,
} from "../assets";
import Piqum from "../pages/Resume";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development Skills",
    skills:
      "HTML5, CSS, Javascript, Tailwind, styled-components, Reactjs, Django, Vitejs, nodejs, mondoDB ",
    pics: [reactjs, html, css, javascript, tailwind, mongodb, nodejs, redux],
  },

  {
    title: "Data Engineering Skills",
    skills: "PostgreSQL, Python, PowerBI, Tableau, PySpark, Jupyter",
    pics: [python, postg, powerBI, tableau, scipy, numpy, matplotlib, seaborn],
  },
  {
    title: "Casino Game Design Skills",
    skills: "Statisics, Probability, Microsoft Excel, Python",
    pics: [javascript, html, excel, python, postg],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "SQL",
    icon: postg,
  },
];

const experiences = [
  {
    title: "Creator",
    company_name: "DFS Props",
    icon: DYNASTY1,
    iconBg: "#383E56",
    date: "June 2023 - Current",
    points: [
      "Oversaw pre-game and in-play projections for various sports, including NFL, NBA, NHL, and college sports, enhancing user engagement and accuracy.",
      "Created and managed diverse contest predictions for Pick’em games, significantly increasing user traffic to over 150 unique vistors a day.",
      "Launched projections for new sports, expanding the platform’s offerings and user base.",
      "Implemented statistical models to enhance betting accuracy and manage risks effectively.",
      "Conducted market analysis to identify betting patterns and develop effective strategies.",
      "Maintained PostgreSQL databases and created hundreds of complex queries for key features.",
      "Site built using NextJS, Tailwind, Python, and PostgreSQL.",
    ],
  },
  {
    title: "Basketball / Football Scout",
    company_name: "Scounting Heroes",
    icon: SH,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Current",
    points: [
      "Managed real-time data entry for college basketball and football games, ensuring accuracy and attention to detail.",
      "Collaborated with the QA team for precise and timely updates, highlighting teamwork and commitment to quality.",
      "Utilized specialized software for data input and analysis, demonstrating adaptability to various technology platforms."
    ],
  },
  {
    title: "Game Designer",
    company_name: "KingSize Games",
    icon: KSG,
    iconBg: "#383E56",
    date: "Jan 2022 - Current",
    points: [
      "Designed and developed an art asset management system using Flask and PostgreSQL to efficiently manage and organize game assets, reducing asset search time significantly and integrating version control mechanisms.",
      "Designed and developed innovative casino games using HTML5 and JavaScript, incorporating cutting-edge features and ensuring optimal player engagement and retention.",
      "Utilized Python to build simulations and test game mechanics, refining gameplay and balancing payout ratios to optimize revenue and player experience.",
      "Collaborated with cross-functional teams including artists, sound designers, and QA testers to ensure seamless integration of game assets and smooth game flow.",
      "Applied statistical analysis and probability theory to game design, to create games with fair and profitable payout structures.",
    ],
  },
  {
    title: "Freelance React.js Developer",
    company_name: "",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Current",
    points: [
      "Developed and maintained multiple React-based applications for clients using industry best practices and standards.",
      "Worked with clients to understand their business needs and goals, and translated them into technical requirements and project plans.",
      "Implemented responsive and mobile-first designs using React and CSS frameworks like Styled-Components or TailwindCSS.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Clear Capital",
    icon: cc,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Developed custom python automation scripts to improve efficiency and eliminate human error from daily, weekly, and monthly reports.",
      "Performed detailed performance analysis on our independent appraiser panel which led to more efficient turn times and a reduction in revisions.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Arrow Electronics",
    icon: arrow,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Aug 2022",
    points: [
      "Developed custom SQL scripts to improve the database efficiency,reduce data load time and enhance performance.",
      "Perform detailed analysis of key trends and present findings to senior management.",
      "Deliver technical expertise in data storage structures and data mining/cleansing.",
    ],
  },
  {
    title: "Air Traffic Controller",
    company_name: "United States Navy",
    icon: navy,
    iconBg: "#383E56",
    date: "Feb 2011 - Jan 2018",
    points: [
      "Wrote SQL queries to obtain data pertaining to flight operations.",
      "Oversaw routine operations, including planning / briefing personnel on missions, documenting / processing classified materials, identifying /reporting data entry errors, processing / distributing flight progress data, and maintaining security and data integrity of databases.",
      "Acquired five different analytical air traffic control qualifications and trained more than twenty sailors in those disciplines.",
    ],
  },
];

const projects = [
  {
    name: "Casino Game Art Asset Management System",
    description:
      "An app I designed and built for KingSize Games to help manage and organize game assets. The app was built using Flask and PostgreSQL. It was designed to reduce asset search time significantly and integrate version control mechanisms.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "blue-text-gradient",
      },
    ],
    image: art,
    source_code_link: "https://youtu.be/Auq6EJaoaJc",
    website_link: "https://youtu.be/Auq6EJaoaJc",
  },
  {
    name: "DFS Props",
    description:
      "My current project. A sports analytics website where user can do in-depth research on Daily Fantasy Sports player props. The site also posts weekly predictions using various machine learning models such as linear regression and random forests. Site is currently degraded due to api issues but the code is still available on github.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: dynasty,
    source_code_link: "https://github.com/Fishcuit/sports-blog-copy",
    website_link: "https://dfsprops.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "Portfolio website created using React, Tailwind, and Threejs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: kw,
    source_code_link: "https://github.com/",
    website_link: "https://keithwilcox.io",
  },
  {
    name: "Piqum iGaming",
    description:
      "Please contact me to view. Developed game prototypes for an innovative series of i-games called 'Piqum.' These prototypes, built using HTML5, JavaScript, and CSS. They are fully functional and playable, providing a comprehensive user experience.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: piqum,
    source_code_link: "https://github.com/",
    website_link: "",
  },

  {
    name: "Poker Analysis",
    description:
      "Developed and maintained simulation engines in Python to evaluate and analyze various features in our game designs and adapted them to work with streamlit.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "data analyis",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: datastuff,
    source_code_link: "https://github.com/Fishcuit/PiQum_stuff",
    website_link: "https://piqumpoker.streamlit.app/",
  },
  {
    name: "Macro Calculator",
    description:
      "Developed a macro calculator for a company called Black Iron Nutrition.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: macro,
    source_code_link: "https://github.com/Fishcuit/macro_calc",
    website_link: "https://www.blackironnutrition.com/free-macro-calculator",
  },
  {
    name: "Bionic Reading",
    description:
      "I saw this on Linkedin one day and went ahead and built one. The idea is that your eyes scan the first bold letters and your brain automatically completes the word. It is supposed to help you read twice as fast. It didn't really work for me but try it for yourself!",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: reading,
    source_code_link: "https://github.com/Fishcuit/reading_bold",
    website_link: "https://readingbold-production.up.railway.app/",
  },
];

export { services, technologies, experiences, projects };
