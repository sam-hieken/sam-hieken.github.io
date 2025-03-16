import style from "./Header.module.css";

import NavBar from "./NavBar";
import Socials from "./Socials";

/**
 * The global header component, appearing at the top of every page.
 */
export default function Header() {
    return <header className={style.pageHeader}>
        <div className={style.name}>Samuel Hieken</div>
        <NavBar/>
        <Socials/>
    </header>;
}