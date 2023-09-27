import { useContext } from "react";
import {NavLink} from "react-router-dom";
import { Context } from "../../context/CreateContext";

export default function Links() {
    const {setBooks2} = useContext(Context);
    return (
        <>
            <ul className="nav-ul">
                <li className="nav-li" onClick={() => setBooks2("")}><NavLink to="/" state={{page: "home"}}>Home</NavLink></li>
                <li className="nav-li"><NavLink to="/about" state={{page: "about"}}>About</NavLink></li>
                <li className="nav-li"><NavLink to="/contact" state={{page: "contact"}}>Contact Us</NavLink></li>
                
            </ul>
        </>
    );
};