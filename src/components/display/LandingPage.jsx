import { useContext } from "react";
import { Context } from "../../context/CreateContext";
import { useRandom } from "../../custom/Random";
import GameOfThrones from "../../assets/GameOfThrones.png";
import ClashOfKings from "../../assets/ClashOfKings.png";
import StormOfSwords from "../../assets/StormOfSwords.png";
import HedgeKnight from "../../assets/HedgeKnight.png";
import FeastForCrows from "../../assets/FeastForCrows.png";
import SwornSword from "../../assets/SwornSword.png";
import MysteryKnight from "../../assets/MysteryKnight.png";
import DanceWithDragons from "../../assets/DanceWithDragons.png";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
    const {books} = useContext(Context);
    const {num1, num2, num3} = useRandom();
    return (
        <>
            <div className="card">
                <NavLink>
                    <img src={num1 === 0 ? GameOfThrones : num1 === 1 ? ClashOfKings : StormOfSwords} alt=""/>
                    <h3>{books[num1]?.name}</h3>
                    <h3>{books[num1]?.authors}</h3>
                    <h4>$9,24</h4>
                </NavLink>
            </div>
            <div className="card">
                <NavLink>
                    <img src={num2 === 3 ? HedgeKnight : num2 === 4 ? FeastForCrows : num2 === 5 ? SwornSword : MysteryKnight} alt=""/>
                    <h3>{books[num2]?.name}</h3>
                    <h3>{books[num2]?.authors}</h3>
                    <h4>$9,24</h4>
                </NavLink>
            </div>
            <div className="card">
                <NavLink>
                    <img src={num3 === 7 && DanceWithDragons}/>
                    <h3>{books[num3]?.name}</h3>
                    <h3>{books[num3]?.authors}</h3>
                    <h4>$9,24</h4>
                </NavLink>
            </div>
        </>
    );
};