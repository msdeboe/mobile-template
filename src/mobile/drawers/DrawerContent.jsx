import * as React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, DrawerLayoutAndroid } from "react-native";
import phoneImg from '../../../assets/images/Phone-Black.png'
import emailImg from '../../../assets/images/Email-Black.png'

const DrawerContent = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.info}>
        <Image source={phoneImg} style={{height: 48, width: 48}}/>
        <Text>(815)245-7655</Text>
      </View>  
      <View style={styles.info}>
        <Image source={emailImg} style={{height: 48, width: 48}}/>
        <Text style={{paddingLeft: 12}}>matt.deboer0@gmail.com</Text>
      </View>    
    </View>
  );

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    info: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: 'row',
      paddingBottom: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    }
  });