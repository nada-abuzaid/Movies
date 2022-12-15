import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { Alert } from "../../components/Alert";
import { useGetMoviesDetails } from "../../hooks/useGetMoviesDetails";
import { PageTitle } from "../../components/PageTitle";
import { Bookmark } from "../../../assets/svg";
import { SafeArea } from "../Home/style";
import { Cover } from "../../components/MovieDetails/Cover";
import { MovieDetails } from "../../components/MovieDetails/Details";
import { Tabs } from "../../components/MovieDetails/Tabs";
import { Overview } from "../../components/MovieDetails/Overview";
import { Reviews } from "../../components/MovieDetails/Reviews";
import { Cast } from "../../components/MovieDetails/Cast";

export const DetailsScreen = () => {
  const {
    params: { id },
  } = useRoute();
  const [activeTab, setActive] = useState("1");
  const [movie, loading, error] = useGetMoviesDetails(`/movie/${id}`);
  if (loading) return <Alert text="Loading..." />;
  if (error) return <Alert text="Ops, Something went wrong!!" />;
  const {
    title,
    backdrop_path,
    poster_path,
    vote_average,
    release_date,
    runtime,
    genres,
    overview,
  } = movie;
  return (
    <SafeArea>
      <PageTitle title="Details" Icon={Bookmark} />
      <Cover
        cover={backdrop_path}
        poster={poster_path}
        vote={vote_average}
        title={title}
      />
      <View style={{ alignItems: "center" }}>
        <MovieDetails
          date={release_date ? release_date.split("-")[0] : ""}
          runtime={runtime}
          genres={movie.genres ? genres[0] : ""}
        />
      </View>
      <Tabs setActive={setActive} activeTab={activeTab} />
      {activeTab === "1" && <Overview overview={overview} />}
      {activeTab === "2" && <Reviews id={id} />}
      {activeTab === "3" && <Cast id={id} />}
    </SafeArea>
  );
};
