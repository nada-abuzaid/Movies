// Icons
import { Home, Search, Bookmark } from "../../assets/svg";

// Screens
import { HomeScreenStack } from "../screens/Home";
import { SearchScreen } from "../screens/Search";
import { WatchScreen } from "../screens/WatchList";

// Styles
import { colors } from "../infrastructure/theme/colors";
import { TabsLabel, styles } from "./style";
import { Center as TabsView } from "../style";

// Screen Names
const homeName = "Home";
const searchName = "Search";
const watchListName = "Watchlist";

// Tabs
export const MY_TABS = [
  {
    name: homeName,
    route: "HomeStack",
    component: HomeScreenStack,
    Icon: Home,
  },
  {
    name: searchName,
    route: searchName,
    component: SearchScreen,
    Icon: Search,
  },
  {
    name: watchListName,
    route: watchListName,
    component: WatchScreen,
    Icon: Bookmark,
  },
];

export const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: "#242A32",
    paddingBottom: 10,
    height: 70,
    borderTopColor: "#0296E5",
    fontSize: 20,
  },
  tabBarActiveTintColor: "#0296E5",
  tabBarInactiveTintColor: "#67686D",
};

export const tabBarIcon = ({ focused, name, Icon }) => {
  return (
    <TabsView>
      <Icon
        color={focused ? colors.activeTab : colors.nonActiveTab}
        style={styles.tabIcon}
      />
      <TabsLabel focused={focused}>{name}</TabsLabel>
    </TabsView>
  );
};
