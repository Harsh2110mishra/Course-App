import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../Screens/Home";
import FiltersScreen from "../Screens/FiltersScreen";
import CourseOverview from "../Screens/CourseOverview";
import FavouriteScreen from "../Screens/FavouriteScreen";
import SearchScreen from "../Screens/Search";

import Colors from "../constant/Colors";

const Navigator = createStackNavigator(
  {
    Home: Home,
    course: CourseOverview,
    Favorite: FavouriteScreen,
    Filter: FiltersScreen,
    Search: SearchScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const FilterNavigator = createStackNavigator(
  {
    Filter: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const FavouriteNavigator = createStackNavigator(
  {
    Favourite: FavouriteScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Navigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-home"
              size={28}
              style={{ marginTop: 12 }}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Filter: {
      screen: FilterNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-filter"
              size={28}
              style={{ marginTop: 12 }}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorite: {
      screen: FavouriteNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={28} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: "black",
    },
  }
);

export default createAppContainer(AppNavigator);
