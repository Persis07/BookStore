import { useFetch } from "../custom/Fetch";
import {Context} from "./CreateContext";
import { useState } from "react";

export default function Container({children}) {
    const {books, setBooks} = useFetch();
    const [books2, setBooks2] = useState("");
    return (
        <>
            <Context.Provider value={{books, setBooks, books2, setBooks2}}>
                {children}
            </Context.Provider>
        </>
    );
};