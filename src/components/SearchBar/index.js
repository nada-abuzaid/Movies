import React from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
import { Search } from "../../../assets/svg";

const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
`;

export const SearchBar = ({ setQuery, onSubmit }) => {
  return (
    <SearchContainer>
      <TextInput
        style={{
          flex: 1,
          backgroundColor: colors.secondary,
          fontSize: 16,
          height: 42,
          fontFamily: "Poppins_400Regular",
          marginBottom: 10,
          borderRadius: 16,
          borderTopEndRadius: 16,
          borderTopStartRadius: 16,
          border: "none",
        }}
        placeholder="Search"
        placeholderTextColor="#67686D"
        onChangeText={setQuery}
        onSubmitEditing={onSubmit}
        onFocus={null}
        textColor="white"
        underlineStyle={{ backgroundColor: "transparent" }}
      />
      <Search
        color={colors.nonActiveTab}
        style={{
          position: "absolute",
          right: 30,
          bottom: 29,
          transform: [{ rotate: "70deg" }],
        }}
      />
    </SearchContainer>
  );
};
