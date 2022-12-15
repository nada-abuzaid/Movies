import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useGetMovies } from "../../hooks/useGetMovies";
import { Alert } from "../Alert";
import { ImageCard } from "../ImageCard";

export const MoviesList = ({ endpoint }) => {
  const [movie, loading, error] = useGetMovies(endpoint);
  if (loading) return <Alert text="Loading..." />;
  if (error) return <Alert text="Ops, Something went wrong!!" />;
  return (
    <FlatList
      numColumns="3"
      data={movie.results}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1, marginLeft: 12 }}
      renderItem={({ item }) => (
        <View style={styles.result}>
          <ImageCard
            uri={item.poster_path}
            id={item.id}
            height="145px"
            width="100px"
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  result: {
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
