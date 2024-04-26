import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import {TodoItem} from './TodoItem';
import {styles} from '../styles';

import {CompHeader, Completed, TabIconCompleted} from './Completed';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

//HTDD
// I want to design a data Structure THat contains Items,
// Each item contains unique Characteristics like Name: String,
// Details: String, and Status:Boolean

// An item is a task to be carried out in the real world

interface Item {
  name: string;
  details: string;
  isCompleted: boolean;
}

let tasks: Item[] = [];

let Template = [
  {
    name: 'string',
    details: 'String',
    status: true,
  },
];

console.log(Template[0]);

const HomeStack = () => {
  // const {height} = useWindowDimensions();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.TabMenuText,
        tabBarActiveTintColor: '#9395D3',
        tabBarStyle: {height: 70},
        tabBarItemStyle: {paddingVertical: 10},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <HomeHeader />,
          tabBarIcon: ({focused}) => {
            return <TabIconHome focused={focused} />;
          },
        }}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        options={{
          header: () => <CompHeader />,
          tabBarIcon: ({focused}) => {
            return <TabIconCompleted focused={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

// i can pass the navigation prop since it is
// used as a Screen Component

const Home = (props: {navigation: any}) => {
  const {navigation} = props;

  return (
    <View style={{...styles.container, flex: 1}}>
      <View style={styles.body}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </View>

      <Pressable
        style={styles.fab}
        onPress={() => {
          navigation.navigate('New Task');
        }}>
        <Image source={require('../../assets/primary.png')} />
      </Pressable>
    </View>
  );
};

const HomeHeader = () => {
  return (
    <View style={[styles.header, {justifyContent: 'space-between'}]}>
      <Text style={[styles.heading, {fontSize: 24, color: '#fff'}]}>
        TODO APP
      </Text>

      <Image source={require('../../assets/cal.png')} />
    </View>
  );
};

const TabIconHome = (props: {focused: boolean}) => {
  const {focused} = props;

  return (
    <Image
      source={
        focused
          ? require('../../assets/Playlistactive.png')
          : require('../../assets/Playlist.png')
      }
    />
  );
};

export {HomeStack, HomeHeader};
