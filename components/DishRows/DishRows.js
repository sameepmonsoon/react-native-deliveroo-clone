import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import MinusPlus from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selecBasketItemsWithId } from "../../Store/cartSlice";

const DishRows = ({ id, title, description, genre, price, imgUrl }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selecBasketItemsWithId(state, id));
  const handleAdd = () => {
    alert("CLicked");
    dispatch(
      addToBasket({
        id,
        title,
        description,
        genre,
        price,
        imgUrl,
      })
    );
  };
  return (
    <>
      <TouchableOpacity
        style={{ flexDirection: "column", gap: 10 }}
        onPress={() => setIsPressed(!isPressed)}
        id={id}>
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
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                textTransform: "capitalize",
              }}>
              {title}
            </Text>
            <Text style={{ color: "grey" }}>{description}</Text>
            <Text style={{ color: "grey", fontSize: 15 }}>Rs.{price}</Text>
          </View>
          <Image
            source={{ uri: imgUrl }}
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
            {items?.length}
          </Text>
          <MinusPlus
            name="pluscircle"
            size={30}
            color="#00ccdd"
            onPress={() => handleAdd()}
          />
        </View>
      )}
    </>
  );
};

export default DishRows;
