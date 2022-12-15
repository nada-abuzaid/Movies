import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Overview = ({ overview }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.overview}>{overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 12,
  },
  overview: {
    textAlign: "justify",
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});
