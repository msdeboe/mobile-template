//react
import * as React from "react";
import '@expo/match-media';
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid, ScrollView, TouchableOpacity } from "react-native";
import MobileHomePage from "./src/mobile/MobileHomePage.jsx";
import HomePage from "./src/HomePage";
import { useFonts } from 'expo-font';
import { useMediaQuery } from 'react-responsive'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LargeScreenMenu from "./src/large-screen/menu/LargeScreenMenu.jsx";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/images/madLogo.png'
import AppHeaderText from "./src/large-screen/home-page/AppHeaderText.jsx";

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

    function LogoTitle() {
      return (
        <Image
          style={{ width: 50, height: 50 }}
          source={faBars}
        />
      );
    }

    if(isBigScreen) {
        return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={HomePage} 
              options={({ navigation, route }) => ({
                headerLeft: props => <Image source={logo} style={{marginLeft: 100, marginRight: 50, width: 50, height: 50}}/>,
                headerRight: props => <LargeScreenMenu />,                
                headerTitle: props => <AppHeaderText style={{marginLeft: '15%'}}>MaD Designs</AppHeaderText>,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomePage} options={{headerTitle: 'MattD Designs'}} />
          </Drawer.Navigator>
        </NavigationContainer>
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