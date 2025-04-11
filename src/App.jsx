import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./home/Home";
import Footer from "./layout/Footer";
import Resume from "./resume/Resume";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

import PageHead from "./util/component/PageHead";

const routes = [
    {
        name: "Home",
        description: "Welcome to my portfolio!",
        href: "/",
        component: Home
    },
    {
        name: "Resume",
        description: "My resume",
        href: "/resume",
        component: Resume
    },
    {
        name: "Work Experience",
        description: "My work experience",
        href: "/experience",
        component: Experience
    },
    {
        name: "Projects",
        description: "My projects",
        href: "/projects",
        component: Projects
    }
];

/**
 * Main component of the application
 */
export default function App() {
    return <HashRouter>
        {/* <HelmetProvider> */}
            <Header/>
            <main>
                <Routes>
                    {
                        routes.map((route, i) => 
                            <Route key={i} path={route.href} element={<>
                                <PageHead title={route.name} description={route.description}/>
                                <route.component/>
                            </>}/>
                        )
                    } 
                </Routes>
            </main>
            <Footer/>
        {/* </HelmetProvider> */}
    </HashRouter>
}