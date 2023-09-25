export function handleInput(e, books, setBooks) {
    e.preventDefault();
    e.target.search.value = "";
};