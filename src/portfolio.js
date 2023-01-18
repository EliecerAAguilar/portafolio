const settings = {
  isSplash: false, // animacion de inicio
};

//SEO Related settings
const seo = {
  title: "Eliecer Portafolio",
  description: "Desarrolador BackEnd, mejora continua",
  og: {
    title: "Portafolio",
    type: "website",
    url: "https://github.com/EliecerAAguilar",
  },
};

//Home Page
const greeting = {
  title: "Eliecer Aguilar",
  logo_name: "Eliecer Aguilar",
  nickname: "Adrian",
  subTitle:
    "Un desarrollador aplicado, siempre aprendiendo y buscando mejorarse a si mismo",
  resumeLink:
    "https://utpac-my.sharepoint.com/:b:/g/personal/eliecer_aguilar1_utp_ac_pa/EesKPllzHRdNsyjF2gGjVhABlbsc59nGhhJXpPa0qhrvwQ?e=pqSwme",
  portfolio_repository: "https://github.com/elieceraaguilar/portafolio",
  githubProfile: "https://github.com/elieceraaguilar/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/elieceraaguilar/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/elieceraguilar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:elieaguilar91@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/elieceraaguilar/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Stack de desarrollo Web",
      fileName: "FullStackImg",
      skills: [
        "⚡ Conocimiento en HTML, CSS y JAVASCRIPT",
        "⚡ Desarrollo de aplicaciones web con Django, Flask, Javascript",
        "⚡ Creacion de backend por medio de tecnologias como: Django, Flask, FastApi, PostgreSQL, MySQL, MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#2C8EBB",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "cib:java",
          style: {
            color: "#2C8EBB",
          },
        },

        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#2C8EBB",
          },
        },

        {
          skillName: ".NET",
          fontAwesomeClassname: "mdi:dot-net",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "GIT",
          fontAwesomeClassname: "mdi:git",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Infraestructura en la Nube",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experiencia trabajando en multiples plataformas de nube",
        "⚡ Alojamiento y mantenimiento de maquinas virtuales y servicios de bases de datos en la nube",
        "⚡ Lanzamiento de aplicaciones en plataformas SasS",
      ],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#4285F4",
          },
        },

        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/EliecerAAguilar/",
    },

    {
      siteName: "TryHackme",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://tryhackme.com/p/EliecerA",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad Tecnologica de Panama",
      subtitle: "Lic. en ingenieria de sistemas y computacion",
      logo_path: "logo_utp.png",
      alt_name: "utp degree",
      duration: "2016 - 2023",
      descriptions: [
        "⚡ He estudiado el proceso del desarrollo de software",
        "⚡ Ingeniera de softaware, ademas de los conocimientos en robotica y circuitos electronicos",
        "⚡ He participado en multiples investigaciones academicas, ademas de los concursos de investigacion cientifica tanto interno como externos a la Universidad",
      ],
      website_link: "http://www.utp.ac.pa/",
    },
    {
      title: "Instituto Profesional y Tecnico Rio Hato",
      subtitle: "Bachiller en Tecnologia Informatica",
      logo_path: "ipt_rio_hato_logo2.png",
      alt_name: "IPT Rio Hato",
      duration: "2013 - 2015",
      descriptions: [
        "⚡ Tome cursos relacionados a programcion, introduccion a redes y de conocimientos generales",
        "⚡ Participe en el concurso de robotica RoboCupJr como representante de mi provincia",
        "⚡ Realice practicas laborales en el Hotel Marriot Buenaventura, como programa de cooperacion",
      ],
      website_link:
        "https://es-la.facebook.com/InstitutoProfesionalYTecnicoRioHato/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CISCO CCNA",
      subtitle: "CCNA Introduction to Networks",
      logo_path: "ccna-introduction-to-networks.png",
      certificate_link:
        "https://www.credly.com/badges/3d5bcd44-e12f-4f72-8f6e-782309b7986a/public_url",
      alt_name: "Cisco CCNA",
      color_code: "#8C151599",
    },

    {
      title: "Control de versiones con GitLab",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "control_de_versiones_badge.png",
      certificate_link:
        "https://www.credential.net/4dfae915-832f-4e01-a0e4-4144e95cf677",
      alt_name: "control_de_versiones",
      color_code: "#8C151599",
    },
    {
      title: "Desarrollo FrontEnd Serverless",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "DesarrolloFrontEndServerlessBadge.png",
      certificate_link:
        "https://www.credential.net/72caef60-5cbf-4768-8306-9914e35d6fdd",
      alt_name: "Desarrollo FrontEnd Serverless",
      color_code: "#8C151599",
    },

    {
      title: "Groovy para procesamiento en lote",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "Groovy_para_procesamiento_en_lote.png",
      certificate_link:
        "https://www.credential.net/fda65917-5a86-4fe4-882d-29ca1cc2cbc7",
      alt_name: "Groovy para procesamiento en lote",
      color_code: "#8C151599",
    },

    {
      title: "Introducción a Docker",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "Introducción_a_Docker.png",
      certificate_link:
        "https://www.credential.net/b2695697-e8d0-444f-8e2d-c01db10da2cf",
      alt_name: "Introducción a Docker",
      color_code: "#8C151599",
    },
    {
      title: "Introducción a Kafka",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "Introducción_a_Kafka.png",
      certificate_link:
        "https://www.credential.net/b5b1bd3a-74c3-4baf-9a5b-a536a7d5121f",
      alt_name: "Introducción a Kafka",
      color_code: "#8C151599",
    },
    {
      title: "Principios de base de datos MySQL",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "Principios_de_base_de_datos_MySQL.png",
      certificate_link:
        "https://www.credential.net/3e101b48-58a6-4e5f-8f70-ed5a00f504b5",
      alt_name: "Principios de base de datos MySQL",
      color_code: "#8C151599",
    },
    {
      title: "Pruebas automatizadas",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "Pruebas_automatizadas.png",
      certificate_link:
        "https://www.credential.net/f30dfeb8-713b-44eb-a12c-df426e80ba0f",
      alt_name: "Pruebas automatizadas",
      color_code: "#8C151599",
    },
    {
      title: "Prácticas ágiles con Jira",
      subtitle: "Taller nuevas tendencias en desarrollo de sistemas",
      logo_path: "Practicas_agiles_con_Jira.png",
      certificate_link:
        "https://www.credential.net/8ec51b35-8b40-4159-bfda-a6260cc376fd",
      alt_name: "Prácticas ágiles con Jira",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiencia",
  subtitle: "Trabajos, Pasantías y voluntariado",
  description:
    "He trabajado como desarrollador en instituciones publicas y sin fines de lucro (ONG). Estoy haciendo actualmente voluntariado en el area de tecnologia de una ONG. Desarrollo proyectos de forma independiente para satisfacer las necesidades especificas de los clientes.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabajo",
      experiences: [
        {
          title: "Desarrollador Python",
          company: "CEMCIT AIP",
          company_url: "http://cemcit.org.pa/",
          logo_path: "CEMCIT-AIP.png",
          duration: "Oct 2021 - Dec 2021",
          location:
            "Universidad Tecnologica de Panama Campus central Victor Levi Saso",
          description:
            'El Proyecto  "Text Mining on Reported Nutrition Interventions in Panama" ("Extracción de Textos Sobre Intervenciones Nutricionales Reportadas en Panamá")',
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Pasantias",
      experiences: [
        {
          title: "Ninguna Pasantia realizada hasta el momento",
          company: "Ninguna",
          company_url: "#",
          logo_path: "None-img.png",
          duration: "2022 - 2022",
          location: "Ninguna",
          description: "",
          color: "#000000",
        },
      ],
    },
    {
      title: "Voluntariado",
      experiences: [
        {
          title: "Desarrollador Backend",
          company: "Fundacion Ayudinga",
          company_url: "https://ayudinga.org/",
          logo_path: "ayudinga-logo.png",
          duration: "Junio 2022 - presente",
          location:
            "Ciudad del Saber, Calle Evelio Lara, Edificio 137-A, Panamá",
          description:
            "Desarrollador backend con Python, utilizando el framework Flask. Herramientas tecnologicas como Postman & GitLab",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Proyectos",
  description:
    "Mis proyectos hacen uso de una gran variedad de herramientas. Mi mejor experiencia hasta el momento es el haber contribuido en el desarrollo de un servidor web dedicado a presenatar la informacion de las escuelas de Panama.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactarme",
    profile_image_path: "profile_img_eliecer.png",
    description:
      "Estoy disponible en casi todas las redes sociales. Quizas tarde un poco en responder (entre 12 a 48 horas). Puedo ayudar en proyectos que involucren el area de backend, como por ejemplo: bases de datos, APIs, backend frameworks como: Django, Flask, SpringBoot. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Es blog sobre tecnologias las cuales haya utilizado, con la finalidad de compartir mis conocimientos a otras personas; Además de compartir los proyectos en los que este trabajando.",
    link: "https://www.google.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Dirección",
    subtitle: "Ancón, Panamá, Panamá",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/9qgfUv8GBLxe5AFg6",
  },
  phoneSection: {
    title: "Telefono celular",
    subtitle: "+507 66029009",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
