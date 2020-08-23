import React from 'react';
import '../css/EditBook.css';
import { useParams } from "react-router-dom";
import { Database, Storage } from '../firebase/firebase';
import BlackBookIcon from '../assets/black_book_icon.svg';
import DropDown from './DropDown';
import Categories from './categories';

/**
 * Page that allows to update the data from a book
 */
function EditBook() {

    const imgRef = React.useRef(null)
    const { uid }  = useParams();

    const [imageAsFile, setImageAsFile] = React.useState('');
    const [showErrors, setErrors] = React.useState(false);
    const [userError, setUserError] = React.useState('');

    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [genres, setGenres] = React.useState([])
    const [language, setLanguage] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [possesion, setPossesion] = React.useState(false)

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
           /* CreateFirebaseDatabaseBook(newBookRef)
            if(imageAsFile !== ''){
                CreateFirebaseStorageBook(strings[strings.length - 1])
            }
            history.push({
                pathname: ROUTES.SAVED,
                search: `?id=${strings[strings.length - 1]}`,
            });*/
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

    return (
        <div className="edit">
            <h2 className="editBook__title">Upload a Book</h2>
            <form id="editBookForm" className="editBook__book" onSubmit={e => handleSubmit(e)} noValidate>
                <div className="editBook_imageWrapper">
                    <img ref={imgRef} className="editBook__img" src={BlackBookIcon} alt="Cover"/>
                    <input id="editBookInput" className="editBook__imgInput" type="file" accept="image/*" placeholder="Upload an image of the book" onChange={e => handleImageChange(e.target.files[0])}/>
                    <label htmlFor="editBookInput" className="editBook__imgLbl">Upload a photo of your book</label>
                </div>
                <div className="editBook__dataWrapper">
                    <input className="editBook__dataInput" placeholder="The title of the book" onChange={handleTitleChange}/>
                    <input className="editBook__dataInput" placeholder="The author" onChange={handleAuthorChange}/>
                    <div className="editBook__select">
                        <DropDown title="Select the categories of this book" items={Categories} multiSelect onDropDown={handleSelectChange}/>
                    </div>
                    <input className="editBook__dataInput" placeholder="Language of the book" onChange={handleLanguageChange}/>
                    <textarea className="editBook__txtArea" rows="10" cols="50" defaultValue="Write the backcover or describe the book here" onChange={handleDescriptionChange}/>
                    <div className="editBook_toggle">
                        <label className="editBook__switch">
                            <input type="checkbox" onChange={handlePossesionChange} />
                            <span className="slider round"></span>
                        </label>
                        <p>I currently have this book with me</p>
                    </div>
                </div>
                <input type="submit" id="submit-form" className="editBook__hidden"/>
            </form>
            <div>
                {showErrors ? <div className="editBook__errors">
                                <p dangerouslySetInnerHTML={{ __html: userError}}></p>
                              </div> : null }
            </div>
            <div className="editBook__submit">
                <label className="editBook__submitLbl" htmlFor="submit-form">Add book!</label>
            </div>
            <br></br>
        </div>
    );
}

export default EditBook;