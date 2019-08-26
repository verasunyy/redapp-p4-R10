import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import AboutScreen from '../screens/About'
import FavesScreen from '../screens/Faves'
import ScheduleScreen from '../screens/Schedule'
import SessionScreen from '../screens/Session'
import MapScreen from '../screens/Map'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { sharedNavigationOptions } from './config'

const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });
const MapStack = createStackNavigator({
  Map: {
    screen: MapScreen
  }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });
const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
  },
  Session: {
    screen: SessionScreen,
  }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });
const FavesStack = createStackNavigator({
  Faves: {
    screen: FavesScreen
  },
  Session: {
    screen: SessionScreen,
  }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'About') {
          iconName = `md-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Map') {
          iconName = `md-map`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "Schedule") {
          iconName = `md-calendar`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    contentOptions: {
      activeTintColor: '#9963ea',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 30,
        fontFamily: 'Montserrat-Regular'
      },
      style: {
        backgroundColor: 'black'
      }
    },
  },
)



