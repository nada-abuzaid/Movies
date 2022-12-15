import { StyleSheet } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

export const styles = StyleSheet.create({
  movieCard: {
    flexDirection: "row",
    marginBottom: 20,
    maxHeight: 150,
  },
  movieImage: {
    flex: 0,
    resizeMode: "contain",
  },
  movieData: {
    marginLeft: 15,
    flex: 1,
  },
  movieTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
    color: colors.white,
    width: "90%",
  },
  movieDetails: {
    flex: 1,
  },
  movieRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: colors.rating,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 11,
  },
  movieGenres: {
    flexDirection: "row",
    alignItems: "center",
  },
  genres: {
    color: colors.text,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  icons: {
    marginRight: 5,
    color: colors.text,
  },
});
