import { View, Text, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Message from '../components/Message';
import messages from "../../assets/data/messages.json";
import InputBox from '../components/InputBox';

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView>
      <FlatList
      data={messages}
      renderItem={({item})=> <Message message={item}/>}
      style={styles.list}
      inverted 
      />
      <InputBox/>
    </KeyboardAvoidingView>
  )
}

const styles=StyleSheet.create({
  list:{
    padding:10,
    maxHeight:'90%',
  }
})
export default ChatScreen