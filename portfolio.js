/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sahan chanuka",
  title: "Hi all, I'm Sahan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Spring boot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11cn3F4bbT5Fs9y14qGzNNxiTI4Iee4h9/view?usp=drive_linkhttps://drive.google.com/file/d/1gzumvU9ufM0xewIz4oJ7LwqmUdFvhGC_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sahanchanuka24",
  linkedin: "https://www.linkedin.com/in/sahan-chanuka-a46816246/",
  gmail: "sahanchanuka90@gmail.com",
  facebook: "https://www.facebook.com/chanu.ka.566",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I design and develop modern web applications with a focus on clean user experiences and robust functionality. I combine creativity with technical skills to build user-friendly interfaces and full-stack systems.",
  skills: [
    emoji(
      "💻 Frontend Development – React, HTML, CSS, JavaScript Responsive, mobile-first design"
    ),
    emoji("🎨 UI/UX Design – Wireframing, prototyping, and crafting modern, intuitive interfaces"),
    emoji(
      "🌐 Freelance Work – Custom UI/UX designs for websites, web apps, and dashboards"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Spring boot",
      fontAwesomeClassname: "fas fa-seedling"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Mongo db",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SLIIT - Sri Lanka Institute of Information Technology",
      logo: require("./assets/images/course-icon-slit.png"),
      subHeader: "BSc (Hons) in Information Technology Specialising in Information Technology",
      desc: "Pursuing a Bachelor's degree in Information Technology, BSc (Hons) in Information Technology Specialising in Information Technology. Gaining strong fundamentals in programming, system design, and full-stack web development.",
     
    },
    {
      schoolName: "Sir John Kothalawala College",
      logo: require("./assets/images/images.png"),
      subHeader: "OL / AL",
      duration: "January 2012 - March 2022",
      desc: "I completed my secondary education at Sir John Kotelawala College, a well-respected national school in Kurunegala. The school is known for its commitment to academic excellence, discipline, and holistic student development.",
     // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "UI/UX Designer - Intern",
      company: "CeylonX",
      companylogo: require("./assets/images/companylogo.png"),
      date: "November 2024 –  May 2025",
      desc: "During my internship at CeylonX, I collaborated with the design and development teams to create intuitive, user-friendly interfaces for web and mobile applications. My responsibilities included wireframing, prototyping, and designing user interfaces using tools like Figma. I worked closely with clients from the UK and Australia, gaining valuable experience in adapting design solutions to meet diverse user expectations and cultural preferences. I contributed to improving user experience by conducting user research, analyzing feedback, and refining designs to align with client requirements. This role enhanced my skills in design thinking, usability principles, and responsive design.",
      
    },
    {
      role: "Freelancer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiver.webp"),
      date: "November 2024 – Present",
      desc: "As a freelance UI/UX designer on Fiverr, I have worked with clients worldwide to design user-centric web and mobile interfaces tailored to their brand and business goals. My work includes creating wireframes, prototypes, and high-fidelity designs using tools like Figma and Adobe XD. I specialize in delivering clean, modern, and responsive designs that enhance usability and improve user engagement. Through Fiverr, I’ve developed strong skills in client communication, project management, and delivering designs that align with diverse user needs and industries."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/CH.png"),
      projectName: "Ceylon Harvest ",
      projectDesc: "Ceylon Harvest is a smart web-based platform designed to revolutionize agriculture in Sri Lanka by connecting farmers, buyers, and agricultural experts in one unified digital ecosystem. The system aims to solve key challenges faced by local farmers, such as limited market access, lack of updated farming knowledge, and inefficient distribution of resources.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/sahanchanuka24/Ceylon-Harvest-"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AX.png"),
      projectName: "AcadamiX",
      projectDesc: "Developed a feature-rich e-learning web application using Java Spring Boot for the backend and React for the frontend. The platform allows users to sign in securely using Google authentication. It supports interactive learning through course selection and lecture uploads by teachers, while students can create personalized study plans. Additionally, users can engage socially by uploading posts, liking, and commenting—similar to a social media experience integrated into the learning environment. The project combines educational content delivery with community-driven interaction, promoting collaborative and flexible online learning.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/thidaswick/AcadamiX"
        }
      ]
    },
    {
      image: require("./assets/images/EH.png"),
      projectName: "Express Hirely",
      projectDesc: "Engineered a full-stack vehicle rental platform using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline rental operations for a vehicle rental company. The system allows users to browse available vehicles, make bookings, and manage their rentals efficiently through a user-friendly interface. Admins can manage vehicle listings, monitor rental status, and update availability in real- time. The platform was designed to simplify the end-to-end rental process, offering a scalable and modern solution for managing fleet and customer interactions online",
      footerLink: [
        {
          name: "Github",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Java Programming Basics - IBM",
      subtitle:
        "I successfully completed the Java Programming – Basics course offered by IBM on Coursera. This course covered fundamental programming concepts including variables, control structures, object-oriented programming (OOP), methods, and basic file handling using Java. It strengthened my understanding of core Java syntax and logic building, laying a solid foundation for software development.",
      image: require("./assets/images/731_java.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Generative AI: Prompt Engineering - IBM ",
      subtitle:
        "This course provided a foundational understanding of Generative AI, including its principles, use cases, and ethical considerations. I learned about large language models (LLMs), transformer-based architectures, and how generative tools like ChatGPT, Bard, and other AI models work. The course also covered prompt engineering basics and real-world applications of Generative AI in design, content creation, and development.",
      image: require("./assets/images/IBM logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+94-77 3900 340",
  email_address: "sahanchanuka90@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
