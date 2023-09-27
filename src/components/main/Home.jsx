import React, { useContext } from 'react';
import { Context } from '../../context/CreateContext';
import LandingPage from "../display/LandingPage";
import SearchResult from '../display/SearchResult';
//import BookSearch from '../display/BookSearch'; <BookSearch/>

export default function Home() {
    const {books2} = useContext(Context);
    return (
        <>
            <div className="home">
                {books2 !== "" ? <SearchResult/> : <LandingPage/>}
            </div>
        </>
    );
};