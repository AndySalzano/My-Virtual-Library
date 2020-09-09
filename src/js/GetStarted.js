import React from 'react';
import '../css/GetStarted.css';

/**
 * Get Started page explains how the user can use this website using its own backend
 */
function GetStarted() {

    return (
        <div className="getstarted">
            <div className="getstarted__wrapper">
                <h2>My Virtual Library</h2>
                <br />
                <p>
                    My Virtual Library is a website application designed to store all the books a person may have in his physical library, so he can keep track of them.
                    Since this is an Open Source code with no aim at obtaining benefits, in order to use this application the user must create himself the backend where all
                    the information will be stored. Following this short written tutorial, it should not take more than 5-10 minutes. 
                </p>
                <br />
                <p>
                    Also, this can be considered as a visual
                    guide about how to deploy a small application for personal use.
                </p>
                <br />
                <ul class="getstarted__ul">
                    <li> The website has been designed using React.js. <a className="getstarted__link" href="https://reactjs.org/">(https://reactjs.org/)</a> </li>
                    <li> The information is stored in Google Firebase. <a className="getstarted__link" href="https://console.firebase.google.com/">(https://console.firebase.google.com/)</a></li>
                </ul>
                <br />
                <h3>Steps to use the application</h3>
                <h4>STEP 1: Create the project</h4>
                <ul class="getstarted__steps">
                    <li>Clone the project from the GitHub repository using this command in the console: <span>git clone https://github.com/AndySalzano/My-Virtual-Library.git</span>.</li>
                    <li>Create a new project in Google Firebase with the desired name.</li>
                    <li>Once is created, add a Web app to the project, do not select Firebase Hosting checkbox, write the name you wish, and from the Firebase SDK code, copy the variable firebaseConfig.</li>
                    <li>In the project root, create a new file called “.env”. In this file, copy the data from the variable firebaseConfig in a way that it is saved with the following constants. Change the values between quotes for your values. Example:</li>
                    <ul className="getstarted__code">
                        <li className="getstarted__codeline">REACT_APP_API_KEY="myapikey"</li>
                        <li className="getstarted__codeline">REACT_APP_AUTH_DOMAIN="mydomain.firebaseapp.com"</li>
                        <li className="getstarted__codeline">REACT_APP_DATABASE_URL="mydatabaseurl"</li>
                        <li className="getstarted__codeline">REACT_APP_PROJECT_ID="myid"</li>
                        <li className="getstarted__codeline">REACT_APP_STORAGE_BUCKET="mystoragebucket.appspot.com"</li>
                        <li className="getstarted__codeline">REACT_APP_MESSAGING_SENDER_ID="mymessagingsenderid"</li>
                        <li className="getstarted__codeline">REACT_APP_APP_ID="myappid"</li>
                        <li className="getstarted__codeline">REACT_APP_MEASUREMENT_ID="mymeasurementid"</li>
                    </ul>
                    <li>In the Realtime Database section, enable the feature in locked mode. In the rules section, set both read and write to true.</li>
                    <li>In the Storage section, enable the feature considering your nearest location. In the rules section, allow read, write;</li>
                </ul>
                <p>
                    Now that the backend is ready to be used according to your own project, it is time to deploy the website to start using it
                </p>
                <h4>STEP 2: Deploy the website</h4>
                <ul class="getstarted__steps">
                    <li>Run the following code in the console: <span>firebase login</span>. Login with the email associated to your firebase account.</li>
                    <li>Run the following code in the console: <span>firebase init</span>. Say yes to proceed. When choosing which features do you want, choose only Hosting. When choosing a project, choose an existing project, and then use the project with the name you used when creating the project in Firebase. When choosing the public directory, type “build”. When choosing the configuration as a single-page app, write “y”.</li>
                    <li>Run the following code in the console: <span>npm install</span>.</li>
                    <li>Run the following code in the console: <span>npm run build</span>.</li>
                    <li>Run the following code in the console: <span>firebase deploy</span>.</li>
                </ul>

                <p>
                Congratulations, now the website is uploaded and ready to be used by you. Since the design is very straightforward, with a quick view of the different features in the header there might not further problems to understand how to add, list and filters different books.
                </p>
            </div>
        </div>
    );
}

export default GetStarted;