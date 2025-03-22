import { JobDate } from "../experience/Experience"
import PageHeader from "../util/component/PageHeader"

import style from "./Projects.module.css"

const projects = [
    {
        name: "U.S. Congressman Digital Profile (Who Did I Elect?)",
        link: "https://congress.csi.miamioh.edu",
        startDate: "2023-04",
        endDate: null,
        accomplishments: [
            "Constructed web application to build a digital profile for every U.S. Congressperson. Created with Next.js, Spring Boot, and PostgreSQL. Includes frontend and backend analytics (Google Analytics and Superset respectively)",
            "Designed and constructed entire stack. Started as individual project, but Miami University agreed to maintain it after graduation",
            <>
                Participated in television interviews with&nbsp;
                <a href="https://spectrumnews1.com/oh/columbus/news/2024/10/23/who-did-i-elect----student-creates-website-to-help-voters">Spectrum News 1 Cincinnati</a>
                &nbsp;and&nbsp;
                <a href="https://local12.com/health/health-updates/miami-university-student-develops-tool-to-ease-election-stress-sam-hieken-congressperson-digital-profile-who-elect" target="_blank">Local 12 Cincinnati</a> 
                &nbsp;to discuss the project
            </>
        ]
    },
    {
        name: "Market Sentiment Analysis Natural Language Processing",
        link: null,
        startDate: "2023-01",
        endDate: "2023-03",
        accomplishments: [
            "Created a small transformer-based machine learning model to classify ",
            "Used NLP to classify a piece of news (tailored towards financial news) as either positive, negative, or neutral"
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
