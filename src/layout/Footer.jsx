import style from "./Footer.module.css";

export default function Footer() {
    return <footer className={style.footer}>
        <address>
            Sam Hieken
            <br/>
            <a href="mailto:sam.hieken@gmail.com">sam.hieken@gmail.com</a>
        </address>
        <span>© 2025</span>
    </footer>
}