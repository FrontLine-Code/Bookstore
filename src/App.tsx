import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Home } from "./pages/Home/Home";
import { Like } from "./pages/Like/Like";
import { BookDetail } from "./pages/BookDetail/BookDetail";
import { Error } from "./pages/404/Error";
import { Login } from "./pages/Authentication/LogIn";
import { Sigin } from "./pages/Authentication/Sigin";
import { Settings } from "./pages/Settings/Settings";

function App() {
  const [mode, setMode] = useState(false);
  const prefersDarkMode = useMediaQuery(
    `(prefers-color-scheme: ${mode ? "dark" : "light"})`
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: grey[300],
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Like />} />
          <Route path="/book-detail" element={<BookDetail />} />
          <Route
            path="/settings"
            element={<Settings setMode={setMode} mode={mode} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
