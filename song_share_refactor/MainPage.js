import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signout from './Signout';

export default function MainPage({ userDetails, setUserDetails, navigation, route }) {


    console.log(userDetails)
    console.log(setUserDetails)

    return (
        <View style={styles.container}>
            
            <Text>
                Username: {userDetails.userName} {"\n"}
                Email: {userDetails.email}
            </Text>
            <Image style={styles.profilePicture} source={{ uri: userDetails.profilePicture }} />

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


