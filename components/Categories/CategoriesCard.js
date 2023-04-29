import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{
          height: 90,
          width: 95,
          backgroundColor: "grey",
          borderRadius: 4,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontSize: 15,
          fontWeight: 700,
          bottom: 2,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
