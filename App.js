import * as React from "react";
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid } from "react-native";
import AndroidMenuBar from './src/menu/AndroidMenu.jsx';
import FadeInView from './src/animations/FadeIn.jsx'
import bgImage from './public/images/background.jpg';
import phoneSwipeImg from './public/images/Phone-White-Swipe.png';
import DrawerContent from "./src/drawers/DrawerContent.jsx";

export default function App() {
  const drawer = React.useRef(null);

  if(Platform.OS === 'android') {
    return (    
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={() => <DrawerContent/>}
      >
        <View style={styles.container}>
          <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
            <FadeInView style={{width: '100%', height: 90, position: 'absolute', top: 100}}>
              <Text style={styles.title}>MaD Industries</Text>
            </FadeInView>
            <View>
              <Image style={styles.swipeIcon} source={phoneSwipeImg}/>
            </View> 
          </ImageBackground>                     
        </View> 
      </DrawerLayoutAndroid>           
    );
  } else {
    return (    
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}
      >
        <Text>Universal React with Expos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center'
  },
  title: {
    fontSize: 48, 
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    opacity: .7
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    width: '100%'
  },
  menuBar: {
    position: 'absolute',
    bottom: 0,
    height: '8%',
    width: '100%'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0"
  },
  swipeIcon: {
    height: 56,
    width: 56
  }
});