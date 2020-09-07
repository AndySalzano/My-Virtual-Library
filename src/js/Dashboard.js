import React from 'react';
import qs from 'qs';
import { useLocation } from "react-router-dom";
import '../css/Dashboard.css';
import Message from './Message';
import * as ROUTES from '../constants/constants';

/**
 * Landing Page, the only interaction is with the buttons
 */
function Dashboard() {

    const location = useLocation();
    const action = qs.parse(location.search, { ignoreQueryPrefix: true }).action

    return (
        <div className="dashboard">
            {action ? <Message text="Book deleted succesfully" /> : null}
            <h2 className="dashboard__title">Welcome to My Virtual Library</h2>
            <p className="dashboard__explanation">Here you will be able to save, manage and update all the books you got in dissarray in your physical library at home. 
                Do you want to have an online record where you can save each book you have, and keep track of them? 
                You have come to the perfect place. 
            </p>
            <div className="dashboard__buttons">
                <a className="dashboard__btn" href={ROUTES.GETSTARTED}>Get Started</a>
                <a className="dashboard__btn" rel="noopener noreferrer" target="_blank" href={ROUTES.GITHUB}>Go to GitHub</a>
            </div>
            <div className="dashboard__subtitle">With this application you will be able to:</div>
            <div className="dashboard__features">
                <ul>
                    <li>●   Add any record of book you have in your physical library so you don't forget you have it in your possesion already</li>
                    <li>●   Add extra information about the book you may find relevant to write down, so you can consult it whenever you want</li>
                    <li>●   Mark if you currently have the book in your posession, or you have lend it to someone, so you can remind them to give it back to you</li>
                    <li>●   Search wether you already have a book by looking for its title, genre, description, etc...</li>
                    <li>●   And of course, see a complete list of all the books that belong to your awesome private library</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;