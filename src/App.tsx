import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CyclesContextProvider } from "./context/useCyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CyclesContextProvider>
          <Routes />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
