import { ScrollView, View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Arrow from "react-native-vector-icons/AntDesign";
import MaterialArrow from "react-native-vector-icons/MaterialIcons";

import Icon from "react-native-vector-icons/Octicons";
import Location from "react-native-vector-icons/Entypo";
import DishRows from "../components/DishRows/DishRows";
const RestaurantScreen = () => {
  const {
    params: {
      id,
      title,
      description,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      imgUrl,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View style={{ position: "relative", backgroundColor: "white" }}>
        <Image
          source={{ uri: imgUrl }}
          style={{
            height: 250,
            width: "100%",
            padding: 2,
            backgroundColor: "white",
          }}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{
            position: "absolute",
            top: 45,
            left: 15,
            padding: 7,
            backgroundColor: "#f5f5f5",
            borderRadius: 100,
          }}>
          <Text>
            <Arrow name="arrowleft" size={25} color="#00ccbb" />
          </Text>
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 5,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}>
          <Text
            style={{
              fontSize: 28,
              textTransform: "capitalize",
              fontWeight: 700,
            }}>
            {title}
          </Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Icon size={20} name="star-fill" color="grey" />
            <Text
              style={{
                fontSize: 14,
                color: "grey",
              }}>
              <Text style={{ color: "green" }}>{rating}</Text>
              <Text style={{ color: "grey" }}> {genre}</Text>
            </Text>
            <Location name="location-pin" color="grey" size={22} />
            <Text style={{ fontSize: 14, color: "grey" }}>
              Nearby - {address}
            </Text>
          </View>
          <Text style={{ color: "grey", paddingVertical: 8 }}>
            {short_description}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 7,
            gap: 10,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#f5f5f5",
            padding: 10,
          }}>
          <Arrow name="questioncircleo" size={20} color="grey" />

          <Text
            style={{
              fontSize: 18,
              flex: 1,
              fontWeight: 700,
            }}>
            Have Food allergy?
          </Text>
          <MaterialArrow
            name="keyboard-arrow-right"
            size={30}
            color="#00ccbb"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          height: 50,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            paddingLeft: 10,
          }}>
          Menu
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 10, gap: 10 }}>
        <DishRows />
        <DishRows />
        <DishRows />
        <DishRows />
        <DishRows />
      </ScrollView>
    </ScrollView>
  );
};

export default RestaurantScreen;
