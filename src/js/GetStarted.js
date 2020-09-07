import React from 'react';
import '../css/GetStarted.css';

/**
 * Get Started page explains how the user can use this website using its own backend
 */
function GetStarted() {

    return (
        <div className="getstarted">
            <p>
                My Virtual Library is a website application designed to store all the books a person may have in his physical library, so he can keep track of them.
                Since this is an Open Source code with no aim at obtaining benefits, in order to use this application the user must create himself the backend where all
                the information will be stored. Following this short written tutorial, it should not take more than 5-10 minutes. Also, this can be considered as a visual
                guide about how to deploy a small application for personal use.

                The website has been designed using React.js (https://reactjs.org/)
                The information is stored in Google Firebase. (https://console.firebase.google.com/)

                To create the database, first it is necessary to create a new project, with the name it is desired. Once is created, add a website app to the project, and
                copy the variable named firebaseConfig into...


            </p>
        </div>
    );
}

export default GetStarted;