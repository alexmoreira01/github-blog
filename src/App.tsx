import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";


export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />

        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}