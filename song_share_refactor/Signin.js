import auth from '@react-native-firebase/auth';
import { firebaseApp, authProvider } from "./firebaseConfig";
import { useState, useEffect } from "react";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//userDetails and setUserDetails expected to be passed in from App.js
//Signin is responsible for switching to main page

//Google Authentication Documentation: https://firebase.google.com/docs/auth/web/google-signin?authuser=0#handle_the_sign-in_flow_with_the_firebase_sdk

export default function Signin(userDetails, setUserDetails, navigation) {

    //needed for signInWithPopup

    //Object to manage info about current user
    //Expected to be populated by Signin
    //TODO: handle uid

    //use effect hook allows us to handle behavior after promise correctly (useEffect waits for a change)
    //https://upmostly.com/tutorials/how-to-handle-promises-in-react

    //wrapper for popup

    GoogleSignin.configure({
        webClientId: '395459585745-veeqnqismosv23sqnto3l3fbk6rcd9r8.apps.googleusercontent.com',
        offlineAccess: true,
    });

    async function signinUser() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        
        // Sign-in the user with the credential
        auth().signInWithCredential(googleCredential);

        const currentUser = await GoogleSignin.getCurrentUser();
        console.log(currentUser)

        setUserDetails({
            userName: currentUser.user.name,
            email: currentUser.user.email,
            profilePicture: currentUser.user.photo,
            uid: currentUser.user.id
        })
        
    }

    signinUser()

    navigation.navigate("main")

}