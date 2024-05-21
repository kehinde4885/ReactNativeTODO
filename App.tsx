// npx react-native-assets for font Linking

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import {HomeStack} from './src/pages/Home';
import {NewTask, NewTaskHeader} from './src/pages/NewTask';
import {Edit, EditHeader} from './src/pages/Edit';

import TaskContextProvider from './src/context/TaskContextProvider';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* This is the Tab Navigator Here */}
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{headerShown: false}}
          />
          {/*The following Screens Switch away from the screen where the 
          Tab Navigator is, which is why the Tab bar disappears*/}

          <Stack.Screen
            name="New Task"
            component={NewTask}
            options={{header: () => <NewTaskHeader />}}
          />

          <Stack.Screen
            name="Edit Task"
            component={Edit}
            options={{
              header: ({navigation}) => {
                return <EditHeader />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  );
};

export default App;
