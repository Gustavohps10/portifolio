import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import Projects from "./pages/Projects";

import "./styles/global.scss";

import GlobalStyle from "./styles/global"
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark)

  function toggleTheme() {
    setTheme(theme.title == "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={{...theme, toggleTheme}}>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
