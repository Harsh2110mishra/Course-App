import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import CustomHeaderButton from "../component/CustomHeaderButton";
import ListItemData from "../component/ListItemData";
import { toggleFavourite } from "../store/actions/course";

const CourseOverview = (props) => {
  const courseId = props.navigation.getParam("courseId");
  const isCourseFav = useSelector((state) => state.course.FavouriteCourse).some(
    (course) => course.id === courseId
  );
  const availableCourse = useSelector((state) => state.course.course);
  const selectedCourse = availableCourse.find(
    (course) => course.id === courseId
  );

  const dispatch = useDispatch();
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(courseId));
  }, [dispatch, courseId]);
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isCourseFav });
  }, [isCourseFav]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedCourse.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <Text>{selectedCourse.rating}</Text>
        <Text>{selectedCourse.complexity}</Text>
        <Text>{selectedCourse.price}</Text>
      </View>
    </ScrollView>
  );
};

CourseOverview.navigationOptions = (navigationData) => {
  const courseTitle = navigationData.navigation.getParam("couseTitle");
  const toggleFavourite = navigationData.navigation.getParam("toggleFav");
  const isFavouriteMeal = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: courseTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Fav"
          iconName={isFavouriteMeal ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavourite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default CourseOverview;
