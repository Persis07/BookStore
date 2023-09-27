import { useContext } from "react";
import {NavLink} from "react-router-dom";
import { Context } from "../../context/CreateContext";

export default function Links() {
    const {setBooks2} = useContext(Context);
    return (
        <>
            <ul>
                <li onClick={() => setBooks2("")}><NavLink to="/" state={{page: "home"}}>Home</NavLink></li>
                <li><NavLink to="/about" state={{page: "about"}}>About</NavLink></li>
                <li><NavLink to="/contact" state={{page: "contact"}}>Contact</NavLink></li>
            </ul>
        </>
    );
};