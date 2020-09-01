import React from 'react';
import { useLocation } from "react-router-dom";
import '../css/Search.css';
import { Database } from '../firebase/firebase';
import qs from 'qs';
import BookRow from './BookRow';
import Diacritics from 'diacritic';

/**
 * This page displays the books that match the info given in the header search bar
 */
function Search() {

    const location = useLocation();
    const query = Diacritics.clean(qs.parse(location.search, { ignoreQueryPrefix: true }).query)
    const [books, setBooks] = React.useState([])

    /**
     * React.useEffect runs upon a condition. Here it gets all the books from the collection in Database, and filters them if they contain the query in their strings
     */
    React.useEffect(() => {
        Database.ref('books').once('value', (snapshot) => {
            let tmp = [];
            snapshot.forEach(snap => {
                filterBook(snap, tmp)
            });
            setBooks(tmp); 
        });
    }, [query])

    /**
     * Filters the books of the owner, and cleans the strings, making both of them:
     * - Lowercase (String.prototype.toLowerCase())
     * - Only in english characters (npm library Diacritics.js)
     * @param {snapshot} snap 
     * @param {Array} tmp 
     */
    const filterBook = (snap, tmp) => {
        const title = Diacritics.clean(snap.val().title.toLowerCase())
        if(title.includes(query)){
            tmp.push(snap.val())
            return;
        }

        const author = Diacritics.clean(snap.val().author.toLowerCase())
        if(author.includes(query)){
            tmp.push(snap.val())
            return;
        }

        for(var i = 0; i < snap.val().genres.length;i++){
            if(snap.val().genres[i].toLowerCase() === query){
                tmp.push(snap.val())
                return;
            }
        }
    }

    return (
        <div className="search">
            <h2 className="search__title">Filtering by: {query}</h2>
                {books.map(book =>
                    <BookRow key={book.uid} book={book}/>
                )}
            <br></br>
        </div>
    );
}

export default Search;