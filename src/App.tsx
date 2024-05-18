import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Books } from "./pages/Books/Books";
import { Like } from "./pages/Like/Like";
import { BookDetail } from "./pages/BookDetail/BookDetail";
import { Error } from "./pages/404/Error";
import { Settings } from "./pages/Settings/Settings";
import { Login } from "./pages/Authentication/LogIn";
import Sigin from "./pages/Authentication/Sigin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/like" element={<Like />} />
        <Route path="/book-detail" element={<BookDetail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
