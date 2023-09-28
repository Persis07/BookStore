import Logo from "./Logo";
import Links from "./Links";
import Search from "./Search";



export default function NavBar() {
    return (
        <>
            <nav>
                <Logo/>
                <Search/> 
                <Links/>
                
            </nav>
        </>
    );
};