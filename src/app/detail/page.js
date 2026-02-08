"use client";

import SkillSection from "../components/sections/Skills";
import ExperienceSection from "../components/sections/Experience";
import ProjectSection from "../components/sections/Projects";
import ActivitySection from "../components/sections/Activities";

export default function Detail() {
  const skills = {
    Programming: {
      python: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        title: "Python",
        level: "Advanced",
      },
      javascript: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        title: "JavaScript",
        level: "Advanced",
      },
      typescript: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        title: "TypeScript",
        level: "Intermediate",
      },
      csharp: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        title: "C#",
        level: "Intermediate",
      },
      cpp: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        title: "C++",
        level: "Beginner",
      },
      c: {
        logoUrl:
          "https://icongr.am/devicon/c-original.svg?size=128&color=ffffff",
        title: "C",
        level: "Beginner",
      },
      cembedded: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
        title: "C Embedded ",
        level: "Beginner",
      },
    },

    Frontend: {
      html: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        title: "HTML",
        level: "Advanced",
      },
      css: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        title: "CSS",
        level: "Advanced",
      },
      bootstrap: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        title: "Bootstrap",
        level: "Advanced",
      },
      tailwind: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        title: "Tailwind",
        level: "Advanced",
      },
      sass: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        title: "Sass",
        level: "Intermediate",
      },
      angular: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
        title: "Angular",
        level: "Intermediate",
      },
      primeng: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/primeng/primeng-original.svg",
        title: "PrimeNG",
        level: "Beginner",
      },
      nextjs: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        title: "NextJS",
        level: "Beginner",
      },
      react: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        title: "React",
        level: "Beginner",
      },
      material_ui: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
        title: "Material UI",
        level: "Beginner",
      },
    },

    Backend: {
      dotnetcore: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        title: ".NET Core",
        level: "Advanced",
      },
      fast_api: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        title: "FastAPI",
        level: "Intermediate",
      },
      nodejs: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
        title: "Node.js",
        level: "Beginner",
      },
      express: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        title: "Express",
        level: "Beginner",
      },
      supabase: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
        title: "Supabase",
        level: "Beginner",
      },
    },

    Database: {
      sql_server: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        title: "SQL Server",
        level: "Advanced",
      },
      progresql: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        title: "ProgreSQL",
        level: "Advanced",
      },
      my_sql: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        title: "My SQL",
        level: "Intermediate",
      },
      mongodb: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        title: "MongoDB",
        level: "Beginner",
      },
      redis: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        title: "Redis",
        level: "Beginner",
      },
    },

    DevOps: {
      linux: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        title: "Linux",
        level: "Advanced",
      },
      git: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        title: "Git",
        level: "Advanced",
      },
      docker: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
        title: "Docker",
        level: "Intermediate",
      },
      kubernetes: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        title: "Kubernetes",
        level: "Intermediate",
      },
      aws: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        title: "AWS",
        level: "Intermediate",
      },
      google_cloud: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        title: "Google Cloud",
        level: "Intermediate",
      },
      jenkins: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
        title: "Jenkins",
        level: "Intermediate",
      },
      github_actions: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        title: "GitHub Actions",
        level: "Beginner",
      },
      vercel: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        title: "Vercel",
        level: "Beginner",
      },
      terraform: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
        title: "Terraform",
        level: "Beginner",
      },
      ansible: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
        title: "Ansible",
        level: "Beginner",
      },
    },

    Others: {
      figma: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        title: "Figma",
        level: "Intermediate",
      },
      adk: {
        logoUrl:
          "https://cdn.hub.central.dynatrace.com/hub/console/drafts/45/logo/agent-development-kit-icon.png",
        title: "Agent Development Kit",
        level: "Intermediate",
      },
      n8n: {
        logoUrl:
          "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/n8n-color.png",
        title: "n8n",
        level: "Intermediate",
      },
      jira: {
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
        title: "Jira",
        level: "Beginner",
      },
      arduino: {
        logoUrl: "https://icon.icepanel.io/Technology/svg/Arduino.svg",
        title: "Arduino",
        level: "Beginner",
      },
      stm32: {
        logoUrl:
          "https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/com.st.STM32CubeIDE.png",
        title: "STM32",
        level: "Beginner",
      },
    },
  };

  const experiences = {
    internship1: {
      position: "Fullstack Developer Intern",
      company: "Gofive Co.,Ltd.",
      address: "Bangkok, Thailand",
      duration: "Apr 2025 - Jun 2025",
      details: [],
    },
    freelance1: {
      position: "Backend Developer Freelance",
      company: "MojiTown Co.,Ltd.",
      address: "Remote",
      duration: "Aug 2025 - Oct 2025",
      details: [],
    },
    internship2: {
      position: "DevOps Engineer Intern",
      company: "Blendata Co.,Ltd.",
      address: "Bangkok, Thailand",
      duration: "Jan 2026 - Apr 2026",
      details: []
    }
  };

  const projects = {
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
        "Basecamp Clone Website - a Project management web application, As a part of Object Oriented Programming College Course to learn about OOP concept. Built Frontend with pure HTML, CSS & Javascript and Built Backend with Python FastAPI and This web application did not connect to the Database.",
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
        "JOINHUB website built with .NET Core MVC and MySQL As a part of web application development college course Built web application for Beginner CRUD, join, search, filter activities, notifications & authentication.",
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

  const activities = {
    activity1: {
      title: "42Bangkok",
      description:
        "Participated in the Discovery Piscine event by 42Bangkok, completing various coding challenges and projects to enhance my programming skills.",
      duration: "July 2023",
    },
  };

  return (
    <>
      <main className="min-h-screen">
        <SkillSection skills={skills} />

        <ExperienceSection experiences={experiences} />

        <ProjectSection projects={projects} />

        <ActivitySection activities={activities} />
      </main>
    </>
  );
}
