import * as React from "react";
import { Text } from "react-native";
import AppText from "./AppText";
import { useFonts } from 'expo-font';

function AppHeaderText (props) {
    let [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf'),
    });
    return (
        <AppText>
            <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 32, color: 'black' }}>
                {props.children}
            </Text>
        </AppText>
    );
    
}

export default AppHeaderText;