import * as React from "react";
import { Text } from "react-native";
import { useFonts } from 'expo-font';

function AppText (props) {
  console.log(props)
  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf'),
    'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
  });
  if(!fontsLoaded) {
    return <></>;
  } else {
    return(
      <Text 
        style={{
          fontFamily: 'Roboto-Light',          
        }}
      >
        {props.children}
      </Text>
    )
  }  
}

  export default AppText;