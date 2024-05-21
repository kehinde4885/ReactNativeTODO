import TaskContext from './TaskContext';

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



import taskJson from '../helpers/task.json';

let tasks = JSON.parse(JSON.stringify(taskJson));

//Create the User context Provider React Component
export default TaskContextProvider = ({children}) => {
  return (
    <TaskContext.Provider value={{ tasks }}>
      {children}
    </TaskContext.Provider>
  );
};
