import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Books } from "./pages/Books/Books"
import { Like } from "./pages/Like/Like"
import { BookDetail } from "./pages/BookDetail/BookDetail"
import { Error } from "./pages/404/Error"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/book-detail" element={<BookDetail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
