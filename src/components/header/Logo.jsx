import {NavLink} from "react-router-dom";
import PGNJ from "../Images/PGNJ.png";


export default function Logo() {
    return (
        <>

<NavLink to="/"><img src={PGNJ} alt="" className="PGNJ" /></NavLink>
            <ul>
                <li></li>
            </ul>
            
        </>
    );
};