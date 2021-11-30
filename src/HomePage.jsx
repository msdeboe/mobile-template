//react
import * as React from "react";
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid, ScrollView, TouchableOpacity } from "react-native";
import { useMediaQuery } from 'react-responsive'
//components
import DrawerContent from "./mobile/drawers/DrawerContent.jsx";
//assets
import business1 from '../assets/images/business1.jpg';
import business3 from '../assets/images/business3.jpg';
import MobileMenuBar from "./mobile/MobileMenuBar";
import AppText from "./shared/text/AppText";
import StatementText from "./shared/text/StatementText";
//misc
import * as Constants from './shared/constants';

function HomePage() {
    const drawer = React.useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
    const onContactDrawerDrawerButtonPress = () => {
      drawer.current.openDrawer()
    }

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    });

    return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{alignItems: 'center', flexDirection: 'column'}}>
      <Image source={business3} resizeMode="cover" style={{height: '80%', width: '100%'}}/>    
      <View style={{marginBottom: 32, alignItems: 'center', paddingTop: 20}}>
          <StatementText>We're a family hereee</StatementText>
          <StatementText>Some bullshit</StatementText>
      </View>  
      <View style={{paddingHorizontal: 16, paddingBottom: 32}}>
          <AppText>{Constants.fillerText}</AppText>  
      </View>  
      <Image source={business1} resizeMode="cover" style={{height: '80%', width: '100%', paddingBottom: 32}}/> 
      <View style={{paddingHorizontal: 16, paddingTop: 32, paddingBottom: 32}}>
          <AppText>{Constants.fillerText}</AppText>  
      </View> 
      </ScrollView>
    </View>
    );    
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      alignItems: 'center'
    },
    title: {
      fontSize: 48, 
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      opacity: .7,
      marginBottom: 32
    },
    bgImage: {
      flex: 1,
      justifyContent: "center",
      width: '100%'
    },
    menuBar: {
      position: 'absolute',
      bottom: 0,
      height: '8%',
      width: '100%'
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center"
    },
  });