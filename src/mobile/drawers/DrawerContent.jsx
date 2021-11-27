import * as React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, FlatList, Linking } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import DrawerText from "./DrawerText";
import logo from '../../../assets/images/madLogo.png';

function DrawerContent()  {
  return (
    <View style={{flex: 1, height: '100%', justifyContent: 'space-around'}}>
      <View style={[styles.linksContainer, styles.navigationContainer]}> 
        <TouchableOpacity style={styles.info}>
          <DrawerText style={{paddingLeft: 12}}>Products</DrawerText>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.info}>
          <DrawerText style={{paddingLeft: 12}}>About</DrawerText>
        </TouchableOpacity>     
        <TouchableOpacity style={styles.info}>
          <DrawerText style={{paddingLeft: 12}}>Contact</DrawerText>
        </TouchableOpacity> 
      </View>
      <View style={[styles.logoContainer, styles.navigationContainer]}>
        <Image source={logo} style={styles.logoImage}/>
      </View>
      <View style={[styles.socialContainer, styles.navigationContainer]}> 
        <TouchableOpacity style={styles.info}>
          <FontAwesomeIcon icon={faInstagram} size={ 40 }/>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.info}>
          <FontAwesomeIcon icon={faFacebook} size={ 40 } />
        </TouchableOpacity>                   
        <TouchableOpacity style={styles.info}>
          <FontAwesomeIcon icon={faTwitter} size={ 40 } />
        </TouchableOpacity>  
      </View>
    </View>
  )
}

export default DrawerContent;

const styles = StyleSheet.create({
    linksContainer: {
      flex: 4,
      alignItems: "center",
      justifyContent: "flex-end",
      padding: 16,
    },
    socialContainer: {
      flex: 4,
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 16,
    },
    logoContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    info: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: 'row',
      paddingBottom: 24
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    logoImage: {
      alignSelf: 'center', 
      width: '20%', 
      height: '45%'
  }
  });