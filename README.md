# My Virtual Library

My Virtual Library is a website application designed to store all the books a person may have in his physical library, so he can keep track of them. Since this is an Open Source code with no aim at obtaining benefits, in order to use this application, the user must create himself the backend where all the information will be stored. Following this short-written tutorial, it should not take more than 5-10 minutes. 

Also, this can be considered as a visual guide about how to deploy a small application for personal use. 
*	The website has been designed using React.js (https://reactjs.org/) 
*	The information is stored in Google Firebase. (https://console.firebase.google.com/) 

# Steps to use the application
## STEP 1: Create the project
1st. Clone the project from the GitHub repository into your local system, using this command in the console (from the root directory): git clone https://github.com/AndySalzano/My-Virtual-Library.git

2nd. Create a new project in Google Firebase with the desired name. 

3rd. Once is created, add a Web app to the project, do not select Firebase Hosting checkbox, write the name you wish, and from the Firebase SDK code, copy the variable firebaseConfig.

4th. In the project root, create a new file called “.env”. In this file, copy the data from the variable firebaseConfig in a way that it is saved with the following constants. Change the values between quotes for your values. Example:

```
REACT_APP_API_KEY="myapikey"
REACT_APP_AUTH_DOMAIN="mydomain.firebaseapp.com"
REACT_APP_DATABASE_URL="mydatabaseurl"
REACT_APP_PROJECT_ID="myid"
REACT_APP_STORAGE_BUCKET="mystoragebucket.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="mymessagingsenderid"
REACT_APP_APP_ID="myappid"
REACT_APP_MEASUREMENT_ID="mymeasurementid"
```

5th. In the Realtime Database section, enable the feature in locked mode.

6th. In the Storage section, enable the feature considering your nearest location.

Now that the backend is ready to be used according to your own project, it is time to deploy the website to start using it

## STEP 2: Deploy the website
1st. Run the following code in the console: firebase login. Login with the email associated to your firebase account.

2nd. Run the following code in the console: firebase init. Say yes to proceed. When choosing which features do you want, choose only Hosting. When choosing a project, choose an existing project, and then use the project with the name you used when creating the project in Firebase. When choosing the public directory, type “build”. When choosing the configuration as a single-page app, write “y”.

3rd. Run the following code in the console: npm install.

4th. Run the following code in the console: npm run build.

5th. Run the following code in the console: firebase deploy.

Congratulations, now the website is uploaded and ready to be used by you. Since the design is very straightforward, with a quick view of the different features in the header there might not further problems to understand how to add, list and filters different books.



