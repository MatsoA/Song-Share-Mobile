import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect, signInwithCredntial } from "firebase/auth";
import { firebaseApp, authProvider } from "./firebaseConfig";
import { useState, useEffect } from "react";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//userDetails and setUserDetails expected to be passed in from App.js
//Signin is responsible for switching to main page

//Google Authentication Documentation: https://firebase.google.com/docs/auth/web/google-signin?authuser=0#handle_the_sign-in_flow_with_the_firebase_sdk

export default function Signin(userDetails, setUserDetails, navigation, auth) {

    //needed for signInWithPopup

    //Object to manage info about current user
    //Expected to be populated by Signin
    //TODO: handle uid

    //use effect hook allows us to handle behavior after promise correctly (useEffect waits for a change)
    //https://upmostly.com/tutorials/how-to-handle-promises-in-react

    //wrapper for popup
    const signinUser = async () => {

        GoogleSignin.signIn()
            .then((response) => { handleCredentialResponse(response) })

        function handleCredentialResponse(response) {
            // Build Firebase credential with the Google ID token.
            const idToken = response.credential;
            const credential = GoogleAuthProvider.credential(idToken);

            setUserDetails({
                userName: user.displayName,
                email: user.email,
                profilePicture: user.photoURL,
                uid: user.uid
            });

            navigation.navigate("main")

            // Sign in with credential from the Google user.
            signInWithCredential(auth, credential).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The credential that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }

    }

    signinUser()

}