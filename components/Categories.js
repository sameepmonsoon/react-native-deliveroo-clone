import { View, ScrollView, Text } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10,
        gap: 11,
      }}
      showsHorizontalScrollIndicator={false}>
      <CategoriesCard
        imgUrl="https://links.papareact.com/wru"
        title="Restaurant"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Groceries"
      />
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Dishes" />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Equipment"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/wru"
        title="Equipment"
      />
    </ScrollView>
  );
};

export default Categories;
