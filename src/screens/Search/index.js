import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Info } from "../../../assets/svg";
import { Alert } from "../../components/Alert";
import { ImageCard } from "../../components/ImageCard";
import { PageTitle } from "../../components/PageTitle";
import { SearchBar } from "../../components/SearchBar";
import { searchMovie } from "../../http";
import { colors } from "../../infrastructure/theme/colors";
import { Center } from "../../style";
import { SafeArea } from "../Home/style";
import { MoviesList } from "./Movies";
import { NoData } from "./NoData";

export const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const searchMovieFun = async (query) => {
    try {
      setLoading(true);
      if (query) {
        const {
          data: { results },
        } = await searchMovie(query);
        setResults(results);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      setResults([]);
      setLoading(false);
      setError(true);
    }
  };

  if (error) return <Alert text="Ops, Something went wrong!!" />;
  return (
    <SafeArea style={{ paddingHorizontal: 13 }}>
      <PageTitle title="Search" Icon={Info} />
      <SearchBar
        setQuery={setQuery}
        onSubmit={() => {
          searchMovieFun(query);
        }}
      />
      <View
        style={
          results.length
            ? styles.moviesContainer
            : {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }
        }
      >
        {results.length ? (
          !loading ? (
            <MoviesList movies={results} />
          ) : (
            <Alert text="Loading..." />
          )
        ) : (
          <NoData />
        )}
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    fontSize: 16,
    height: 42,
    fontFamily: "Poppins_400Regular",
    marginBottom: 10,
  },
  moviesContainer: {
    marginBottom: 140,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default SearchScreen;
