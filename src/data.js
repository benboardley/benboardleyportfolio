import lpcvai from './lpcvai.jpg';
import fullstack from './fullstack.png'
import compmodel from './compmodel2.png'
import machinelearning from './machinelearning.jpg'
export const projects = [
    {
        title: "Low Power Computer Vision Competition 2023",
        subtitle: "Team Lead",
        description: "I spearheaded the backend architecture and orchestration for a Semantic Segmentation challenge specifically tailored for edge computing devices with constrained computational resources.\
         In the course of this initiative, I engineered a backend infrastructure coupled with an automated submission evaluation pipeline. This pipeline was adept at autonomously processing and evaluating the solutions\
        from an excess of 600 submissions across 60 teams. The infrastructure was composed of two distinct server environments: a web server to manage front-end interactions and an evaluation server dedicated to intensive computational tasks.\
        For the latter, I leveraged an Nvidia Jetson Nano 2GB, capitalizing on its GPU capabilities to enhance the evaluation process. \
        This integrated pipeline facilitated real-time scoring, enabling us to dynamically update a leaderboard grounded on the parameters of Mean Dice Coefficient and Execution Latency.",
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
        description: "I created a web application on my own to promote a researcher's publication. The main feature was a calculator that computed compressible flow using a closed-form solution. \
        Although the app had to run in the user's browser, the math behind it was written in Python, which the researcher was familiar with. To make this work, I used 'pyscript'. \
        This tool let me embed Python code in the website's HTML, and then it converted that Python into Web Assembly for smoother web performance.",
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