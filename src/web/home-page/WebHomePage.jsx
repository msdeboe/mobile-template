import * as React from "react";
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import WebMenu from "../menu/WebMenu";
import AppHeaderText from './AppHeaderText';
import StatementText from './StatementText';
import bgImage from '../../../assets/images/background.jpg';

function WebHomePage() { 
    return (
      <View style={{height: '100%'}}>
        <View style={styles.topbar}>
          <View style={{flex: 3, margin: 'auto'}}>
            <AppHeaderText>MaD Industries</AppHeaderText>
          </View>
          <WebMenu/>
        </View>
        <View style={{marginBottom: 30}}>
          <StatementText>Some bullshit</StatementText>
          <StatementText>We're a family here</StatementText>
        </View>
        <Image style={{height: 1000}} source={bgImage} resizeMode='cover'/>
      </View>      
    );
}

export default WebHomePage;

const styles = StyleSheet.create({
    topbar: {
        height: 80, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 50
        // borderColor: 'white',
        // borderWidth: 5
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    headerText: {
      fontSize: 48,
      margin: 'auto',
      backgroundColor: 'transparent',
      color: '#ffffff',
    }
  });