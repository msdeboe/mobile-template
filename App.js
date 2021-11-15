import * as React from "react";
import { View, Text, Image, Button, Platform, StyleSheet, ImageBackground, DrawerLayoutAndroid, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AndroidMenuBar from './src/menu/AndroidMenu.jsx';
import FadeInView from './src/animations/FadeIn.jsx'
import bgImage from './public/images/background.jpg';
import phoneSwipeImg from './public/images/Phone-Black.png';
import DrawerContent from "./src/drawers/DrawerContent.jsx";

export default function App() {
  const drawer = React.useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const onContactDrawerDrawerButtonPress = () => {
    drawer.current.openDrawer()
  }

  if(Platform.OS === 'android') {
    return (    
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={() => <DrawerContent/>}
        style={{position: 'relative'}}
      >        
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>    
          <View style={{top: 100, flex: 1}}>
            <Text style={styles.title}>MaD Industries</Text>
            <ScrollView contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'column'}}>
              <View style={{paddingHorizontal: 24, flex: 1}}>              
                <Text style={{color: 'white', fontSize: 24}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </View>
              <View style={{paddingHorizontal: 24, flex: 1}}>
                <Text style={{color: 'white', fontSize: 24}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.roundButton1} onPress={onContactDrawerDrawerButtonPress}>
            <Image style={styles.swipeIcon} source={phoneSwipeImg}/>
          </TouchableOpacity> 
        </ImageBackground> 
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
    opacity: .7,
    marginBottom: 32
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
    textAlign: "center"
  },
  swipeIcon: {
    height: 40,
    width: 40, 
    opacity: .6 
  },
  roundButton1: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    marginLeft: 16,
    marginBottom: 16
  },
});