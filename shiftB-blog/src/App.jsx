import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import ContactForm from "./pages/ContactForm.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
