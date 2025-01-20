
import SkillSection from "../components/sections/Skills"
import EducationSection from '../components/sections/Education';
import ProjectSection from "../components/sections/Projects";

export default function Detail() {

  var skills = {
    frontend_skills: {
      html: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        title: "HTML",
        progress: 80,
      },
      css: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        title: "CSS",
        progress: 80,
      },
      javascript: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        title: "JavaScript",
        progress: 70,
      },
      typescript: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        title: "TypeScript",
        progress: 25,
      },
      react: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        title: "React",
        progress: 45,
      },
      bootstrap: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        title: "Bootstrap",
        progress: 70,
      },
      tailwind: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        title: "Tailwind",
        progress: 70,
      },
      MaterialUI: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
        title: "MaterialUI",
        progress: 40,
      }
    },
  
    backend_skills: {
      nodejs: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        title: "Node.js",
        progress: 70,
      },
      dotnetcore: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        title: ".NET Core",
        progress: 50,
      },
      fast_api: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        title: "FastAPI (Python)",
        progress: 30,
      }
    },
  
    database_skills: {
      my_sql: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        title: "My SQL",
        progress: 70,
      },
      progresql: {
        logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        title: "ProgreSQL",
        progress: 70,
      }
    },
  }

  var education = {
    pibul: {
        name: "Pibulwitthayalai School, Lopburi",
        program: "Science - Math General Program",
        gpax: 3.75,
        duration: "2018 - 2021",
        detail: "Pibulwitthayalai School is the first and only large special high school of the Departmentof General Education in the region. Under the jurisdiction of the Singburi Secondary Educational Service Area Office, Ang Thong, Area 5, Office of the Basic Education Commission. Ministry of Education It has the status of being a school in Lopburi Province. Located at 777 Narai Maharat Road. Lopburi Municipality, Tha Hin Subdistrict, Mueang Lopburi District Lopburi Province",
        imageUrl: "/images/school/pibul.jpg"
    },
    kmitl: {
        name: "King Mongkut's Institute of Technology Ladkrabang",
        program: "B. Engineering (Computer Engineering)",
        gpax: 3.30,
        duration: "Expected 2026",
        detail: "King Mongkut's Institute of Technology Ladkrabang(KMITL or KMIT Ladkrabang for short) is a research and educational institution in Thailand. It is situated in Lat Krabang District, Bangkok approximately 30 km east of the city center. The university consists of nine faculties: engineering, architecture, science, industrial education and technology, agricultural technology, information technology, food industry, liberal arts, and medicine.",
        imageUrl: "/images/school/kmitl.jpg"
    }
}

  var projects = {
    project1: {
      projectImage: "/images/project/project1.png",
      projectTitle: "Book Notes",
      projectDescription: "Book Notes website built with NodeJS and PostgreSQL as a part of web development udemy course, Built web application for add, edit, view, delete and sort book notes.",
      tags: ["Node.js", "PostgreSQL", "Fullstack", "JavaScript", "HTML", "CSS"],
      webUrl: "https://www.canva.com/design/DAGIePc92w4/9RExfx_wFy3O4-wk7HwDfg/edit?utm_content=DAGIePc92w4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      githubUrl: "https://github.com/AlabicaCoff/Book-Notes",
    },
    project5: {
      projectImage: "/images/project/project5.png",
      projectTitle: "My Portfolio",
      projectDescription: "My portfolio website, as a part of the Discovery Piscine event by 42Bangkok. Built with pure HTML, CSS and JavaScript",
      tags: ["HTML", "CSS", "JavaScript", "42Bangkok", "KMITL"],
      webUrl: "https://alabicacoff.github.io/myportfolio/tpinthu.html",
      githubUrl: "https://github.com/AlabicaCoff/myportfolio",
    },
    project3: {
      projectImage: "/images/project/project3.png",
      projectTitle: "WokFood",
      projectDescription: "Web application for exploring continental foods. Built web application for getting data from Webcrawler with Regular expression lib of Python. Took responsibilities for feature Exporting to CSV file",
      tags: ["Nextjs", "React", "Frontend", "TypeScript"],
      webUrl: "https://wok-food.vercel.app/",
      githubUrl: "https://github.com/chollsak/WokFood",
    },
    project4: {
      projectImage: "/images/project/project4.png",
      projectTitle: "CaseBamp",
      projectDescription: "Basecamp Clone Website - a Project management web application, As a part of Object Oriented Programming College Course to learn about OOP concept. Built frontend with pure HTML, CSS & Javascript and Built Backend with Python FastAPI and This web application did not connect to the database.",
      tags: ["Python", "HTML", "CSS", "JavaScript", "FastAPI", "OOP", "No Database"],
      webUrl: "https://wok-food.vercel.app/",
      githubUrl: "https://github.com/chollsak/WokFood",
    },
    project2: {
      projectImage: "/images/project/project2.png",
      projectTitle: "JOINHUB",
      projectDescription: "JOINHUB website built with ASP.NET Core MVC and MySQL As a part of web application development college course Built web application for basic CRUD, join, search, filter activities, notifications & authentication.",
      tags: ["ASP.NET Core MVC", "MySQL", "Backend", "C#"],
      webUrl: "https://bit.ly/4etgQlh",
      githubUrl: "https://github.com/AlabicaCoff/JOINHUB",
    },
    project6: {
      projectImage: "/images/project/project6.png",
      projectTitle: "YevOps",
      projectDescription: "YevOps website was created as a platform to connect tailoring shops with customers seeking tailoring services using website development process. This includes Requirements, User Stories, BPMN, UI/UX, Backlog, Sprint Backlog, Test Cases, ERD, and UML, as well as various website presentation files.",
      tags: ["Node.js", "React", "Frontend", "Software Development"],
      webUrl: "https://www.canva.com/design/DAGVByJXRGI/Q8jrP6qLW57ftW5K7n8thw/edit?utm_content=DAGVByJXRGI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      githubUrl: "https://github.com/teeruth09/YevOps",
    },
  }


    return <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">

        <SkillSection skills={ skills } />

        <EducationSection education={ education } />

        <ProjectSection projects={ projects } />

      </main>
    </>
  }