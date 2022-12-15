import React from "react";
import { Bookmark } from "../../../assets/svg";
import { PageTitle } from "../../components/PageTitle";
import { SafeArea } from "../Home/style";
import { NoMovies } from "./NoMovies";

export const WatchScreen = () => {
  return (
    <SafeArea style={{ paddingHorizontal: 13 }}>
      <PageTitle title="Watch list" Icon={Bookmark} />
      <NoMovies />
    </SafeArea>
  );
};
