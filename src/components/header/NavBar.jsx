import Logo from "./Logo";
import Links from "./Links";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";


export default function NavBar() {
    return (
        <>
            <nav>
                <Logo/>
                <Search/> 
                <Links/>
                <ShoppingCart/>
            </nav>
        </>
    );
};