import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selecBasketItems } from "../Store/cartSlice";
import { selecRestaurantItems } from "../Store/restaurantSlice";
import Cross from "react-native-vector-icons/Entypo";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selecRestaurantItems);
  const items = useSelector(selecRestaurantItems);
  const dispatch = useDispatch();
  const [groupedBasketItems, setGroupedBasketItems] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[items.id] || []).push(item);
      return results;
    });
    setGroupedBasketItems(groupedItems);
  }, [items]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f0f0f0",
        zIndex: 10,
        height: "100%",
        position: "relative",
        Top: 10,
        marginTop: 27,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 25,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            alignItems: "center",
            height: 100,
            width: "100%",
          }}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Basket</Text>
          <Text style={{ fontWeight: 600, color: "grey" }}>Nando's</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Cross
            name="circle-with-cross"
            size={37}
            color="#00ccbb"
            style={{ position: "absolute", right: 20 }}
            onPress={navigation.goBack}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            backgroundColor: "white",
            alignItems: "center",
            height: 70,
            flex: 1,
            gap: 10,
            paddingHorizontal: 10,
            width: "100%",
          }}>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            h
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
            }}
          />
          <Text style={{ fontWeight: 600, color: "grey" }}>Nando's</Text>
          <Text
            style={{
              fontWeight: 600,
              color: "#00ccbb",
              position: "absolute",
              right: 20,
            }}>
            Change
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: 70,
            flex: 1,
            gap: 10,
            paddingHorizontal: 10,
            width: "100%",
          }}>
          <Text style={{ fontWeight: 600, fontSize: 16,width:30 }}></Text>

          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            h
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />
          <Text style={{ fontWeight: 600, fontSize: 16 }}>Nando's</Text>
          <View
            style={{
              position: "absolute",
              right: 20,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}>
            <Text
              style={{
                fontWeight: 600,
                color: "grey",
              }}>
              Rs.300
            </Text>
            <Text
              style={{
                fontWeight: 600,
                color: "#00ccbb",
              }}>
              Remove
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
