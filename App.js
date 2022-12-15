import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { MainContainer } from "./src/navigation";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

import {
  useFonts as useRoboto,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import {
  useFonts as useMontserrat,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [poppinLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  const [robotoLoaded] = useRoboto({
    Roboto_500Medium,
  });

  const [montserratLoaded] = useMontserrat({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!poppinLoaded || !robotoLoaded || !montserratLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <MainContainer />
    </ThemeProvider>
  );
}
