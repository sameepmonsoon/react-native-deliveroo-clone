import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selecBasketItems,
  selecBasketItemsWithId,
  selectBasketTotal,
} from "../../Store/cartSlice";
import { useNavigation } from "@react-navigation/native";

const Basket = () => {
  const items = useSelector(selecBasketItems);
  const navigation = useNavigation();

  const basketTotal = useSelector(selectBasketTotal);
  if (items.length === 0) return null;

  return (
    <View
      style={{
        position: "absolute",
        bottom: 17,
        zIndex: 1,
        width: "100%",
        gap: 10,
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: "center",
        height: 80,
        color: "white",
      }}>
      <TouchableOpacity
        style={{
          zIndex: 1,
          width: "95%",
          borderRadius: 10,

          gap: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          alignItems: "center",
          height: 70,
          backgroundColor: "#00ccbb",
          color: "white",
        }}>
        <View
          style={{
            color: "white",
            height: 30,
            width: 30,
            backgroundColor: "#01a296",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
          }}>
          <Text
            style={{
              color: "white",
            }}>
            {items.length}
          </Text>
        </View>
        <Text
          style={{ color: "white", fontSize: 16, fontWeight: 700 }}
          onPress={() => navigation.navigate("Basket")}>
          View Basket
        </Text>
        <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>
          Rs.{basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
