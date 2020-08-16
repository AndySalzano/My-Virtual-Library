import React from 'react';
import '../css/ErrorPage.css';
import { Link } from "react-router-dom";
import * as ROUTES from '../constants/constants';

/**
 * This page is displayed if the user goes to a page using an unauthorized route
 */
function ErrorPage() {

    return (
        <div className="error">
            <h2 className="error__title">Wops! Looks like the page you were looking for does not exist!</h2>
            <Link to={ROUTES.LANDING}>
                <button className="error__btn">Go back to the Landing Page</button>
            </Link>
        </div>
    );
}

export default ErrorPage;