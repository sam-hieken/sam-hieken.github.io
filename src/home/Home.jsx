import style from "./Home.module.css";

const graduation = new Date("2025-05-17T00:00:00Z");
const alumni = graduation < new Date();

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

/**
 * Home page
 */
export default function Home() {
    return <>
        <h1>Sam Hieken</h1>
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
    return <section className={style.bio}>
        <p className={style.greeting}>
            Hello, 
        </p>
        <p>
            Thanks for checking out my website! My name is Sam Hieken, and I'm {studentStatus}. 
            I have ~10 years of experience programming, including ~10 years of Java, ~6 years of SQL, 
            and ~5 years of experience in C.
        </p>
        <p>
            I'm also the creator of <a href="https://congress.csi.miamioh.edu" target="_blank">Who Did I Elect?</a>, a site to provide voters reliable, non-partisan 
            information regarding their U.S. Congressmen.
        </p>
    </section>
}

function Interviews() {
    return <section className={style.interviews}>
        <h2>See My TV Interviews</h2>
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