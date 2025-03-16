import { Route, BrowserRouter, Routes, href } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./home/Home";
import Footer from "./layout/Footer";
import Resume from "./resume/Resume";
import Experience from "./experience/Experience";

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
    }
];

/**
 * Main component of the application
 */
export default function App() {
    return <BrowserRouter>
        <Header/>
        <Routes>
            {
                routes.map((route, i) => 
                    <Route key={i} path={route.href} element={<route.component/>}/>
                )
            } 
        </Routes>
        <Footer/>
    </BrowserRouter>
}