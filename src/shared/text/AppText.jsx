import * as React from "react";
import { Text } from "react-native";
import { useFonts } from 'expo-font';

function AppText (props) {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../../../assets/fonts/Roboto-Light.ttf'),
  });
  if(!fontsLoaded) {
    return <></>;
  } else {
    return(
      <Text 
        style={{
          fontFamily: 'Roboto-Light',      
          fontSize: 16    
        }}
      >
        {props.children}
      </Text>
    )
  }  
}

  export default AppText;