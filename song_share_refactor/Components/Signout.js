import auth from '@react-native-firebase/auth';
import { firebaseApp, authProvider } from "./firebaseConfig";
import { useState, useEffect } from "react";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Button} from 'react-native'

//userDetails and setUserDetails expected to be passed in from App.js
//Signin is responsible for switching to main page

//Google Authentication Documentation: https://firebase.google.com/docs/auth/web/google-signin?authuser=0#handle_the_sign-in_flow_with_the_firebase_sdk

export default function Signout({userDetails, setUserDetails, navigation}) {

    async function signoutUser() {
        // Sign User out
        await GoogleSignin.signOut();

        console.log(setUserDetails)

        setUserDetails({
            userName: "",
            email: "",
            profilePicture: "",
            uid: 0
        })
        
        navigation.navigate("signup")
    }

    return (
        <Button title="Sign Out" onPress={() => {
            signoutUser()
        }}> Sign out </Button>
    )


}