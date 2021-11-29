import * as React from "react";
import { Text } from "react-native";
import AppText from "./AppText";

function AppHeaderText (props) {
    return (
        <AppText>
            <Text style={{ fontSize: 40, color: 'white' }}>
                {props.children}
            </Text>
        </AppText>
    );
    
}

export default AppHeaderText;