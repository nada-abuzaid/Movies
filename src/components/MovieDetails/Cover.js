import React from "react";
import { IMAGE_URL } from "@env";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../infrastructure/theme/colors";
import { AntDesign } from "@expo/vector-icons";

export const Cover = ({ cover, poster, vote, title }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.coverImage}
        source={{
          uri: `${IMAGE_URL}${cover}`,
        }}
      />
      <View>
        <Image
          style={styles.posterImage}
          source={{
            uri: `${IMAGE_URL}${poster}`,
          }}
        />
        <View style={styles.starContainer}>
          <AntDesign name="staro" size={20} color={colors.rating} />
          <Text style={styles.rating}>{Math.round(vote * 10) / 10}</Text>
        </View>
        <Text style={styles.movieTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  coverImage: {
    width: "100%",
    height: 210,
  },
  posterImage: {
    width: 95,
    height: 120,
    position: "absolute",
    resizeMode: "contain",
    borderRadius: 16,
    top: -60,
    left: 29,
  },
  starContainer: {
    width: 54,
    height: 24,
    borderRadius: 8,
    blurRadius: 2,
    opacity: 0.7,
    right: 10,
    bottom: 10,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#000",
    justifyContent: "space-evenly",
  },
  rating: {
    color: colors.rating,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 13,
  },
  movieTitle: {
    color: colors.white,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    position: "absolute",
    marginTop: 10,
    left: 140,
    width: "80%",
    maxWidth: "80%",
  },
});
