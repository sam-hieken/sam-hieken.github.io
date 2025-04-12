import PageHeader from "../util/component/PageHeader";
import { getMonthName } from "../util/Func";
import style from "./Experience.module.css";

const workExperience = [
    {
        company: "Eli Lilly and Company",
        experiences: [
            {
                position: "Technology Intern",
                location: "Indianapolis, IN",
                startDate: "2024-05",
                endDate: "2024-08",
                responsibilities: [
                    "Solved production failures and enhanced onboarding capabilities through the redesign of a low code issue tracking system",
                    "Modernized the tracking system’s technology stack. Transitioned from a two-tier PowerApps and SharePoint based stack to a new three-tier architecture based on Next.JS, Spring Boot (Web MVC), PostgreSQL, and AWS EC2",
                    "Maintained issues during development and deployment of the tracking system as the sole full-stack developer and AWS engineer",
                    "Collaborated with business partners on the Clinical Lab Sciences team to ensure the tracking system met their needs"
                ]
            }
        ]
    },
    {
        company: "Miami University, IT Services",
        experiences: [
            {
                position: "ITSM Data Integration Intern",
                location: "Oxford, OH",
                startDate: "2022-03",
                endDate: null,
                responsibilities: [
                    "Build various API integrations for Miami University’s IT department through a low code iPaaS (Integration Platform as a Service) by TeamDynamix",
                    "Convert existing ETL pipelines written in Python into low code iPaaS flows", 
                    "Act as administrator on Miami’s data warehouse (MS-SQL). Responsible for creating sandbox versions of tables and stored procedures",
                    "Fix issues with existing iPaaS flows written by other interns"
                ]
            }
        ]
    }
]

export default function Experience() {
    return <>
        <PageHeader>Work Experience</PageHeader>
        <ExperienceList/>
    </>
}

function ExperienceList() {
    return (
        <ol className={style.workExperienceCompanies}>
            {workExperience.map((company, index) => (
                <ExperienceCompany key={index} company={company}/>
            ))}
        </ol>
    )
}

function ExperienceCompany({ company }) {
    return (
        <li className={style.workExperienceCompany}>
            <h2>{company.company}</h2>
            <ol className={style.workExperiences}>
                {company.experiences.map((experience, index) => 
                    <ExperienceItem key={index} experience={experience}/>
                )}
            </ol>
        </li>
    )
}

function ExperienceItem({ experience }) {
    return (
        <li className={style.workExperience}>
            <h3>{experience.position}</h3>
            <div className={style.experienceDateLocation}>
                <i>{experience.location}</i>
                <div className={style.experienceDate}>
                    <JobDate yearMonth={experience.startDate}/> 
                    &nbsp;–&nbsp; 
                    <JobDate yearMonth={experience.endDate}/>
                </div>
            </div>
            
            <ul>
                {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </li>
    )
}

export function JobDate({ yearMonth }) {
    if (!yearMonth) {
        const today = new Date();

        // Format date as yyyy-mm
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        // Need to ensure single digit has 0 in front
        return <time dateTime={`${year}-${month.toString().padStart(2, "0")}`}>Present</time>
    }

    const month = yearMonth?.split("-")[1];
    const year = yearMonth?.split("-")[0];

    return <time dateTime={yearMonth}>
        {getMonthName(month)} {year}
    </time>
}