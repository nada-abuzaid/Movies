import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NoSearch } from "../../../assets/svg";
import { colors } from "../../infrastructure/theme/colors";

export const NoData = () => {
  return (
    <View style={styles.container}>
      <NoSearch />
      <Text style={styles.message}>
        we are sorry, we can not find the movie :(
      </Text>
      <Text style={styles.find}>
        Find your movie by type title, categories, years, etc
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
