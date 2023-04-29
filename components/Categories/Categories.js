import { View, ScrollView, Text } from "react-native";
import React from "react";
import CategoriesCard from "../Categories/CategoriesCard";

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
        id={1}
        imgUrl="https://links.papareact.com/wru"
        title="Restaurant"
      />
      <CategoriesCard
        id={2}
        imgUrl="https://links.papareact.com/gn7"
        title="Groceries"
      />
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Dishes" />
      <CategoriesCard
        id={3}
        imgUrl="https://links.papareact.com/gn7"
        title="Equipment"
      />
      <CategoriesCard
        id={4}
        imgUrl="https://links.papareact.com/wru"
        title="Equipment"
      />
    </ScrollView>
  );
};

export default Categories;
