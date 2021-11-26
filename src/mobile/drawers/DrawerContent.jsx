import * as React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, DrawerLayoutAndroid, Linking } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

function DrawerContent()  {
  const url= 'tel://+8152457655'
  
  const args = {
    number: '8152457655', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
  }

  function makeCall() {
    Linking.openURL(url)
  }

  return (
    <View style={[styles.container, styles.navigationContainer]}> 
      <View style={styles.info}>
        <FontAwesomeIcon icon={faEnvelopeOpen} size={ 48 }/>
        <Text style={{paddingLeft: 12, fontSize: 18}}>matt.deboer0@gmail.com</Text>
      </View>  
      <TouchableOpacity style={styles.info} onPress={makeCall}>
        <FontAwesomeIcon icon={faMobileAlt} size={ 48 }/>
        <Text style={{paddingLeft: 12, fontSize: 18}}>(815)245-7655</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.info}>
        <FontAwesomeIcon icon={faInstagram} size={ 48 }/>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.info}>
        <FontAwesomeIcon icon={faFacebook} size={ 48 } />
      </TouchableOpacity>                   
      <TouchableOpacity style={styles.info}>
        <FontAwesomeIcon icon={faTwitter} size={ 48 } />
      </TouchableOpacity>  
    </View>
  )
}
  
  

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
      paddingBottom: 24
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    }
  });