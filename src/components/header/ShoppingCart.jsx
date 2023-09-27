import { NavLink } from "react-router-dom";

export default function ShoppingCart() {
    return (
        <>
            <ul>
                <li>
                    <NavLink>
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </NavLink>
                </li>
            </ul>
        </>
    );
};