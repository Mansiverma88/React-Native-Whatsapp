import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const InputBox = () => {

  const [newMessage, setNewMessage]=useState('');

  const onSend=()=>{
    console.warn("sending new messsage:", newMessage);

    setNewMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*icons */}
      <AntDesign name="plus" size={24} color="royalblue"/>

      <TextInput 
      style={styles.input} 
      placeholder="type your message..." 
      value={newMessage} 
      onChangeText={setNewMessage}/>

      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white"/>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        // marginBottom:60, 
        backgroundColor:'whitesmoke',
        alignItems:'center',
    },
    input:{
      flex:1,
      backgroundColor:'white',
      padding:5,
      borderRadius:50,
      paddingHorizontal:10,
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:'lightgray',
    },
    send:{
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:15,

    },
    
})
export default InputBox