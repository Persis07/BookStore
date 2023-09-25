import {useLocation} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Main() {
    const location = useLocation();
    return (
        <>
            <main>
                {!location.state && <Home/>} {/* needed for the first time the page loads and I have not clicked on Home yet */}
                {location.state?.page === "home" && <Home/>} {/*I must use the ? because location.state.name is null when I load the page for the first time and have not clicked on anyhting*/}
                {location.state?.page === "about" && <About/>}
                {location.state?.page === "contact" && <Contact/>}
            </main>
        </>
    );
};