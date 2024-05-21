import React from 'react';

import {View, Text, Image, Pressable} from 'react-native';

import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';


import taskInterface from '../helpers/interface';

const TodoItem = (props:any) => {
  const navigation = useNavigation();

  let task: taskInterface = props.task


  return (
    <View style={styles.todo}>
      <View
        style={{
          gap: 5,
        }}>
        <Text style={[styles.heading, {fontSize: 13, color: '#9395D3'}]}>
          {task.title}
        </Text>
        <Text style={[styles.text, {fontSize: 10, color: '#000'}]}>
          {task.subtitle}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
        }}>
        <Pressable
          onPress={() => {
            console.log('jhkd');
            navigation.navigate('Edit Task',{itemId:task.id});
          }}>
          <Image
            style={styles.todoImgs}
            source={require('../../assets/Pencil.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.todoImgs}
            source={require('../../assets/Trash.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={styles.todoImgs}
            source={require('../../assets/CheckCircle.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export {TodoItem};
