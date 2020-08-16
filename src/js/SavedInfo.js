import React from 'react';
import { useLocation } from "react-router-dom";
import ErrorPage from './ErrorPage';
import '../css/SavedInfo.css';
import qs from 'qs'
import InfoPage from './InfoPage';

/**
 * This page is displayed once the user has done some CRUD operations with the books
 */
function SavedInfo() {

    /* If the route has no ID param, it means the user has tried to hardcode the route. Therefore, an error message is displayed */
    const location = useLocation();
    const uid = qs.parse(location.search, { ignoreQueryPrefix: true }).id

    return (
        <div className="savedInfo">
            {uid ? <InfoPage uid={uid} /> : <ErrorPage />}
        </div>
    );
}

export default SavedInfo;