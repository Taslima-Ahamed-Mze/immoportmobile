import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/Screens/LoginScreen'
import HomeScreen from './src/Screens/HomeScreen'
import AuthContext from './src/Contexts/AuthContext'
import ProspectionScreen from './src/Screens/ProspectionScreen'
import DocumentScreen from './src/Screens/DocumentScreen'
import ProspectionFormScreen from './src/Screens/ProspectionFormScreen'
import DetailProspect from './src/Screens/DetailProspectScreen'
import AgendaScreen from './src/Screens/AgendaScreen'

const Stack = createNativeStackNavigator()

function App() {
  const user = React.useContext(AuthContext)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bonjour' }} />
        <Stack.Screen name="Agenda" component={AgendaScreen} options={{ title: 'Agenda' }} />
        <Stack.Screen name="Document" component={DocumentScreen} options={{ title: 'Documents' }} />
        <Stack.Screen name="Prospect" component={ProspectionFormScreen} options={{ title: 'Créer un prospect' }} />
        <Stack.Screen name="Prospections" component={ProspectionScreen} />
        <Stack.Screen name="DetailProspect" component={DetailProspect} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App