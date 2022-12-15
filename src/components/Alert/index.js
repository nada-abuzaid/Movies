import React from "react";
import { Text } from "react-native";
import { colors } from "../../infrastructure/theme/colors";
import { Center } from "../../style";

export const Alert = ({ text }) => {
  return (
    <Center style={{ flex: 1 }}>
      <Text style={{ color: colors.white, fontSize: 15, fontWeight: "bold" }}>
        {text}
      </Text>
    </Center>
  );
};
