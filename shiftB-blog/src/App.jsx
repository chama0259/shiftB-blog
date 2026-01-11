import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      setPosts(data.posts);
    };

    fetcher();
  }, []);

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
