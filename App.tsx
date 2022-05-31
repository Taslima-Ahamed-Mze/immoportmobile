import * as React from 'react';
import { Image, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/Login';
import HomeScreen from './src/Screens/Home';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

function LogoTitle() {
  return (
    <View>

      
      <Text>Hello</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
          <Image
      style={{ width: 50, height: 50 }}
      source={require('./Assets/images/logo_immopport1.webp')}
    />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="LoginScreen" component={HomeScreen}/>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;