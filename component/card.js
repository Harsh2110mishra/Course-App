import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";

//Card start

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: props.image }} style={styles.bgimg}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.rating}</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

//card end

const App = () => {
  const [Search, setSearch] = useState();
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.FiltersButton}
      ></ScrollView>
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
  FiltersButton: {
    flexDirection: "row",
    margin: 10,
  },
  //Card
  mealItem: {
    height: 200,
    margin: 10,
    width: "50%",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    overflow: "hidden",
  },
  mealRow: {
    height: "100%",
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgimg: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default MealItem;
