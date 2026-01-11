import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import { posts } from "./data/posts.js";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
