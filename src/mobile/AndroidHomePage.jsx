//react
import * as React from "react";
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid, ScrollView, TouchableOpacity } from "react-native";
//components
import DrawerContent from "./drawers/DrawerContent.jsx";
//assets
import business1 from '../../assets/images/business1.jpg';
import business3 from '../../assets/images/business3.jpg';
import AndroidMenuBar from "./AndroidMenuBar.jsx";
import AppText from "./AppText.jsx";
import StatementText from "./StatementText";
//misc
import * as Constants from '../shared/constants';

function AndroidHomePage() {
    const drawer = React.useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
    const onContactDrawerDrawerButtonPress = () => {
      drawer.current.openDrawer()
    }

    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={() => <DrawerContent/>}
        style={{position: 'relative'}}
      >        
        <View style={{height: '13%'}}>
          <AndroidMenuBar onOpenDrawer={onContactDrawerDrawerButtonPress} /> 
        </View>  
        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={{alignItems: 'center', flexDirection: 'column'}}>
            <Image source={business3} resizeMode="cover" style={{height: 300, width: '100%'}}/>    
            <View style={{marginBottom: 32, alignItems: 'center', paddingTop: 20}}>
              <StatementText>We're a family here</StatementText>
              <StatementText>Some bullshit</StatementText>
            </View>  
            <View style={{paddingHorizontal: 16, paddingBottom: 32}}>
              <AppText>{Constants.fillerText}</AppText>  
            </View>  
            <Image source={business1} resizeMode="cover" style={{height: 300, width: '100%', paddingBottom: 32}}/> 
            <View style={{paddingHorizontal: 16, paddingTop: 32, paddingBottom: 32}}>
              <AppText>{Constants.fillerText}</AppText>  
            </View> 
          </ScrollView>
        </View>
      </DrawerLayoutAndroid>
    );
}

export default AndroidHomePage;

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