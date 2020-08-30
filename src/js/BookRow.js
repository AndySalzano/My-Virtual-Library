import React from 'react';
import '../css/BookRow.css';
import BlackBookIcon from '../assets/black_book_icon.svg';
import { Storage } from '../firebase/firebase';

/**
 * This page displays a list of all the books saved by the user
 */
function BookRow(props) {

    const imgRef = React.createRef()

    React.useEffect(() => {
        try{
            Storage.ref(`images/${props.book.uid}`).getDownloadURL().then((url) => {
                imgRef.current.src = url
            })
        }catch(e){
            imgRef.current.src = BlackBookIcon
        }
    })

    return (
        <div className="bookrow">
            <img ref={imgRef} className="bookrow__img" src={BlackBookIcon} alt="Cover"/>
            <div className="bookrow__data">
                <div className="bookrow__top">
                    <div className="bookrow__topleft">
                        <p className="bookrow__title">{props.book.title}</p>
                        <p className="bookrow__author">{props.book.author}</p>
                    </div>
                    <div className="bookrow__genres">
                        {props.book.genres.map(genre => (
                            <div key={genre} className="bookrow__genre">
                                <p>{genre}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <p className="bookrow__description">{props.book.description}</p>
            </div>
        </div>
    );
}

export default BookRow;