import React from 'react';
import '../css/UploadBook.css';
import BlackBookIcon from '../assets/black_book_icon.svg';
import DropDown from './DropDown';
import Categories from './categories';
import { Database, Storage } from '../firebase/firebase';
import { useHistory } from "react-router-dom";
import * as ROUTES from '../constants/constants';

function UploadBook() {

    let imgRef = React.useRef(null);
    const history = useHistory();

    const [imageAsFile, setImageAsFile] = React.useState('');
    const [showErrors, setErrors] = React.useState(false);
    const [userError, setUserError] = React.useState('');

    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [genres, setGenres] = React.useState([]);
    const [language, setLanguage] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [possesion, setPossesion] = React.useState(false);

    /* The following handle functions update the value of each input into the state variable each time the user changes any value */
    const handleImageChange = (file) => {
        /* Displays the uploaded image into the DOM */
        imgRef.current.src = URL.createObjectURL(file);
        setImageAsFile(imageFile => (file))
    }

    const handleTitleChange = e => setTitle(e.target.value)
    const handleAuthorChange = e => setAuthor(e.target.value)
    const handleSelectChange = e => setGenres(e)
    const handleLanguageChange = e => setLanguage(e.target.value)
    const handleDescriptionChange = e => setDescription(e.target.value)
    const handlePossesionChange = e => setPossesion(!possesion)
    

    /* Once the user pressed the submit button, some basic varible handlings are made and later the data is stored into Firebase Database & Firebase Storage */
    const handleSubmit = e => {
        e.preventDefault();
        let checking = checkInformation();
        if(checking !== "1"){
            setErrors(!showErrors)
            setUserError(checking)
        }else{
            let newBookRef = Database.ref('books').push()
            let strings = String(newBookRef).split("/")
            CreateFirebaseDatabaseBook(newBookRef, strings[strings.length - 1])
            if(imageAsFile !== ''){
                CreateFirebaseStorageBook(strings[strings.length - 1])
            }
            history.push({
                pathname: ROUTES.SAVED,
                search: `?id=${strings[strings.length - 1]}`,
            });
        }   
    }

    /* Handling of User errors and mistakes */
    const checkInformation = () => {
        if(title === "") return "The title cannot be empty";
        else if(author === "") return "The author cannot be empty";
        else if(genres.length === 0) return "You must select atleast one genre";
        else if(language === "") return "The language cannot be empty";
        else if(description === "") return "The description cannot be empty";
        return "1"
    }

    /* Stores the plain data into Firebase Database, in the "books" collection */
    const CreateFirebaseDatabaseBook = (ref, uid) => {
        let genresNames = [];
        genres.map(genre => genresNames.push(genre.value))
        ref.set({
            uid: uid,
            title: title, 
            author: author,
            imgName: title,
            genres: genresNames,
            language: language,
            description: description,
            possesion: possesion
        });
    }

    /* Stores the image with the title of the book as its name, in the /images folder  */
    const CreateFirebaseStorageBook = (uid) => {
        const uploadTask = Storage.ref(`/images/${uid}`).put(imageAsFile)
        uploadTask.on('state_changed', 
            (snapShot) => {
                /* Takes a snap shot of the process as it is happening */
                /*console.log(snapShot)*/
            }, (err) => {
                /* catches the errors */
                /*console.log(err)*/
            }, () => {
        })
    }
    
    return (
        <div className="uploadBook">
            <h2 className="uploadBook__title">Upload a Book</h2>
            <form id="uploadBookForm" className="uploadBook__book" onSubmit={e => handleSubmit(e)} noValidate>
                <div className="uploadBook_imageWrapper">
                    <img ref={imgRef} className="uploadBook__img" src={BlackBookIcon} alt="Cover"/>
                    <input id="UploadBookInput" className="uploadBook__imgInput" type="file" accept="image/*" placeholder="Upload an image of the book" onChange={e => handleImageChange(e.target.files[0])}/>
                    <label htmlFor="UploadBookInput" className="uploadBook__imgLbl">Upload a photo of your book</label>
                </div>
                <div className="uploadBook__dataWrapper">
                    <input className="uploadBook__dataInput" placeholder="The title of the book" onChange={handleTitleChange}/>
                    <input className="uploadBook__dataInput" placeholder="The author" onChange={handleAuthorChange}/>
                    <div className="uploadBook__select">
                        <DropDown title="Select the categories of this book" items={Categories} multiSelect onDropDown={handleSelectChange}/>
                    </div>
                    <input className="uploadBook__dataInput" placeholder="Language of the book" onChange={handleLanguageChange}/>
                    <textarea className="uploadBook__txtArea" rows="10" cols="50" defaultValue="Write the backcover or describe the book here" onChange={handleDescriptionChange}/>
                    <div className="uploadBook_toggle">
                        <label className="uploadBook__switch">
                            <input type="checkbox" onChange={handlePossesionChange} />
                            <span className="slider round"></span>
                        </label>
                        <p>I currently have this book with me</p>
                    </div>
                </div>
                <input type="submit" id="submit-form" className="uploadBook__hidden"/>
            </form>
            <div>
                {showErrors ? <div className="uploadBook__errors">
                                <p dangerouslySetInnerHTML={{ __html: userError}}></p>
                              </div> : null }
            </div>
            <div className="uploadBook__submit">
                <label className="uploadBook__submitLbl" htmlFor="submit-form">Add book!</label>
            </div>
            <br></br>
        </div>
    );
}

export default UploadBook;