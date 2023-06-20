import { View, Text, FlatList } from 'react-native'
import React from 'react'
import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/ContactListIem';

const ContactScreen = () => {
  return(
    <FlatList
    data={chats}
    renderItem={({ item }) => <ContactListItem user={item.user} />}
    style={{ backgroundColor: 'white' }}
  />
  // <Text>hello</Text>
  )
  
}

export default ContactScreen