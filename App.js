import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Navigator from "./navigation/Navigator";
import courseReducer from "./store/reducers/course";

enableScreens();

const rootReducer = combineReducers({
  course: courseReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
