import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import '../css/Book.css';
import BlackBookIcon from '../assets/black_book_icon.svg';
import { Database, Storage } from '../firebase/firebase';
import * as ROUTES from '../constants/constants';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/**
 * This page is displayed if the user goes to a page using an unauthorized route
 */
function Book() {

    /* Gets the param from the URL, defined in routes */
    const { uid }  = useParams();
    const imgRef = React.useRef(null);
    const history = useHistory();

    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [genres, setGenres] = React.useState([])
    const [language, setLanguage] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [possesion, setPossesion] = React.useState(false)

    /* Modal handling */
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    /* useEffect runs upon a condition. The uid in the final brackets ensures it updates if the uid its updated. *
     * Gets all the info from a Book given its reference in the Firebase Database & Storage  */
    React.useEffect(() => {
        try{
            Database.ref('/books/' + uid).once('value').then(function(snapshot) {
                console.log("%cBook: ", "color: blue;", snapshot.val());
                setTitle(snapshot.val().title)
                setAuthor(snapshot.val().author)
                setGenres(snapshot.val().genres)
                setLanguage(snapshot.val().language)
                setDescription(snapshot.val().description)
                setPossesion(snapshot.val().possesion)
            });
        }catch(e){

        }

        try{
            Storage.ref(`images/${uid}`).getDownloadURL().then((url) => {
                imgRef.current.src = url
            })
        }catch(e){
            imgRef.current.src = BlackBookIcon
        }
    }, [uid]) 

    const updateBook = () => {
        history.push({
            pathname: `${ROUTES.EDIT}/${uid}`,
        });
    }

    const deleteBook = () => {
        Database.ref('/books/' + uid).remove()
        try{
            Storage.ref(`images/${uid}`).delete().then(function() {
                // File deleted successfully
            }).catch(function(error) {
                // Uh-oh, an error occurred!
            });
        }catch(e){
            console.log(e)
        }
        history.push({
            pathname: ROUTES.LANDING,
            search: '?action=delete',
        });
    }

    return (
        <div className="book">
            <img ref={imgRef} className="book__img" alt="cover"></img>
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
                    <button className="upload__update" onClick={updateBook}>Edit info</button>
                    <button className="upload__delete" onClick={handleShow}>Delete book</button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete book</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this book?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Go back
                </Button>
                <Button variant="danger" onClick={deleteBook}>
                    Delete book
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Book;