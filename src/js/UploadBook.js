import React from 'react';
import '../css/UploadBook.css';
import BlackBookIcon from '../assets/black_book_icon.svg';
import DropDown from './DropDown';
import Categories from './categories';

function UploadBook() {

    let imgRef = React.createRef()
    const readURL = (file) => {
        imgRef.current.src = URL.createObjectURL(file);
    }
    
    return (
        <div className="uploadBook">
            <h2 className="uploadBook__title">Upload a Book</h2>
            <form className="uploadBook__book">
                <div className="uploadBook_imageWrapper">
                    <img ref={imgRef} className="uploadBook__img" src={BlackBookIcon} alt="Cover"/>
                    <input id="UploadBookInput" className="uploadBook__imgInput" type="file" accept="image/*" placeholder="Upload an image of the book" onChange={e => readURL(e.target.files[0])}/>
                    <label htmlFor="UploadBookInput" className="uploadBook__imgLbl">Upload a photo of your book</label>
                </div>
                <div className="uploadBook__dataWrapper">
                    <input className="uploadBook__dataInput" placeholder="The title of the book"/>
                    <input className="uploadBook__dataInput" placeholder="The author"/>
                    <div className="uploadBook__select">
                        <DropDown title="Select the categories of this book" items={Categories} multiSelect />
                    </div>
                    <input className="uploadBook__dataInput" placeholder="Language of the book"/>
                    <textarea className="uploadBook__txtArea" rows="10" cols="50" defaultValue="Write the backcover or describe the book here"/>
                    <div className="uploadBook_toggle">
                        <label className="uploadBook__switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        <p>I currently have this book with me</p>
                    </div>
                </div>
                <input type="submit" id="submit-form" className="uploadBook__hidden"/>
            </form>
            <div className="uploadBook__submit">
                <label className="uploadBook__submitLbl" htmlFor="submit-form">Add book!</label>
            </div>
            <br></br>
        </div>
    );
}

export default UploadBook;