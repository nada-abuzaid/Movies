import { View } from "react-native";
import styled from "styled-components";

export const Center = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
`;
