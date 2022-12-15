import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useGetMovies } from "../../hooks/useGetMovies";
import { Alert } from "../Alert";
import { IMAGE_URL } from "@env";
import { colors } from "../../infrastructure/theme/colors";

export const Cast = ({ id }) => {
  const [movie, loading, error] = useGetMovies(`/movie/${id}/credits`);
  if (loading) return <Alert text="Loading..." />;
  if (error) return <Alert text="Ops, Something went wrong!!" />;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.castView}>
        <Image
          style={styles.castImage}
          source={{
            uri: `${IMAGE_URL}${item.profile_path}`,
          }}
        />
        <Text style={styles.castName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{ marginBottom: 500 }}>
      <FlatList
        numColumns={2}
        data={movie.cast}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  castView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  castImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: "contain",
  },
  castName: {
    color: colors.white,
    fontFamily: "Poppins_500Medium",
  },
});
