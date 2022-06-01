import * as React from 'react'
import { Image, Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/Screens/LoginScreen'
import HomeScreen from './src/Screens/HomeScreen'
import AuthContext from './src/Contexts/AuthContext'
import CalendarScreen from './src/Screens/CalendarScreen'

const Stack = createNativeStackNavigator()

function App() {
  const user = React.useContext(AuthContext)
  return (
    <NavigationContainer>
      <Image
        style={{ width: 50, height: 50, alignSelf: "center" }}
        source={require('./Assets/images/logo.webp')}
      />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bonjour' }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Calendrier' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App