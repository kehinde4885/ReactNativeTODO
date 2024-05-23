import TaskContext from './TaskContext';

import {getData} from '../helpers/storage';

//HTDD
// I want to design a data Structure THat contains Items,
// Each item contains unique Characteristics like Name: String,
// Details: String, and Status:Boolean

// An item is a task to be carried out in the real world

// interface Item {
//     name: string;
//     details: string;
//     isCompleted: boolean;
//   }

// let tasks: Item[] = [];

import {useEffect, useState} from 'react';

let dummyTasks = [
  {title: 'dummy Task 1', subtitle: 'Dummy subtitle', status: false},
];

//Create the User context Provider React Component
export default TaskContextProvider = ({children}) => {
  const [tasksFromContext, updateTasks] = useState(dummyTasks);

  console.log(`from Context Provider`,tasksFromContext)


  const [isTasksInStorage, setIsTasksInStorage] = useState(false);

  useEffect(() => {
    initApp();
  }, []);

  
  async function initApp() {
    let value = await getData();

    if (value) {
      setIsTasksInStorage(true);

      updateTasks(value);

      console.log('value found');
    }
  }

  //useEffect(()=>{ console.log('context use Effect')})

  console.log('context rerendered');

  return (
    <TaskContext.Provider
      value={{tasksFromContext, updateTasks, setIsTasksInStorage, isTasksInStorage}}>
      {children}
    </TaskContext.Provider>
  );
};
