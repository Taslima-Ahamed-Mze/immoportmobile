/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator ,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Image } from "@rneui/themed";



const App = () => {
  

  return (
    <SafeAreaProvider>
      <Image
        source={{ uri: 'https://www.latelier-immo.fr/public/img/medium/f948bd5e2b38e4853948994e2c7c9eab.jpg' }}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input placeholder='Email'/>
      <Input placeholder='Mot de passe'/>

      
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
  item: {
    aspectRatio: 1,
    width: '20%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  });





export default App;
