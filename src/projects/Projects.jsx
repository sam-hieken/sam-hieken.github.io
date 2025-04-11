import { JobDate } from "../experience/Experience"
import PageHeader from "../util/component/PageHeader"
import { alumni } from "../util/Const"

import style from "./Projects.module.css"

const projects = [
    {
        name: "U.S. Congressman Digital Profile (Who Did I Elect?)",
        link: "https://congress.csi.miamioh.edu",
        startDate: "2023-04",
        endDate: null,
        accomplishments: [
            "Constructed a full-stack web application to create a “digital profile” for every U.S. Congressperson to keep the average U.S. voter better informed",
            "Built a robust pipeline to automatically integrate data from various sources into a centralized SQL database",
            "Coordinated with third-party data providers to obtain access to richer data",
            "Collaborated with Miami University’s IT Services department to create a secure virtual machine for hosting the application",
            <>
                Participated in television interviews with&nbsp;
                <a href="https://spectrumnews1.com/oh/columbus/news/2024/10/23/who-did-i-elect----student-creates-website-to-help-voters">Spectrum News 1 Cincinnati</a>
                &nbsp;and&nbsp;
                <a href="https://local12.com/health/health-updates/miami-university-student-develops-tool-to-ease-election-stress-sam-hieken-congressperson-digital-profile-who-elect" target="_blank">Local 12 Cincinnati</a> 
                &nbsp;to discuss the project
            </>,
            "Utilized Next.js, Spring Boot (Web MVC), Fluentd, Ubuntu, and PostgreSQL in technology stack, as well as frontend and backend analytics (Google Analytics and Apache Superset respectively)"
        ]
    },
    {
        name: "Job Application Tracker",
        link: null,
        startDate: "2025-03",
        endDate: null,
        accomplishments: [
            "Developed a web extension to make tracking details regarding job applications easier (such as the posting date, skills necessary, locations, listed salary, etc.)",
            "Integrated with large language models to convert the unstructured job description text into a structured JSON output. Performed through OpenRouter’s standardized API to enable seamless switching between models",
            "Utilized React.js (for the popup and page displays), Spring Boot (Web MVC), and PostgreSQL"
        ]
    },
    {
        name: "Course Scheduling Upgrade System (Senior Capstone)",
        link: null,
        startDate: "2024-09",
        // Senior capstone project ends when you graduate
        endDate: alumni ? "2025-05" : null,
        accomplishments: [
            "Designed and developed an improved version of Miami University’s course registration system which combines searching for courses and registering for courses into a single, user-friendly web application",
            "Created new features to improve usability for students, including a calendar module to visually display the user’s schedule, and an option to integrate the schedule with calendar applications (such as Google Calendar)",
            "Coordinated with Miami University’s IT Services department to obtain access to a sandbox Workday tenant for testing",
            "Collaborated with four other students to develop the application over two semesters. Responsibilities included creating and managing tables in the database, deploying and maintaining each layer of our stack, constructing the backend’s schema via Swagger / OpenAPI, and communicating with IT Services",
            "Managed development of the project via a SCRUM framework. Participated in weekly stand-up meetings to discuss issues and progress regarding sprints",
            "Utilized React.js, Express.js, PostgreSQL, and Ubuntu. Managed deployments with Docker and PM2"
        ]
    },
    {
        name: "Market Sentiment Analysis Natural Language Processing",
        link: null,
        startDate: "2023-01",
        endDate: "2023-03",
        accomplishments: [
            "Created a small transformer-based machine learning model utilizing Keras (TensorFlow)",
            "Used NLP to classify a piece of news (tailored towards financial news) as either positive, negative, or neutral"
        ]
    },
    {
        name: "Subprime Lending Application",
        link: null,
        startDate: "2022-04",
        endDate: "2023-04",
        accomplishments: [
            "Created a full-stack web application to automate the underwriting of subprime loans",
            "Focused on building a seamless user experience; ensured users could sign-up and receive approval for a loan in under 3 minutes",
            "Integrated Plaid’s API and “Plaid Link” module to allow users to easily connect their bank account. Connected with Dwolla’s ACH transfer API to facilitate quick transfers to and from the user’s bank account",
            "Coordinated with Plaid support to allow testing in a development environment with real data",
            "Utilized React.js, Spring Boot (WebFlux), MySQL, and Keycloak in the project’s technology stack"
        ]
    },
    {
        name: "“Hueston Woods” Hiking Trail Application",
        link: null,
        startDate: "2023-02",
        endDate: "2023-05",
        accomplishments: [
            "Built a web application allowing users to view, add, and review hiking trails at Hueston Woods (a local park) as part of my “Intro to Software Engineering” course",
            "Integrated geospatial data to allow users to view trails on a dynamic map",
            "Worked with four other students to develop the application. Served as the team’s technical manager and lead backend developer; responsibilities included creating and "
                + "maintaining the backend, helping the frontend team fix bugs, maintaining the database, setting up and maintaining our identity access management, and choosing the project’s technology stack",
            "Utilized React.js, Spring Boot (Web MVC), PostgreSQL, and Keycloak"
        ]
    },
    {
        name: "ChatGPT Detection Research",
        link: null,
        startDate: "2022-01",
        endDate: "2022-08",
        accomplishments: [
            "Trained models attempting to distinguish AI generated text from human generated text",
            "Leveraged multiple LLMs, including BERT, GPT-2, ChatGPT, and T5 via HuggingFace's \"Transformers\" library",
            `Utilized multiple NVIDIA Tesla v100 GPUs on Miami University's "RedHawk" High-Performance Computing Cluster to train the model via HuggingFace's "Accelerate" library`,
            "Created a script to automatically generate and collect articles from ChatGPT (prior to OpenAI releasing an official API) for the training dataset",
            "Built a pipeline to collect human-generated text from Reddit, Stack Overflow, Medium, and other sources for the training dataset"
        ]
    }
]

export default function Projects() {
    return <>
        <PageHeader>Projects</PageHeader>
        <ProjectList/>
    </>
}

function ProjectList() {
    return <ol className={style.projects}>
        {
            projects.map((project, index) => (
                <Project key={index} project={project}/>
            ))
        }
    </ol>
}

function Project({ project }) {
    return (
        <li className={style.project}>
            <h2>{project.name}</h2>
            <em className={style.projectDate}>
                <JobDate yearMonth={project.startDate}/> 
                &nbsp;–&nbsp; 
                <JobDate yearMonth={project.endDate}/>
            </em>
            
            <ul>
                {project.accomplishments.map((accomplishment, index) => (
                    <li key={index} className={style.projectAccomplishment}>{accomplishment}</li>
                ))}
            </ul>
        </li>
    );
}
