import {NavLink} from "react-router-dom";

export default function Links() {
    return (
        <>
            <ul>
                <li><NavLink to="/" state={{page: "home"}}>Home</NavLink></li>
                <li><NavLink to="/about" state={{page: "about"}}>About</NavLink></li>
                <li><NavLink to="/contact" state={{page: "contact"}}>Contact</NavLink></li>
                
            </ul>
        </>
    );
};