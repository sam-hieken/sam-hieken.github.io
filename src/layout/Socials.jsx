import style from "./Header.module.css";

const socials = [
    {
        name: "GitHub",
        img: "/github.svg",
        href: "https://github.com/sam-hieken"
    },
    {
        name: "LinkedIn",
        img: "/linkedin.svg",
        href: "https://www.linkedin.com/in/sam-hieken"
    }
]

export default function Socials() {
    return <nav className={style.socials}>
        <ul>
            {
                socials.map(social => 
                    <li key={social.href} className={style.social}>
                        <a href={social.href} target="_blank">
                            <img src={social.img} alt={social.name}/>
                        </a>
                    </li>
                )
            }
        </ul>
    </nav>;
}