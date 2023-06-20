import { useState } from 'react';
import { View, Text, StyleSheet, Button, Appearance} from 'react-native'
import React from 'react'
import App from '../../App';
var nightmode=false;

const Settings = () => {
  
  const [theme, setTheme]=useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme)=>{
    console.log(scheme.colorScheme);
    setTheme(scheme.colorScheme);
  })
  return (
    <View style={theme=='light'? styles.containerday: styles.containernight}>
        
      <Button title='Sign Out'/>
      {/* <Button title='Change to  night mode' onPress={()=>{
        changemode(); 
        console.log(theme);
      }}/> */}
      
    </View>
  )
}

const styles=StyleSheet.create({
    containerday:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    containernight:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black'
  }
})

export default Settings