import * as React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import AppMenuText from "./AppMenuText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const WebMenu = () => {
    return (
        <View style={styles.menuBar}>  
            <Pressable>
                <AppMenuText>PRODUCTS</AppMenuText>
            </Pressable>            
            <Pressable>
                <AppMenuText>ABOUT</AppMenuText>
            </Pressable>
            <Pressable>
                <AppMenuText>CONTACT</AppMenuText>
            </Pressable>
            <Pressable>
                <FontAwesomeIcon icon={faInstagram} size="lg" color="black" />
            </Pressable> 
            <Pressable>
                <FontAwesomeIcon icon={faFacebook} size="lg" color="black" />
            </Pressable>                   
            <Pressable>
                <FontAwesomeIcon icon={faTwitter} size="lg" color="black" />
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
        width: '55%',
        flex: 1,
        paddingVertical: 22,
        alignContent: 'center', 
        marginRight: '10%'
        // borderColor: 'black',
        // borderWidth: 5,
    },  
  });

export default WebMenu;