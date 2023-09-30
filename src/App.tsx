import { Home } from "./pages/Home";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from "./pages/Projects";

import GlobalStyle from "./styles/global"
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
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
