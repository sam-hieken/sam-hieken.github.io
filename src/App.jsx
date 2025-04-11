import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./home/Home";
import Footer from "./layout/Footer";
import Resume from "./resume/Resume";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const routes = [
    {
        name: "Home",
        href: "/",
        component: Home
    },
    {
        name: "Resume",
        href: "/resume",
        component: Resume
    },
    {
        name: "Work Experience",
        href: "/experience",
        component: Experience
    },
    {
        name: "Projects",
        href: "/projects",
        component: Projects
    }
];

/**
 * Main component of the application
 */
export default function App() {
    return <HashRouter>
        <Header/>
        <main>
            <Routes>
                {
                    routes.map((route, i) => 
                        <Route key={i} path={route.href} element={<route.component/>}/>
                    )
                } 
            </Routes>
        </main>
        <Footer/>
    </HashRouter>
}