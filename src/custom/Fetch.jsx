import { useEffect, useState } from "react";

export function useFetch() {
    const [books, setBooks] = useState([]);
    async function store() {
        try {
            const response = await fetch("https://anapioficeandfire.com/api/books");
            if(response.ok === true) {
                const data = await response.json();
                setBooks(data);
                console.log(data); 
            } else {
                let error = new Error("Error: I was unable to find any books.");
                throw error;
            };
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        store();
    }, []);
    return {books, setBooks};
};