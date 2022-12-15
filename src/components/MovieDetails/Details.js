import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

export const MovieDetails = ({ date, runtime, genres }) => {
  return (
    <View style={styles.moviesContainer}>
      {date && (
        <View style={styles.year}>
          <Feather
            name="calendar"
            size={16}
            color={colors.icons}
            style={styles.icons}
          />
          <Text style={{ color: colors.icons }}>{date}</Text>
        </View>
      )}
      <Text style={{ color: colors.icons }}>|</Text>
      <View style={styles.year}>
        <Feather
          name="clock"
          size={16}
          color={colors.icons}
          style={styles.icons}
        />
        <Text style={{ color: colors.icons }}>{runtime} Minutes</Text>
      </View>
      <Text style={{ color: colors.icons }}>|</Text>
      {genres && (
        <View style={styles.year}>
          <Feather
            name="film"
            size={16}
            color={colors.icons}
            style={styles.icons}
          />
          <Text style={{ color: colors.icons }}>{genres.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  moviesContainer: {
    marginTop: 70,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
  },
  year: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    paddingRight: 5,
  },
});
