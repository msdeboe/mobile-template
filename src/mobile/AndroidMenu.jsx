import * as React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from "react-native";
import homeIcon from '../../assets/images/home.png';

const AndroidMenuBar = () => {
    return (
        <View style={styles.menuBar}>            
            <TouchableOpacity style={styles.menuButton}>
                <Image style={styles.menuIcon} source={homeIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
                <Image style={styles.menuIcon} source={homeIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
                <Image style={styles.menuIcon} source={homeIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuButton: {
        flex: 1,
        height: '100%', 
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    menuIcon: {
        width: '40%', 
        height: '70%'
    },
    menuBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    }
  });

export default AndroidMenuBar;