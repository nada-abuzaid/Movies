import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { CATEGORIES_TABS } from "./constants";

export const Tabs = ({ setActive, activeTab }) => {
  const renderItem = ({ item }) => listRenderItem(item, setActive);

  const listRenderItem = (item, onPress) => (
    <TouchableOpacity
      key={item.id}
      style={{
        ...styles.listRenderItem,
        borderBottomWidth: activeTab === item.id ? 4 : 0,
        borderBottomColor: colors.secondary,
      }}
      onPress={() => onPress(item.id)}
    >
      <Title id={item.id} activeTab={activeTab}>
        {item.title}
      </Title>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES_TABS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listRenderItem: {
    paddingHorizontal: 8,
    marginVertical: 25,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
});

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: "Poppins_500Medium";
`;
