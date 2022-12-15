import { SafeAreaView, StatusBar, Text } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.main};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchTitle = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  margin-top: 15px;
  margin-left: 15px;
  font-family: "Poppins_600SemiBold";
`;
