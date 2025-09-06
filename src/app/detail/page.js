import SkillSection from "../components/sections/Skills";
import EducationSection from "../components/sections/Education";
import ProjectSection from "../components/sections/Projects";

export default function Detail() {
  var skills = {
    programming_skills: {
      python: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        title: "Python",
        progress: 80,
      },
      csharp: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        title: "C#",
        progress: 70,
      },
      javascript: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        title: "JavaScript",
        progress: 70,
      },
      typescript: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        title: "TypeScript",
        progress: 60,
      },
      c: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        title: "C",
        progress: 50,
      },
      cpp: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        title: "C++",
        progress: 50,
      },
    },

    frontend_skills: {
      html: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        title: "HTML",
        progress: 80,
      },
      css: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        title: "CSS",
        progress: 80,
      },
      sass: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        title: "Sass",
        progress: 60,
      },
      ejs: {
        logoUrl:
          "https://img.icons8.com/?size=100&id=Pxe6MGswB8pX&format=png&color=000000",
        title: "EJS",
        progress: 60,
      },
      angular: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
        title: "Angular",
        progress: 60,
      },
      nextjs: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        title: "NextJS",
        progress: 50,
      },
      react: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        title: "React",
        progress: 50,
      },
      bootstrap: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        title: "Bootstrap",
        progress: 80,
      },
      tailwind: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        title: "Tailwind",
        progress: 80,
      },
    },

    backend_skills: {
      nodejs: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
        title: "Node.js",
        progress: 80,
      },
      dotnetcore: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        title: ".NET Core",
        progress: 80,
      },
      fast_api: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        title: "FastAPI",
        progress: 50,
      },
    },

    database_skills: {
      sql_server: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        title: "SQL Server",
        progress: 70,
      },
      my_sql: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        title: "My SQL",
        progress: 70,
      },
      progresql: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        title: "ProgreSQL",
        progress: 70,
      },
      mongodb: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        title: "MongoDB",
        progress: 40,
      },
      redis: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        title: "Redis",
        progress: 40,
      },
    },

    devops_skills: {
      linux: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        title: "Linux",
        progress: 70,
      },
      git: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        title: "Git",
        progress: 70,
      },
      docker: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
        title: "Docker",
        progress: 60,
      },
      kubernetes: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        title: "Kubernetes",
        progress: 50,
      },
      google_cloud: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        title: "Google Cloud",
        progress: 50,
      },
      vercel: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        title: "Vercel",
        progress: 50,
      },
      github_actions: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        title: "GitHub Actions",
        progress: 50,
      },
    },

    others: {
      figma: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        title: "Figma",
        progress: 70,
      },
      n8n: {
        logoUrl:
          "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/n8n-color.png",
        title: "n8n",
        progress: 60,
      },
      jira: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
        title: "Jira",
        progress: 50,
      },
    },
  };

  var education = {
    pibul: {
      name: "Pibulwitthayalai School, Lopburi",
      program: "Science - Math General Program",
      gpax: 3.75,
      duration: "2018 - 2021",
      detail:
        "Pibulwitthayalai School is the first and only large special high school of the Departmentof General Education in the region. Under the jurisdiction of the Singburi Secondary Educational Service Area Office, Ang Thong, Area 5, Office of the Basic Education Commission. Ministry of Education It has the status of being a school in Lopburi Province. Located at 777 Narai Maharat Road. Lopburi Municipality, Tha Hin Subdistrict, Mueang Lopburi District Lopburi Province",
      imageUrl: "/images/school/pibul.jpg",
    },
    kmitl: {
      name: "King Mongkut's Institute of Technology Ladkrabang",
      program: "B. Engineering (Computer Engineering)",
      gpax: 3.3,
      duration: "Expected 2026",
      detail:
        "King Mongkut's Institute of Technology Ladkrabang(KMITL or KMIT Ladkrabang for short) is a research and educational institution in Thailand. It is situated in Lat Krabang District, Bangkok approximately 30 km east of the city center. The university consists of nine faculties: engineering, architecture, science, industrial education and technology, agricultural technology, information technology, food industry, liberal arts, and medicine.",
      imageUrl: "/images/school/kmitl.jpg",
    },
  };

  var projects = {
    project1: {
      projectImage: "/images/project/project1.png",
      projectTitle: "Book Notes",
      projectDescription:
        "Book Notes website built with NodeJS and PostgreSQL as a part of web development udemy course, Built web application for add, edit, view, delete and sort book notes.",
      tags: ["Fullstack", "Node.js", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      webUrl:
        "https://www.canva.com/design/DAGIePc92w4/9RExfx_wFy3O4-wk7HwDfg/edit?utm_content=DAGIePc92w4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      githubUrl: "https://github.com/AlabicaCoff/Book-Notes",
    },
    project5: {
      projectImage: "/images/project/project5.png",
      projectTitle: "My Portfolio",
      projectDescription:
        "My portfolio website, as a part of the Discovery Piscine event by 42Bangkok. Built with pure HTML, CSS and JavaScript",
      tags: ["HTML", "CSS", "JavaScript", "42Bangkok", "KMITL"],
      webUrl: "https://alabicacoff.github.io/myportfolio/tpinthu.html",
      githubUrl: "https://github.com/AlabicaCoff/myportfolio",
    },
    project3: {
      projectImage: "/images/project/project3.png",
      projectTitle: "WokFood",
      projectDescription:
        "Web application for exploring continental foods. Built web application for getting data from Webcrawler with Regular expression lib of Python. Took responsibilities for feature Exporting to CSV file",
      tags: ["Frontend", "TypeScript", "Nextjs", "React"],
      webUrl: "https://wok-food.vercel.app/",
      githubUrl: "https://github.com/chollsak/WokFood",
    },
    project4: {
      projectImage: "/images/project/project4.png",
      projectTitle: "CaseBamp",
      projectDescription:
        "Basecamp Clone Website - a Project management web application, As a part of Object Oriented Programming College Course to learn about OOP concept. Built frontend with pure HTML, CSS & Javascript and Built Backend with Python FastAPI and This web application did not connect to the database.",
      tags: [
        "Fullstack",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "FastAPI",
        "OOP",
      ],
      webUrl: "https://wok-food.vercel.app/",
      githubUrl: "https://github.com/chollsak/WokFood",
    },
    project2: {
      projectImage: "/images/project/project2.png",
      projectTitle: "JOINHUB",
      projectDescription:
        "JOINHUB website built with .NET Core MVC and MySQL As a part of web application development college course Built web application for basic CRUD, join, search, filter activities, notifications & authentication.",
      tags: ["Backend", "C#", ".NET Core MVC", "MySQL"],
      webUrl: "https://bit.ly/4etgQlh",
      githubUrl: "https://github.com/AlabicaCoff/JOINHUB",
    },
    project6: {
      projectImage: "/images/project/project6.png",
      projectTitle: "YevOps",
      projectDescription:
        "YevOps website was created as a platform to connect tailoring shops with customers seeking tailoring services using website development process. This includes Requirements, User Stories, BPMN, UI/UX, Backlog, Sprint Backlog, Test Cases, ERD, and UML, as well as various website presentation files.",
      tags: ["Frontend", "Node.js", "React", "Software Development"],
      webUrl:
        "https://www.canva.com/design/DAGVByJXRGI/Q8jrP6qLW57ftW5K7n8thw/edit?utm_content=DAGVByJXRGI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      githubUrl: "https://github.com/teeruth09/YevOps",
    },
  };

  return (
    <>
      <main className="min-h-screen">
        <SkillSection skills={skills}/>

        <EducationSection education={education}/>

        <ProjectSection projects={projects}/>
      </main>
    </>
  );
}
