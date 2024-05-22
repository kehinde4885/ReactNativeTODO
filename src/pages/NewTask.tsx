import React, {useEffect, useState, useContext} from 'react';

import {View, Text, TextInput, Pressable, Image} from 'react-native';

import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import taskInterface from '../helpers/interface';
import {storeData, getData} from '../helpers/storage';
import TaskContext from '../context/TaskContext';

const defaultTask: taskInterface = {title: '', subtitle: '', status: false};

const NewTask = () => {
  const [newTask, setTask] = useState(defaultTask);

  const [buttonDisabled, setButton] = useState(true);

  const {setIsTasksInStorage,isTasksInStorage} = useContext(TaskContext);

  const {updateTasks} = useContext(TaskContext);

  // useEffect(() => {
  //   console.log('component rerendered');
  // });

  useEffect(() => {
    //Enable Button
    newTask.title ? setButton(false) : setButton(true);
  }, [newTask]);

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
        onChangeText={text => {
          //Update Controlled From
          setTask({...newTask, title: text});
        }}
        value={newTask.title}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={text => {
          setTask({...newTask, subtitle: text});
        }}
        value={newTask.subtitle}
        placeholder="Detail"
      />
      <Pressable
        style={styles.btn}
        disabled={buttonDisabled}
        onPress={() => {
          //Go and Store the New Task
          storeData(
            newTask,
            updateTasks,
            setIsTasksInStorage,
            isTasksInStorage,
          );

          //Reset form Field
          setTask(defaultTask);

          console.log('Add Button Pressed');
        }}>
        <Text style={styles.btnText}>ADD</Text>
      </Pressable>
    </View>
  );
};

const NewTaskHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, {gap: 40}]}>
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

//getData()
async function getAllKeys() {
  let keys: Readonly<string[]> = [];

  try {
    keys = await AsyncStorage.getAllKeys();
    console.log(keys);
  } catch (error) {
    console.log(error);
  }
}

async function removeValue() {
  try {
    await AsyncStorage.removeItem('tasks');
  } catch (error) {
    console.log(error);
  }
}

//console.log(getData());

//removeValue()
//getAllKeys()

//Remove All Keys
async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
  console.log('Keys Cleared');
}

//clearAll()
