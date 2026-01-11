import { Link } from "react-router-dom";
import PostCard from "../components/PostCard.jsx";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </>
  );
};

export default Posts;
