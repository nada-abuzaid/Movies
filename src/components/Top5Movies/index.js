import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import styled from "styled-components";
import { useGetMovies } from "../../hooks/useGetMovies";
import { Alert } from "../Alert";
import { ImageCard } from "../ImageCard";

export const Top5Movies = () => {
  const [movie, loading, error] = useGetMovies("/movie/popular");
  if (loading) return <Alert text="Loading.." />;
  if (error) return <Alert text="Ops, Something went wrong!!" />;
  return (
    !loading && (
      <Reaults horizontal={true} showsHorizontalScrollIndicator={false}>
        {movie.results &&
          movie.results.slice(10, 15).map((movie, index) => {
            return (
              <View style={styles.result} key={movie.id}>
                <ImageCard
                  uri={movie.poster_path}
                  id={movie.id}
                  index={index + 1}
                  height="210px"
                  width="145px"
                />
              </View>
            );
          })}
      </Reaults>
    )
  );
};

const styles = StyleSheet.create({
  result: {
    marginBottom: 20,
    marginRight: 30,
  },
});

const Reaults = styled(ScrollView)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 12px;
  max-height: 230px;
`;
