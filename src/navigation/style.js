import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";

export const TabsLabel = styled(Text)`
  color: ${({ focused }) => (focused ? colors.activeTab : colors.nonActiveTab)};
  font-size: 12px;
  text-align: center;
`;

export const styles = StyleSheet.create({
  tabIcon: {
    marginBottom: 5,
    marginTop: 5,
  },
});
