import style from "./Header.module.css";

import { Link } from "react-router-dom";

const links = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Work Experience",
        href: "/experience"
    },
    // {
    //     name: "Portfolio",
    //     href: "/portfolio"
    // },
    {
        name: "Resume",
        href: "/resume"
    }
]

/**
 * The global navigation bar, present in the header at the top of every page.
 */
export default function NavBar() {
    return <nav className={style.navBar}>
        <ol className={style.navList}>
            {
                links.map(link => 
                    <li className={style.navItem} key={link.href}>
                        <Link to={link.href}>{link.name}</Link>
                    </li>
                )
            }
        </ol>
    </nav>
}