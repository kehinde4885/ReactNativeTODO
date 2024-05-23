import React, {useContext, useEffect, useState} from 'react';

import {View, Text, TextInput, Pressable, Image} from 'react-native';

import {styles} from '../styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import TaskContext from '../context/TaskContext';
import {createNewStorageEntry} from '../helpers/storage';
import taskInterface from '../helpers/interface';

const Edit = () => {
  const {params}: any = useRoute();

  const id = params.itemId;

  const {tasksFromContext, updateTasks} = useContext(TaskContext);

  const [task, setTask] = useState(tasksFromContext[id]);

  useEffect(() => {
    // console.log('edit rendered');
    // console.log('t', task);
    // //console.log('tks', tasks)
    // //let updatedTasks = tasks
    // //updatedTasks[id] = task
    // tasksFromContext[id] = task;
    // console.log(tasksFromContext);
    //console.log(Object.is(tasksFromContext,tasks))
    //console.log('up4', updatedTasks)
    //setTasks(updatedTasks)

    console.log("Edit rendered")
  }, [task]);
  //console.log(task);

  //console.log(`from Edit Component`, tasks);

  //let test = tasks;

  // console.log(test);
  console.log('****');
  //console.log(tasks)
  // test[0].title = 'God did it';
  // console.log('****');
  // console.log(test);

  //console.log(test2)

  //console.log({...tasks[0],title:"hahahah"})

  // console.log('****');
  // tasks[0].status = !tasks[0].status;

  // console.log('****');
  // console.log(`from Edit Component`, tasks);

  // function updateForm(text) {
  //   //Update Controlled From
  //   const updatedTasks = tasks;

  //   updatedTasks[id].subtitle = text;

  //   console.log(Object.is(tasks, updatedTasks));

  //   console.log('Updated Tasks', updatedTasks);
  //   setTasks(updatedTasks);
  // }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        value={task.title}
        placeholder="Title"
        onChangeText={text => {
          //Update Controlled From
          // tasks[id].title = text
          //console.log(tasks)
          // console.log(Object.is({...task,title: text},task))
          setTask({...task, title: text});
        }}
      />
      <TextInput
        style={styles.textInput}
        value={task.subtitle}
        placeholder="Detail"
        onChangeText={text => {
          // //Update Controlled From
          // console.log('t', task)
          // let updatedTasks = tasks
          // updatedTasks[id] = task

          // console.log('up', updatedTasks)
          // console.log('tsks', tasks)
          // console.log(Object.is(updatedTasks,tasks))
          setTask({...task, subtitle: text});
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 46,
          marginTop: 20,
        }}>
        <Pressable
          style={[styles.btn, {paddingVertical: 24, flex: 1}]}
          onPress={() => {
            //console.log('Button Pressed');

            tasksFromContext[id] = task;

            //console.log(tasksFromContext);
            let newArray = JSON.parse(JSON.stringify(tasksFromContext));
            createNewStorageEntry(newArray);
            updateTasks(newArray);
          }}>
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

async function updateTask(tasks: taskInterface[]) {
  try {
    createNewStorageEntry(tasks);
  } catch (error) {}
}
