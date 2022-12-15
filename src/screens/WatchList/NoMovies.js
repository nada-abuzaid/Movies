import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NoMovies as NoDate } from "../../../assets/svg";
import { colors } from "../../infrastructure/theme/colors";

export const NoMovies = () => {
  return (
    <View style={styles.container}>
      <NoDate />
      <Text style={styles.message}>There is no movie yet!</Text>
      <Text style={styles.find}>
        Find your movie by Type title, categories, years, etc{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    width: 200,
    lineHeight: 25,
    marginTop: 10,
    color: colors.white,
    textTransform: "capitalize",
    fontFamily: "Montserrat_600SemiBold",
  },
  find: {
    color: colors.icons,
    fontSize: 12,
    textAlign: "center",
    width: 200,
    marginTop: 10,
    lineHeight: 20,
    fontFamily: "Montserrat_500Medium",
  },
});
