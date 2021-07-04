import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import ListItemData from "../component/ListItemData";
import CustomHeaderButton from "../component/CustomHeaderButton";

const FavoritesScreen = (props) => {
  const favCourse = useSelector((state) => state.course.FavouriteCourse);
  if (favCourse.length === 0 || !favCourse) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}> No Favorite Course!</Text>
      </View>
    );
  }
  return <ListItemData listData={favCourse} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favourites",
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default FavoritesScreen;
