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
 
 
 
 const Login = () => {
   
 
   return (
    
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/logo_immopport1.webp')}
          containerStyle={styles.image}
          resizeMode="center"
        />

      </View>
      <Input placeholder='Matricul' />
      <Input placeholder='Mot de passe' />
      

    </SafeAreaProvider>
    
   );
 };
 
 const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
      aspectRatio: 1,
      width: 400,
      height:250,
      marginVertical:10,
      
      
    },
   });
 
 
 
 
 
 export default Login;
 