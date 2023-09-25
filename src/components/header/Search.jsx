import { useContext } from "react";
import { Context } from "../../context/CreateContext";
import { handleInput } from "../../custom/Handle";

export default function Search() {
    const {books, setBooks} = useContext(Context);
    return (
        <>
            <ul>
                <li>
                    <form onSubmit={e => handleInput(e, books, setBooks)}>
                        <input type="text" name="search"/>
                        <button type="submit">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </form>
                </li>
            </ul>
        </>
    );
};