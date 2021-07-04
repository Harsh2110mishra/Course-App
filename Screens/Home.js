import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { SearchBar } from "react-native-elements";
import CardView from "../component/CardView";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchBar}
        placeholder="Type Here..."
        onChangeText={() => {
          props.navigation.navigate("Search");
        }}
      />
      <CardView navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  searchBar: {
    width: "90%",
    borderRadius: 10,
    marginBottom: 500,
  },
});

export default Home;
