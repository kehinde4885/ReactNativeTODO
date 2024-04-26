import React from 'react';

import {View, Text, TextInput, Pressable, Image} from 'react-native';
import {TodoItem} from './TodoItem';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';

const Completed = () => {
  return (
    <View style={[styles.container, {flex: 1}]}>
      <View style={styles.body}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </View>
    </View>
  );
};

const CompHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, {gap: 40}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/Back.png')} />
      </Pressable>

      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        Completed Task
      </Text>
    </View>
  );
};


const TabIconCompleted = (props: {focused: boolean}) => {
  const {focused} = props;

  return (
    <Image
      source={
        focused
          ? require('../../assets/Tickactive.png')
          : require('../../assets/Tick.png')
      }
    />
  );
};


export {Completed, CompHeader,TabIconCompleted};
