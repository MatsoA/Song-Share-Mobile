import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MainPage from './MainPage';
import ManageFriends from './ManageFriends'



function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}


export default function MainDrawer({ userDetails, setUserDetails, navigation, route }) {
  const Drawer = createDrawerNavigator();
  
  const RenderMainContent = ({navigation, route}) => (
    <MainPage userDetails = {userDetails} setUserDetails = {setUserDetails} navigation = {navigation} route = {route} />
  )

  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="Feed" component={RenderMainContent} 
      options = {{
        headerRight:() => (
          <Image style = {{ width: 50, height: 50}} source={{ uri: userDetails.profilePicture }} />
        )
      }}/>
      <Drawer.Screen name="Add/Remove Friends" component={ManageFriends} />
    </Drawer.Navigator>
  );
}

