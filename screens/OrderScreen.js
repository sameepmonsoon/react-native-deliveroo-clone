import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
const OrderScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#00ccbb",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        height: "100%",
      }}>
      <Animatable.Image
        style={{ height: 300, width: 330 }}
        source={require("../assets/overloading.gif")}
        iterationCount={1}
        animation={"slideInUp"}
      />

      <Animatable.Text
        source={require("../assets/overloading.gif")}
        iterationCount={1}
        style={{ color: "white", height: 50 }}>
        Waiting for Restaurant to accept order!
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default OrderScreen;
