import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

import CourseItem from "../component/CourseItem";

const ListItemData = (props) => {
  const renderCourseItem = (itemData) => {
    return (
      <CourseItem
        title={itemData.item.title}
        onSelectCourse={() => {
          props.navigation.navigate({
            routeName: "course",
            params: {
              courseId: itemData.item.id,
              courseTitle: itemData.item.title,
            },
          });
        }}
        image={itemData.item.imageUrl}
        rating={itemData.item.rating}
        complexity={itemData.item.complexity}
        price={itemData.item.price}
      />
    );
  };

  return (
    <View style={styles.List}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseItem}
        style={styles.card}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    flex: 1,
    width: "100%",
  },
  card: {
    width: "100%",
  },
});

export default ListItemData;
