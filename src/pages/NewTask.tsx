import React from 'react';

import {View, Text, TextInput, Pressable, Image} from 'react-native';

import {styles} from '../styles';
import { useNavigation } from '@react-navigation/native';

const NewTask = () => {
  return (
    <View style={styles.form}>
      <TextInput style={styles.textInput} placeholder="Title" />
      <TextInput style={styles.textInput} placeholder="Detail" />
      <Pressable
        style={styles.btn}
        onPress={() => {
          console.log('Add Button Pressed');
        }}>
        <Text style={styles.btnText}>ADD</Text>
      </Pressable>
    </View>
  );
};

const NewTaskHeader = () => {

  const navigation = useNavigation()
  return (
    <View style={[styles.header ,{gap:40}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/Back.png')} />
      </Pressable>

      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        Add Task
      </Text>
    </View>
  );
};

export {NewTask, NewTaskHeader};
