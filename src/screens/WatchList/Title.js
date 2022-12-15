import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

export const Title = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={17} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    paddingVertical: 25,
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
    justifyContent: "center",
  },
});
