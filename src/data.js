import lpcvai from './images/lpcvai.jpg';
import fullstack from './images/fullstack.png'
import compmodel from './images/compmodel2.png'
import machinelearning from './images/machinelearning.jpg'
import running from './images/running.jpg'
import basketball from './images/basketball.jpg'
import purdue from './images/purdue.jpg'
import rov from './images/ROV.png'
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
    {
        title: "IEEE Remotley Operated Underwater Vehicles",
        subtitle: "Software Engineer",
        description: "I work alongside a group of engineers to create software responsible for controlling a robot in a summer robotics competition.\
        I am currently helping develop a new user interface for this year's robot. We are developing a UI leveraging PyQt\
        and I am working on creating a communication pipeline between the ROS2 backend and the information displayed to the vehicle drivers. Previously, I worked\
        on migrating the code base from ROS to ROS2 and developed nodes for different information transmition such as thrust and tools.",
        skills: "Robot Operating System (ROS) - Python",
        image: rov,
        link: ""
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
        description:"I created a web application to promote a researcher's publication. The main feature was a calculator that computed compressible flow using a closed-form solution. \
        Although the app had to run in the user's browser, the math behind it was written in Python, which the researcher was familiar with. To make this work, I used 'pyscript'. \
        This tool let me embed Python code in the website's HTML, and then it converted that Python into Web Assembly for smoother web performance.",
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
        skill: "Computer Security",
        //level: "Intermediate"
    },
    {
        skill: "Data Mining",
        //level: "Intermediate"
    },
    {
        skill: "Network",
        //level: "Currently Learning"
    },
]

export const relevantClasses = [
    {
        class: "ECE 368 Data Structures and Algorithms",
        language: "C",
        grade: "A",
       // description: "Used creativity and problem solving so solve complex problems in a time and space efficient manner using data structures"
    },
    {
        class: "ECE 404 Computer Security",
        language: "Python",
        grade: "A+",
       // description: "Implemented and learned about various Security protocols using AES, 3DES, Public Key Cryptography, and Firewalls"
    },
    {
        class: "ECE 20875 Python for Data Science",
        language: "Python",
        grade: "A",
       // description: "Researched data science libraries such as numpy, sklearn, matplotlib and keras to solve complex data science problems"
    },
    {
        class: "ECE 395 Software Engineering Tools",
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
        class: "ECE 570 Artificial Intelligence",
        language: "Python",
        syllabus: ""
    },
    {
        class: "ECE 461 Software Engineering",
        language: "Python, JavaScript, Rust",
        syllabus: ""
    },
    {
        class: "ECE 595 Intro to Data Mining",
        language: "Python",
        syllabus: ""
    },
    {
        class: "ECE 30862 Object Oriented Programming",
        language: "C++",
        syllabus: ""
    }
]

export const hobbies = [
    {
        Hobby: "Running",
        Image: running,
        Description: "I have been an avid runner my entire life. I ran High School Track and Cross Country, and just this past winter I ran the Indianapolis Half Marathon. This upcoming Fall I will be running the the Indianapolis Full Marathon. \
        Follow Me on Strava!"
    },
    {
        Hobby: "Basketball",
        Image: basketball,
        Description: "Basketball has always been one of my favorite sports to play. I currently play Intramural basketball at Purdue."
    },
]

export const education = [
    {
        degree: "Bachelor of Science",
        major: "Computer Engineering",
        image: purdue,
        GPA: "3.94",
        years: "2021-2024"
    },
    {
        degree: "Master of Science",
        major: "Computer Engineering",
        image: purdue,
        GPA: "-",
        years: "2024-2025"
    },
]