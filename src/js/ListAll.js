import React from 'react';
import '../css/ListAll.css';
import { Database } from '../firebase/firebase';
import BookRow from './BookRow';


/**
 * This page displays a list of all the books saved by the user
 */
function ListAll() {

    const [books, setBooks] = React.useState([])

    /**
     * React.useEffect runs upon a condition. Here it gets all the books from the collection in Database
     */
    React.useEffect(() => {
        Database.ref('books').once('value', (snapshot) => {
            let tmp = [];
            snapshot.forEach(snap => {
                tmp.push(snap.val());
            });
            setBooks(tmp); 
        });
    }, [])

    return (
        <div className="listall">
            <h2 className="listall__title">List of all your books</h2>
            {books.map(book =>
                <BookRow key={book.uid} book={book}/>
            )}
            <br></br>
        </div>
    );
}

export default ListAll;