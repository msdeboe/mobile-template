import * as React from "react";
import { Text } from "react-native";
import AppText from "../AppText";
import { useFonts } from 'expo-font';

function DrawerText (props) {
    let [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf'),
      });
    if(!fontsLoaded){
        return <></>;
    } else {
        return (
            <AppText>
                <Text style={{ fontSize: 24, color: 'black', fontFamily: 'Roboto-Medium' }}>
                    {props.children}
                </Text>
            </AppText>
        );
    }
}

export default DrawerText;