import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Text, View, FlatList } from "react-native";
import { ImageCard } from "../../components/ImageCard";
import { colors } from "../../infrastructure/theme/colors";
import { styles } from "./style";

const renderItem = ({
  item: { id, poster_path, title, vote_average, release_date, runtime = 100 },
}) => {
  return (
    <View style={styles.movieCard}>
      <ImageCard
        uri={poster_path}
        id={id}
        height="120px"
        width="95px"
        check={poster_path ? true : false}
      />
      <View style={styles.movieData}>
        <Text style={styles.movieTitle}>{title}</Text>
        <View style={styles.movieDetails}>
          <View style={styles.movieRating}>
            <AntDesign
              name="staro"
              size={16}
              style={{ ...styles.icons, color: colors.rating }}
            />
            <Text style={styles.rating}>
              {Math.round(vote_average * 10) / 10}
            </Text>
          </View>
          <View style={styles.movieGenres}>
            <Feather
              name="film"
              size={13}
              color={colors.icons}
              style={styles.icons}
            />
            <Text style={styles.genres}>Action</Text>
          </View>
          <View style={styles.movieGenres}>
            <Feather
              name="calendar"
              size={16}
              color={colors.icons}
              style={styles.icons}
            />
            <Text style={styles.genres}>
              {release_date ? release_date.split("-")[0] : 2001}
            </Text>
          </View>
          <View style={styles.movieGenres}>
            <Feather
              name="clock"
              size={13}
              color={colors.icons}
              style={styles.icons}
            />
            <Text style={styles.genres}>{runtime} minutes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const MoviesList = ({ movies }) => {
  return <FlatList data={movies} renderItem={renderItem} />;
};
