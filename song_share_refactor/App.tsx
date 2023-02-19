/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { firebaseApp, authProvider, auth } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Signin from './Signin'
import MainPage from './MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const Stack = createNativeStackNavigator();

export default function App() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    profilePicture: "",
    uid: 0
  });



  //component for signin button
  //Signin is responsible for switching to main page
  const SigninPage = ({ navigation, route }) => {
    return (
      <Button title="Sign In" onPress={() => {
        Signin(userDetails, setUserDetails, navigation, auth)
      }}> Sign In </Button>
    )
  }

  //Function to call MainPage component. Done this way to correctly pass userDetails
  const SwitchToMain = ({ navigation, route }) => {
    return (
      <MainPage userDetails={userDetails} />
    )
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={SigninPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="main"
          component={SwitchToMain}
          options={{ title: "Song Share" }}
        />

      </Stack.Navigator>
    </NavigationContainer>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePicture: {
    width: 50,
    height: 50,
  }
});
