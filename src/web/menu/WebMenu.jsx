import * as React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import AppMenuText from "./AppMenuText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const WebMenu = () => {
    return (
        <View style={styles.menuBar}>   
            <Pressable>
                <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
            </Pressable> 
            <Pressable>
                <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
            </Pressable>                   
            <Pressable>
                <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
            </Pressable>  
            <Pressable>
                <AppMenuText>Products</AppMenuText>
            </Pressable>            
            <Pressable>
                <AppMenuText>About</AppMenuText>
            </Pressable>
            <Pressable>
                <AppMenuText>Contact</AppMenuText>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menuButton: {
    },
    menuBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '30%',
        marginVertical: 'auto',        
        flex: 1,
        // borderColor: 'white',
        // borderWidth: 5,
    },  
  });

export default WebMenu;