import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Octicons";
import Location from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate("Restaurant", {
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
        });
      }}
      style={{
        flexDirection: "column",
        borderRadius: 4,
        backgroundColor: "white",
        paddingBottom: 5,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 30 },
        shadowOpacity: 1,
        shadowRadius: 2,
      }}>
      <Image
        source={{ uri: imgUrl }}
        style={{ height: 150, width: 240, borderRadius: 4 }}
      />
      <View
        style={{
          paddingHorizontal: 10,
          paddingBottom: 4,
          flexDirection: "column",
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 700,
            textTransform: "capitalize",
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
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Location name="location-pin" color="grey" size={22} />
          <Text style={{ fontSize: 14, color: "grey" }}>
            Nearby - {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
