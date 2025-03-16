import style from "./Home.module.css";

const graduation = new Date("2025-05-17T00:00:00Z");
const alumni = graduation < new Date();

const studentStatus = alumni 
    ? "a recent graduate of Miami University with a Bachelor's degree in Computer Science and a minor in Economics" 
    : "currently a Senior year at Miami University majoring in Computer Science and minoring in Economics";

/**
 * Home page
 */
export default function Home() {
    return <main>
        <h1>Sam Hieken</h1>
        <Picture/>
        <Bio/>
    </main>
}

function Picture() {
    // const [ width ] = useWindowSize();
    // const imgWidth = width / 5;
    // const imgHeight = imgWidth * 1.40158730159;

    return <img className={style.picture} src="/samhieken.png" alt="Sam Hieken" width={200} height={200 * 1.40158730159}/>
}

function Bio() {
    return <section className={style.bio}>
        <p>
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