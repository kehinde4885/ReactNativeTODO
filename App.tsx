// npx react-native-assets for font Linking

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import {HomeStack} from './src/pages/Home';
import {NewTask, NewTaskHeader} from './src/pages/NewTask';
import {Edit, EditHeader} from './src/pages/Edit';

import {Image} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;

const Icon = () => {
  return <Image source={require('./assets/Back.png')} />;
};
