import AsyncStorage from '@react-native-async-storage/async-storage';

import taskInterface from './interface';

async function storeData(
  newTask: taskInterface,
  updateTasks: Function,
  setIsTasksInStorage: Function,
  isTasksInStorage: boolean,
) {
  //console.log(tasks);
  try {
    //let doesTaskEntryExist = await AsyncStorage.getItem('tasks');

    //console.log(doesTaskEntryExist);

    //Read the Else Block First

    if (isTasksInStorage) {
      console.log('There are tasks in Storage');

      let tasks = await getData();

      //console.log(tasks);

      tasks.push(newTask);

      //This function overwrites the current object in 
      // Storage
      createNewStorageEntry(tasks);

      updateTasks(tasks);

      console.log(tasks);
    } else {
      console.log('There are no tasks in Storage');

      let tasks = [];

      tasks.push(newTask);

      createNewStorageEntry(tasks);

      updateTasks(tasks); // Affects state

      setIsTasksInStorage(true); // affects state
    }
  } catch (e) {
    console.log(e);
  }
}

async function getData() {
  try {
    let value: any = await AsyncStorage.getItem('tasks');

    let jsonValue = JSON.parse(value);

    //console.log(jsonValue);

    return jsonValue;
  } catch (e) {
    console.log(e);
  }
}

async function createNewStorageEntry(tasks: taskInterface[]) {
  //Create the Entry
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
}

//getData()

export {storeData, getData, createNewStorageEntry};
