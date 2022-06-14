import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);
  
  useEffect(()=>{
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    const subscripition = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscripition.remove();
  });

  return (
    <View style={toggle? style.containerLight: style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
      <Image 
        source = {
          toggle? 
          require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')
        }
        style = {toggle? style.lightOn : style.lightOff}
      />
       <Image 
        source = {
          toggle? 
          require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')
        }
        style = {style.dioLogo}
      />
      </TouchableOpacity>
    </View>
  );
};
export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightOn: {
    marginBottom: -70,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOff: {
    marginBottom: -70,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
});