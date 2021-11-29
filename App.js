import * as React from "react";
import '@expo/match-media';
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MobileHomePage from "./src/mobile/MobileHomePage.jsx";
import WebHomePage from "./src/desktop/home-page/WebHomePage.jsx";
import HomePage from "./src/HomePage";
import { useFonts } from 'expo-font';
import { useMediaQuery } from 'react-responsive'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isTabletOrMobileDevice = useMediaQuery({
      query: '(max-device-width: 1224px)'
  });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  // console.log(isBigScreen)
  // console.log(isTabletOrMobile)
  // console.log(isPortrait)
  // console.log(isRetina)
  
  // if(Platform.OS === 'web' || Platform.OS === 'android') {
  //   if(isTabletOrMobile) {
  //     return (    
  //       <MobileHomePage/>
  //     );
  //   }
  //   else {
  //     return (
  //       <ScrollView style={{backgroundColor: '#3C1B43'}} contentContainerStyle={styles.scrollView}>
  //         <View style={{height: '100%', paddingHorizontal: 50}}>
  //           <WebHomePage/>
  //         </View>           
  //       </ScrollView>
  //     );
  //   }
  // } 
  // return (<HomePage/>);

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    // return (
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={HomePage} options={{title: 'Poop'}} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // );

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} options={{headerTitle: 'MattD Development'}} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
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