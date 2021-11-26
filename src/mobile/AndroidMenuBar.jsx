import * as React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from "react-native";
import logo from '../../assets/images/madLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const AndroidMenuBar = () => {
    return (
        <View style={styles.topBar}>
            <View style={styles.menuButton}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faBars} size={ 28 }/>
                </TouchableOpacity> 
            </View>
            <View>
                <TouchableOpacity style={styles.logoButton}>
                    <Image source={logo} style={styles.logoImage}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        paddingTop: 16, 
        width: '100%', 
        height: '100%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    menuButton: {
        position: 'absolute', 
        top: '55%', 
        left: '8%'
    },
    logoButton: {
        flexDirection: 'row', 
        height: '100%',
        alignSelf: 'center'
    },
    logoImage: {
        alignSelf: 'center', 
        width: '60%', 
        height: '80%'
    }
  });

export default AndroidMenuBar;