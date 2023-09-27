import {NavLink} from "react-router-dom";
import PGNJ from "../../assets/PGNJ.png";


export default function Logo() {
    return (
        <>
            <ul>
                <li><NavLink to="/"><img src={PGNJ} alt="" className="PGNJ" /></NavLink></li>
            </ul>
        </>
    );
};