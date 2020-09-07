import React from 'react';
import {Link} from "react-router-dom";
import '../css/Footer.css';
import * as ROUTES from '../constants/constants';

/**
 * Handles the Footer of the website in the bottom of the website, for each page.
 */
function Footer() {
  return (
    <div className="footer">
        <div className="footer__links">
            <div className="footer__subtitle">
                Links
            </div>
            <Link className="footer__link" to={ROUTES.LANDING}>
                <div>Home</div>
            </Link>
            
            <Link className="footer__link" to={ROUTES.UPLOAD}>
                 <div>Add book</div>
            </Link>
            
            <Link className="footer__link" to={ROUTES.LISTALL}>
                 <div>List all</div>
            </Link>
            <a className="footer__link" rel="noopener noreferrer" target="_blank" href={ROUTES.GITHUB}>Github</a>
        </div>
        <div className="footer__info">
            <div className="footer__name">My Virtual Library</div>
            <p>Andreu Salzano</p>
            <p>andysalzano@hotmail.es</p>
            <p>Copyright © 2020 My Virtual Library | Andreu Salzano</p>
        </div>
    </div>
  );
}

export default Footer;