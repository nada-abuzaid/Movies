import React, { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { Tabs } from "../../components/CategoriesTabs";
import { Top5Movies } from "../../components/Top5Movies";
import { SafeArea, SearchTitle } from "./style";
import { MoviesList } from "../../components/MoviesList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "../Details";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../infrastructure/theme/colors";

export const HomeScreen = () => {
  const [isQuery, setQuery] = useState("");
  const [activeTab, setActive] = useState("1");
  const ENDPOINTS = [
    "/movie/now_playing",
    "/movie/upcoming",
    "/movie/top_rated",
    "/movie/popular",
  ];
  return (
    <SafeArea style={{ paddingHorizontal: 13 }}>
      <SearchTitle>What do you want to watch?</SearchTitle>
      <SearchBar setQuery={setQuery} />
      <Top5Movies />
      <Tabs setActive={setActive} activeTab={activeTab} screen="Home" />
      {ENDPOINTS.map((endpoint, index) => {
        if (index === activeTab - 1) {
          return <MoviesList endpoint={endpoint} key={endpoint} />;
        }
      })}
    </SafeArea>
  );
};

const HomeStack = createNativeStackNavigator();

export const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
      style={{}}
      screenOptions={({ navigation, route }) => {
        return {
          tabBarStyle: {
            backgroundColor: "#242A32",
            paddingBottom: 10,
            height: 70,
            borderTopColor: "#0296E5",
            fontSize: 20,
          },
          headerShown: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <AntDesign name="left" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
        };
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};
