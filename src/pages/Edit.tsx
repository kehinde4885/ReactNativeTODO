import React, {useState} from 'react';

import {View, Text, TextInput, Pressable, Image} from 'react-native';

import {styles} from '../styles';
import {useNavigation, useRoute} from '@react-navigation/native';

const Edit = () => {
  const [task, setTask] = useState({title: '', subtitle: ''});

  const {params} = useRoute();

  console.log(params);
  

  return (
    <View style={styles.form}>
      <TextInput style={styles.textInput} placeholder="Title" />
      <TextInput style={styles.textInput} placeholder="Detail" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 46,
          marginTop: 20,
        }}>
        <Pressable
          style={[styles.btn, {paddingVertical: 24, flex: 1}]}
          onPress={() => console.log('Button Pressed')}>
          <Text style={styles.btnText2}>Update</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, {paddingVertical: 24, flex: 1}]}
          onPress={() => console.log('Button Pressed')}>
          <Text style={styles.btnText2}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const EditHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, {gap: 40}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/Back.png')} />
      </Pressable>
      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        Edit Task
      </Text>
    </View>
  );
};
export {Edit, EditHeader};
