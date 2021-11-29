import * as React from "react";
import { Text } from "react-native";
import AppText from "../home-page/AppText";

function AppMenuText (props) {
    return (
        <AppText>
            <Text style={{ fontSize: 16, color: 'white' }}>
                {props.children}
            </Text>
        </AppText>
    );
    
}

export default AppMenuText;