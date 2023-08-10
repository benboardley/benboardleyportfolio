import lpcvai from './lpcvai.jpg';
import fullstack from './fullstack.png'
import compmodel from './compmodel2.png'
import machinelearning from './machinelearning.jpg'
export const projects = [
    {
        title: "Low Power Computer Vision Competition 2023",
        subtitle: "Team Lead",
        description: "I was the lead backend organizer for a Semantic Segmentation competition for edge (low powered) devices. During this project, I developed a backend infrastructure and submission evaluation pipeline that was able to autonomously evaluate submissions of over 100 participants.The infrastructure consisted of  two different servers, a web server and an evaluation server. I set up the evaluation server on a Nvidia 2GB Jetson Nano so we could evaluate the solutions using the GPU. We used this pipline to score and update a real-time leaderboard based on the metrics of Mean Dice and Execution Time.",
        skills: "System Development, Management, Python, Shell",
        image: lpcvai,
        link: "https://lpcv.ai"
    },
/*    {
        title:"Social Media App",
        subtitle: "Full Stack",
        description: "I still Need to do this Project",
        skills: "",
        image: fullstack,
        link: ""
    }, */
    {
        title: "Compressible Flow",
        subtitle: "Web Calculator",
        description: "Built a calculator for a post doctorate's thesis",
        skills: "Web Development, Java Script, HTML, CSS, Python (pyscript)",
        image: compmodel,
        link: "https://benboardley.github.io/quasi-one/"
    },
 /*   {
        title: "Machine Learning",
        subtitle: "hosted by website",
        description: "Created the architecture and trained this machine learning model",
        skills: "",
        image: machinelearning,
        link: ""
    } */
]

export const languages = [
    {
        skill: "Python",
        //level: "Proficient"
    },
    {
        skill: "C",
        //level: "Proficient"
    },
    {
        skill: "JavaScript",
        //level: "Intermidiate"
    },
    {
        skill: "React",
        //level: "Intermediate"
    },
    {
        skill: "SQL",
       // level: "Intermidiate"
    },
    {
        skill: "Shell / Bash",
     //   level: "Experienced"
    }
]

export const skills = [
    {
        skill: "Full Stack",
        //level: "Intermediate"
    },
    {
        skill: "Machine Learning",
        //level: "Currently Learning"
    },
    {
        skill: "Computer Vision",
        //level: "Currently Learning"
    },
    {
        skill: "Computational Modeling",
        //level: "Currently Learning"
    },
    {
        skill: "Computer Security",
        //level: "Intermediate"
    },
    {
        skill: "Data Mining",
        //level: "Intermediate"
    },
]

export const relevantClasses = [
    {
        class: "Data Structures and Algorithms",
        language: "C",
        grade: "A",
       // description: "Used creativity and problem solving so solve complex problems in a time and space efficient manner using data structures"
    },
    {
        class: "Computer Security",
        language: "Python",
        grade: "A+",
       // description: "Implemented and learned about various Security protocols using AES, 3DES, Public Key Cryptography, and Firewalls"
    },
    {
        class: "Python for Data Science",
        language: "Python",
        grade: "A",
       // description: "Researched data science libraries such as numpy, sklearn, matplotlib and keras to solve complex data science problems"
    },
    {
        class: "Software Engineering Tools",
        language: "Python, JavaScript, HTML, CSS, SQL",
        grade: "A",
       // description: "Learned how to use important software development tools and frameworks such as Flask, Electron, GCP, SQL and Jira"
    },
 //   {
   //     class: "Maths",
     //   subsections: "Linear Algebra, Differential Equations, Multi-Variable Calculus"
    //},
]

export const upcomingClasses = [
    {
        class: "Artificial Intelligence",
        language: "Python",
        syllabus: ""
    },
    {
        class: "Software Engineering",
        language: "Python, JavaScript, Rust",
        syllabus: ""
    },
    {
        class: "Intro to Data Mining",
        language: "Python",
        syllabus: ""
    },
    {
        class: "Object Oriented Programming",
        language: "C++",
        syllabus: ""
    }
]