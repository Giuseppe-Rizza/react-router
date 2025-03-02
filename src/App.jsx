import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import WhoWeAre from "./pages/WhoWeAre";
import List from "./pages/List";
import PostDetailPage from "./pages/PostDetailPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/whoWeAre" element={<WhoWeAre />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App