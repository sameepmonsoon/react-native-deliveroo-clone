import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MinusPlus from "react-native-vector-icons/AntDesign";

const DishRows = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={{ flexDirection: "column", gap: 10 }}
        onPress={() => setIsPressed(!isPressed)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            backgroundColor: "white",
            padding: 10,
            minHeight: 130,
            height: "auto",
          }}>
          <View
            style={{
              flexDirection: "column",
              gap: 3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flex: 1,
              paddingHorizontal: 10,
            }}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>Restaurant </Text>
            <Text style={{ color: "grey" }}>
              lorem ajfkdsfjds hasjfj afkdsjfkj afdksfd hfdjshjhfhdjsahdas
              fasfdsjfhh{" "}
            </Text>
            <Text style={{ color: "grey", fontSize: 15 }}>Rs.1500 </Text>
          </View>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={{ height: 70, width: 70, alignSelf: "flex-start" }}
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 10,
          }}>
          <MinusPlus name="minuscircle" size={30} color="#00ccdd" />
          <Text
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 10,
            }}>
            {12}
          </Text>
          <MinusPlus name="pluscircle" size={30} color="#00ccdd" />
        </View>
      )}
    </>
  );
};

export default DishRows;
