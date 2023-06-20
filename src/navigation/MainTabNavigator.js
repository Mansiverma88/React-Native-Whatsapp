import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotImplementedScreen from '../screens/NotImplementedScreen'
import ChatsScreen from '../screens/ChatsScreen';
import Settings from '../screens/Settings';
import ContactScreen from '../screens/ContactScreen';
import {Ionicons} from '@expo/vector-icons';

const Tab=createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName="Chats">
            <Tab.Screen name='Status' component={NotImplementedScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
                ),
              }}/>
            <Tab.Screen name='Calls' component={ContactScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="call-outline" size={size} color={color} />
                ),
              }}/>
            <Tab.Screen name='Camera' component={NotImplementedScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="camera-outline" size={size} color={color} />
                ),
              }}/>
            <Tab.Screen name='Chats' component={ChatsScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="logo-whatsapp" size={size} color={color} />
                ),
              }}/>
            <Tab.Screen name='Settings' component={Settings}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings-outline" size={size} color={color} />
                ),
              }}/>
        </Tab.Navigator>
    );
  }

export default MainTabNavigator