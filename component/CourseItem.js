import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

const CourseItem = (props) => {
  return (
    <View style={styles.courseItem}>
      <TouchableOpacity onPress={props.onSelectCourse}>
        <View>
          <View style={{ ...styles.courseRow, ...styles.courseHeader }}>
            <ImageBackground source={{ uri: props.image }} style={styles.bgimg}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.courseRow, ...styles.courseDetail }}>
            <Text>{props.rating}</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  courseItem: {
    height: 200,
    margin: 10,
    width: "95%",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    overflow: "hidden",
  },
  courseRow: {
    height: "100%",
    flexDirection: "row",
  },
  courseHeader: {
    height: "85%",
  },
  courseDetail: {
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

export default CourseItem;
