import { useContext } from "react";
import {NavLink} from "react-router-dom";
import PGNJ from "../../assets/PGNJ.png";
import { Context } from "../../context/CreateContext";


export default function Logo() {
    const {setBooks2} = useContext(Context);
    return (
        <>
            <ol>
                <li onClick={() => setBooks2("")}><NavLink to="/"><img src={PGNJ} alt="" className="PGNJ" /></NavLink></li>
            </ol>
        </>
    );
};