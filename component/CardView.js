import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { COURSE } from "../Data/Dummy";

const CardView = (props) => {
  const availableCourse = useSelector((state) => state.course.filteredCourse);
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Recommended Course</Text>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={availableCourse}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate({
                    routeName: "course",
                    params: {
                      courseId: item.id,
                      couseTitle: item.title,
                    },
                  });
                }}
              >
                <View style={styles.card}>
                  <View style={styles.cardHeader}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.time}>{item.complexity}</Text>
                    </View>
                  </View>

                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Text style={styles.socialBarLabel}>
                            {item.price}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Text style={styles.socialBarLabel}>
                            {item.rating}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    position: "absolute",
    left: 20,
    top: 140,
  },
  Heading: {
    fontSize: 22,
    position: "absolute",
    left: 15,
    bottom: 340,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "white",
  },
  separator: {
    margin: 5,
  },
  /******** card **************/
  card: {
    shadowColor: "#d6d0d0",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f0eded",
    width: 200,
    marginRight: 55,
    height: 300,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    marginLeft: 6,
    height: 40,
    width: 190,
    borderRadius: 20,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    marginRight: 25,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardView;
