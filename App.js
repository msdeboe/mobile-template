import * as React from "react";
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AndroidHomePage from "./src/mobile/AndroidHomePage.jsx";
import WebHomePage from "./src/web/home-page/WebHomePage.jsx";
import { useFonts } from 'expo-font';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  });
  //<LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.gradient}></LinearGradient>
  if(Platform.OS === 'android' || Platform.OS === 'ios') {
    return (    
       <AndroidHomePage/>
    );
  } else if(Platform.OS === 'web') {
    return (
        <ScrollView style={{backgroundColor: '#3C1B43'}} contentContainerStyle={styles.scrollView}>
          <View style={{height: '100%', paddingHorizontal: 50}}>
            <WebHomePage/>
          </View>           
        </ScrollView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}
      >
        <Text>Universal React with Expos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: 0,
  },
  scrollView: {
    position: 'relative',
    height: '100%',
    width: '100%',
  }
});