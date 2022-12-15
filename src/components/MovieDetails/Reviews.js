import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useGetMovies } from "../../hooks/useGetMovies";
import { colors } from "../../infrastructure/theme/colors";
import { Alert } from "../Alert";
import { IMAGE_URL, DEFAULT_AVATAR } from "@env";

export const Reviews = ({ id }) => {
  const [movie, loading, error] = useGetMovies(`/movie/${id}/reviews`);
  if (loading) return <Alert text="Loading..." />;
  if (error) return <Alert text="Ops, Something went wrong!!" />;

  const renderItem = ({
    item: {
      author,
      content,
      author_details: { avatar_path, rating },
    },
  }) => {
    return (
      <View style={styles.reviewContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.authorAvatar}
            source={{
              uri: avatar_path ? `${IMAGE_URL}${avatar_path}` : DEFAULT_AVATAR,
            }}
          />
          <Text style={styles.ratingCount}>{rating}</Text>
        </View>
        <View>
          <Text style={styles.authorName}>{author}</Text>
          <Text style={styles.reviewContent}>{content}</Text>
        </View>
      </View>
    );
  };

  return (
    movie.results && (
      <View style={styles.reviewsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={movie.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  reviewsContainer: {
    marginBottom: 445,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  reviewContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 20,
    maxHeight: 200,
    marginBottom: 30,
  },
  imageContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  authorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginBottom: 10,
  },
  ratingCount: {
    color: colors.activeTab,
    textAlign: "center",
  },
  authorName: {
    color: colors.white,
    fontFamily: "Poppins_500Medium",
  },
  reviewContent: {
    color: colors.white,
    fontFamily: "Poppins_400Regular",
    lineHeight: 20,
    textAlign: "justify",
    fontSize: 12,
  },
  noReviewsView: {
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  noReviewsText: {
    color: colors.white,
    marginTop: 20,
  },
});
