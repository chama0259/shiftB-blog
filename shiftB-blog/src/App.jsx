// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import { posts } from "./data/posts.js";
import PostCard from "./components/PostCard.jsx";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </>
  );
}

export default App;
