import React from 'react';
import '../css/InfoPage.css';
import { Link } from "react-router-dom";
import * as ROUTES from '../constants/constants';

/**
 * This page is displayed once the user has done some CRUD operations with the books
 */
function InfoPage(props) {

    return (
        <div className="info">
            <h2 className="info__title">The information has been saved succesfully!</h2>
            <p className="info__explanation">Now you can check the new information in any moment you wish to do so.</p>
            <div className="info__buttons">
                <Link to={ROUTES.LANDING}>
                    <button className="info__btn">Go back to the Landing Page</button>
                </Link>
                <Link to={`${ROUTES.BOOK}/${props.uid}`}>
                    <button className="info__btn">Check the info of the book</button>
                </Link>
            </div>
        </div>
    );
}

export default InfoPage;