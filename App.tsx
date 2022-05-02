import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import Home from "./src/screens/Home";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="dark" />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
