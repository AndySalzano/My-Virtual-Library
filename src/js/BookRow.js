import React from 'react';
import '../css/BookRow.css';

/**
 * This page displays a list of all the books saved by the user
 */
function BookRow(props) {

    return (
        <div className="bookrow">
            <p>{props.book.title}</p>
        </div>
    );
}

export default BookRow;