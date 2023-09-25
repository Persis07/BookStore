import { useFetch } from "../custom/Fetch";
import {Context} from "./CreateContext";

export default function Container({children}) {
    const {books, setBooks} = useFetch();
    return (
        <>
            <Context.Provider value={{books, setBooks}}>
                {children}
            </Context.Provider>
        </>
    );
};