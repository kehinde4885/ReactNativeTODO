//React
import React, {useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useContext} from 'react';

// Components
import {TodoItem} from './TodoItem';
import {CompHeader, Completed, TabIconCompleted} from './Completed';
import TaskContext from '../context/TaskContext';

//StyleSheet
import {styles} from '../styles';
import taskInterface from '../helpers/interface';
import {getData} from '../helpers/storage';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  //Entry point moved here, since completed screen and home
  // share the same navigator
  // Changed my mind cos Native docs says to optimise manually if i
  //pass it to the screens thru the component prop

  // const { tasks } = useContext(TaskContext);

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
  //useEffect(() => { console.log('Home use Effect') })

  const {navigation} = props;

  //EntryPoint of Context for HOme Screen
  //Its called tasks because thats the name
  // of the variable i passed from the context provider
  const {tasksFromContext} = useContext(TaskContext);

  {
    /* Filter for the tasks whose status is true */
  }

  // let unCompleted = tasks.filter(
  //   (task: Readonly<taskInterface>) => task.status == false,
  // );

  //let unCompleted: Element[] = [];

  useEffect(() => {
    //console.log('Home Page rendered');
  });

  // tasksFromContext.forEach((task: taskInterface, index: number) => {
  //   if (!task.status) {
  //     unCompleted.push(<TodoItem task={task} key={index} id={index} />);
  //   } else {
  //     //console.log(index);
  //   }
  // });

  //The whole reason i used for each in the first place is so
  //that the id is from the context tasks not
  //the filtered array
  let unCompleted = 

  tasksFromContext.map((task: Readonly<taskInterface>, index:number) => {
    console.log('soso',task)
    if (task.status == false) {
      return <TodoItem task={task} id={index} key={index} />
    };
  });

  console.log(unCompleted);

  return (
    <View style={{...styles.container, flex: 1}}>
      <View style={styles.body}>
        {/* {unCompleted.map((element: taskInterface, index: number) => (
          <TodoItem task={element} id={index} key={index} />
        ))} */}
        {unCompleted}
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
