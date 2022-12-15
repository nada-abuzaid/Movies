import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MY_TABS, screenOptions, tabBarIcon } from "./constants";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../infrastructure/theme/colors";

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={({ navigation }) => ({
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          tabBarStyle: {
            backgroundColor: "#242A32",
            paddingBottom: 10,
            height: 70,
            borderTopColor: "#0296E5",
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 16,
              }}
              onPress={navigation.goBack}
            >
              <AntDesign name="left" size={24} color={colors.mainText} />
            </TouchableOpacity>
          ),
        })}
      >
        {MY_TABS.map(({ name, route, component, Icon }) => {
          return (
            <Tab.Screen
              key={route}
              name={route}
              component={component}
              options={{
                tabBarIcon: ({ focused }) =>
                  tabBarIcon({ focused, name, Icon }),
                tabBarLabelStyle: { fontFamily: "Roboto_500Medium" },
                headerShown: false,
                headerBackground: colors.main,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
