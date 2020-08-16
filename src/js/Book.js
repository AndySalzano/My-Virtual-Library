import React from 'react';
import { useParams } from "react-router-dom";
import '../css/Book.css';
import BlackBookIcon from '../assets/black_book_icon.svg';
import { Database, Storage } from '../firebase/firebase';

/**
 * This page is displayed if the user goes to a page using an unauthorized route
 */
function Book() {

    /* Gets the param from the URL, defined in routes */
    const { uid }  = useParams();
    const imgRef = React.createRef();

    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [genres, setGenres] = React.useState([])
    const [language, setLanguage] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [possesion, setPossesion] = React.useState(false)
    
    /* useEffect runs upon a condition. The final brackets emptied ensure it only runs once. *
     * Gets all the info from a Book given its reference in the Firebase Database & Storage  */
    React.useEffect(() => {
        Database.ref('/books/' + uid).once('value').then(function(snapshot) {
            console.log("%cBook: ", "color: blue;", snapshot.val());
            setTitle(snapshot.val().title)
            setAuthor(snapshot.val().author)
            setGenres(snapshot.val().genres)
            setLanguage(snapshot.val().language)
            setDescription(snapshot.val().description)
            setPossesion(snapshot.val().possesion)
        });

        Storage.ref(`images/${uid}`).getDownloadURL().then((url) => {
            imgRef.current.src = url
        })
    }, []) 

    return (
        <div className="book">
            <img ref={imgRef} className="book__img"></img>
            <div className="book__data">
                <p className="book__title">{title}</p>
                <p className="book__author">{author}</p>
                <div className="book__genresContainer">
                    {genres.map(genre => (
                        <div key={genre} className="book__genre">
                            <p>{genre}</p>
                        </div>
                    ))}
                </div>
                <p className="book__description">{description}</p>
                <hr />
                <p className="book__language">Language: {language}</p>
                <p className="book__language">In your possesion: {possesion ? "Yes" : "No"}</p>
                <div className="book__options">
                    <button className="upload__update">Edit info</button>
                    <button className="upload__delete">Delete book</button>
                </div>
            </div>
        </div>
    );
}

export default Book;