import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import Projects from "./pages/Projects";

import "./styles/global.scss";

import GlobalStyle from "./styles/global"
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = useState(dark)

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
