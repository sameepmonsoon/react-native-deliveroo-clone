import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Searchicon from "react-native-vector-icons/Feather";
import Sort from "react-native-vector-icons/MaterialIcons";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        {/* image and user login container */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={{ color: "grey" }}>Deliver Now !</Text>
            <Text style={{ fontWeight: "800", fontSize: 14 }}>
              Current Location{" "}
              <Icon name="chevron-down" size={14} color="#00ccbb" />
            </Text>
          </View>
        </View>
        <View style={styles.userIcon}>
          <Icon name="user" size={25} color="#00ccbb" />
        </View>
      </View>

      {/* search bar container */}
      <View style={styles.searchBar}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eeeeee",
            height: 45,
            borderRadius: 3,
            paddingHorizontal: 10,
          }}>
          <Searchicon name="search" size={20} color="grey" />
          <TextInput
            placeholder="Restaurant, groceries, dishes"
            style={{
              fontWeight: "500",
              fontSize: 16,
              flex: 1,
              paddingHorizontal: 7,
            }}
          />
        </View>
        <Sort
          name="sort"
          size={25}
          color="#00ccbb"
          style={{ height: 30, width: 45, paddingLeft: 15 }}
        />
      </View>
      {/* scroll view container */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories/>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "white",
    paddingTop: 35,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: 30,
    width: 50,
    borderRadius: 30,
  },
  textContainer: { flexDirection: "column" },
  userIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  searchBar: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
