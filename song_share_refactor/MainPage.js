import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signout from './Signout';
import Appbar from './Appbar';

export default function MainPage({ userDetails, setUserDetails, navigation, route }) {
    return (

            <View>
                <Text>
                    Username: {userDetails.userName} {"\n"}
                    Email: {userDetails.email}
                </Text>
                <Signout userDetails= {userDetails} setUserDetails={setUserDetails} navigation={navigation} route={route} />
            </View>
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


