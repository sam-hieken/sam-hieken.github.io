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
                    "Modernized technology stack. Old architecture based on PowerApps and SharePoint. New architecture based on Next.JS, Spring Boot (Spring Web MVC), PostgreSQL, and AWS EC2",
                    "Acted as the sole full-stack developer and AWS engineer. Collaborated with business partners to ensure the system fit their needs"
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
                    "Build various Application Programming Interface (API) integrations for Miami University’s IT department",
                    "Act as administrator on Miami’s data warehouse (MS-SQL). Created “sandbox” tables and stored procedures",
                    "Utilize low code platform (TeamDynamix iPaaS) and Python"
                ]
            }
        ]
    }
]

export default function Experience() {
    return <>
        <h1>Work Experience</h1>
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
            <div className={style.experienceLocation}>
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

function JobDate({ yearMonth }) {
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