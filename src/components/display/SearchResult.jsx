import { useContext } from "react";
import { Context } from "../../context/CreateContext";

export default function SearchResult() {
    const {books2} = useContext(Context);
    return (
        <>
        <ul>
        {books2.map((book) => (
          <li key={book.url}>{book.name}</li>
        ))}
        </ul> 
        </>
    );
};