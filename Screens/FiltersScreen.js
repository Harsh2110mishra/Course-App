import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import CustomHeaderButton from "../component/CustomHeaderButton";
import { setFilters } from "../store/actions/course";

const Filters = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch value={props.state} onValueChange={props.Value} />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [Coursera, setCoursera] = useState(false);
  const [Udemy, setUdemy] = useState(false);
  const [Edx, setEdx] = useState(false);
  const [Udacity, setUdacity] = useState(false);
  const [Edureka, setEdureka] = useState(false);
  const [FutureLearn, setFutureLearn] = useState(false);
  //Course filters
  const [Business, setBusiness] = useState(false);
  const [DataScience, setDataScience] = useState(false);
  const [Design, setDesign] = useState(false);
  const [Finance, setFinance] = useState(false);
  const dispatch = useDispatch();

  const savedFilters = useCallback(() => {
    const appliedFilters = {
      Coursera: Coursera,
      Udemy: Udemy,
      Edx: Edx,
      Udacity: Udacity,
      Edureka: Edureka,
      FutureLearn: FutureLearn,
      Business: Business,
      DataScience: DataScience,
      Design: Design,
      Finance: Finance,
    };
    dispatch(setFilters(appliedFilters));
  }, [
    Coursera,
    Udemy,
    Edx,
    Udacity,
    Edureka,
    FutureLearn,
    Business,
    DataScience,
    Design,
    Finance,
    dispatch,
  ]);

  useEffect(() => {
    navigation.setParams({ save: savedFilters });
  }, [savedFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Available!</Text>
      <Filters
        label="Coursera"
        state={Coursera}
        Value={(newValue) => setCoursera(newValue)}
      />
      <Filters
        label="Udemy"
        state={Udemy}
        Value={(newValue) => setUdemy(newValue)}
      />
      <Filters label="Edx" state={Edx} Value={(newValue) => setEdx(newValue)} />
      <Filters
        label="Udacity"
        state={Udacity}
        Value={(newValue) => setUdacity(newValue)}
      />
      <Filters
        label="Edureka"
        state={Edureka}
        Value={(newValue) => setEdureka(newValue)}
      />
      <Filters
        label="FutureLearn"
        state={FutureLearn}
        Value={(newValue) => setFutureLearn(newValue)}
      />
      <Text style={styles.title}> More Filters!</Text>

      <Filters
        label="Business"
        state={Business}
        Value={(newValue) => setBusiness(newValue)}
      />
      <Filters
        label="DataScience"
        state={DataScience}
        Value={(newValue) => setDataScience(newValue)}
      />
      <Filters
        label="Design"
        state={Design}
        Value={(newValue) => setDesign(newValue)}
      />
      <Filters
        label="Finance"
        state={Finance}
        Value={(newValue) => setFinance(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigationData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
