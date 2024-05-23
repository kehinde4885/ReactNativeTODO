import React, {useContext} from 'react';

import {View, Text, Image, Pressable} from 'react-native';

import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';

import taskInterface from '../helpers/interface';
import TaskContext from '../context/TaskContext';
import {createNewStorageEntry} from '../helpers/storage';

const TodoItem = (props: any) => {
  const navigation = useNavigation();

  let task: taskInterface = props.task;

  const {tasksFromContext, updateTasks} = useContext(TaskContext);

  let {id} = props;

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
            navigation.navigate('Edit Task', {itemId: id});
          }}>
          <Image
            style={styles.todoImgs}
            source={require('../../assets/Pencil.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('item Deleted');
            //console.log(id);
            let array: taskInterface[] = [];

            tasksFromContext.map((element:taskInterface, index:number) => {
              if (!(index === id)) {
                array.push(element);
              }
            });

            updateTasks(array);
            createNewStorageEntry(array);

          }}>
          <Image
            style={styles.todoImgs}
            source={require('../../assets/Trash.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('item Completed');
            
            tasksFromContext[id].status = !tasksFromContext[id].status ;

            //console.log(tasksFromContext);
            let newArray = JSON.parse(JSON.stringify(tasksFromContext));
            createNewStorageEntry(newArray);
            updateTasks(newArray);
          }}>
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
