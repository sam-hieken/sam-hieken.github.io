import PageHeader from "../util/component/PageHeader";
import style from "./Home.module.css";

import { alumni } from "../util/Const";

const studentStatus = alumni 
    ? "a recent graduate of Miami University with a Bachelor's degree in Computer Science and a minor in Economics" 
    : "currently a Senior year at Miami University majoring in Computer Science and minoring in Economics";

const interviews = [
    {
        name: "Spectrum News (Cincinnati)",
        video: "https://www.youtube.com/embed/-MI8SF8cKug?si=aDb-ex7DMXsmoT4G"
    },
    {
        name: "WKRC Local 12 (Cincinnati)",
        video: "https://mms.tveyes.com/MediaCenterPlayer.aspx?u=aHR0cDovL21lZGlhY2VudGVyLnR2ZXllcy5jb20vZG93bmxvYWRnYXRld2F5LmFzcHg%2FVXNlcklEPTMyNzMwNCZNRElEPTIyMzU5OTIxJk1EU2VlZD02ODk3JlR5cGU9TWVkaWE%3D"
    }
];

const approximateLanguageStartYear = {
    Java: 2014,
    SQL: 2019,
    C: 2020,
    JavaScript: 2019,
    Python: 2018
}

/**
 * Home page
 */
export default function Home() {
    return <>
        <PageHeader>Sam Hieken</PageHeader>
        <Picture/>
        <Bio/>
        <Interviews/>
    </>
}

function Picture() {
    // const [ width ] = useWindowSize();
    // const imgWidth = width / 5;
    // const imgHeight = imgWidth * 1.40158730159;

    return <img className={style.picture} src="/samhieken.png" alt="Sam Hieken" width={200} height={200 * 1.40158730159}/>
}

function Bio() {
    const currentYear = new Date().getFullYear();
    // Convert start year to total years in a clone of approximateLanguageStartYear
    const totalYears = structuredClone(approximateLanguageStartYear);

    for (const language in totalYears)
        totalYears[language] = currentYear - totalYears[language];
    

    return <section className={style.bio}>
        <p className={style.greeting}>
            Hello, 
        </p>
        <p>
            Thanks for checking out my website! My name is Sam Hieken, and I'm {studentStatus}. 
            I've been programming as a hobby for about ~{totalYears.Java} years, with experience in the following
            languages:
        </p>
            
        <dl className={style.languageList}>
            {
                Object.entries(totalYears).map(([language, years]) => 
                    <div className={style.languageItem} key={language}>
                        <dt>
                            <b>{language}</b>:
                        </dt>&nbsp;
                        <dd>{years} years</dd>
                    </div>
                )
            }
        </dl>

        <p>
            I'm also the creator of <a href="https://congress.csi.miamioh.edu" target="_blank">Who Did I Elect?</a>, a site to provide voters reliable, non-partisan 
            information regarding their U.S. Congressmen.
        </p>
    </section>
}

function Interviews() {
    return <section className={style.interviews}>
        <h2>Television Interviews</h2>
        <ul className={style.interviewList}>
            {
                interviews.map((interview, i) => 
                    <li className={style.interviewItem} key={i}>
                        <section className={style.interview}>
                            <h3>{interview.name}</h3>
                            <iframe width="480" height="270" src={interview.video} title="Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </section>
                    </li>
                )
            }
        </ul>
    </section>
}