import { StyleSheet, View, SafeAreaView, Image, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    width: 1000,
    height: 1000,
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "column",
  },
  imageContainer: {
    marginTop:26,
    height: 50,
    width: 1000,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
});
