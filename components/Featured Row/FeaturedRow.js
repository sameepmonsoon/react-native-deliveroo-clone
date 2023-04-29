import { View, Text, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import RestaurantCard from "./RestaurantCard";
const FeaturedRow = ({ title, featuredCategory, description }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
      }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 700,
            textTransform: "capitalize",
          }}>
          {title}
        </Text>
        <Icon name="arrowright" size={25} color="#00ccbb" />
      </View>
      <View>
        <Text style={{ color: "grey", paddingHorizontal: 10 }}>
          {description}
        </Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15, gap: 10 }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 10 }}>
        <RestaurantCard
          id={12}
          title={"taco"}
          rating={4.5}
          address={"Kathmandu"}
          genre={"Mexican"}
          short_description="lorem afdkslfd lllllll"
          dishes={[]}
          long={21}
          lat={1}
          imgUrl={"https://links.papareact.com/gn7"}
        />
        <RestaurantCard
          id={12}
          title={"Sushi"}
          rating={4.5}
          address={"Kathmandu"}
          genre={"Mexican"}
          short_description="lorem afdkslfd"
          dishes={[]}
          long={21}
          lat={1}
          imgUrl={"https://links.papareact.com/gn7"}
        />
        <RestaurantCard
          id={12}
          title={"KFC"}
          rating={4.5}
          address={"Kathmandu"}
          genre={"Mexican"}
          short_description="lorem afdkslfd"
          dishes={[]}
          long={21}
          lat={1}
          imgUrl={"https://links.papareact.com/gn7"}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
