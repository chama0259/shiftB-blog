import { formatDate } from "../utils/date.js";
import "./PostCard.css";

const PostCard = ({ post }) => (
  <article className="post-card">
    <div className="post-inner flex flex-col gap-4">
      <div className="post-header flex justify-between items-center">
        <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        <div className="categories text-sm flex gap-2">
          {post.categories.map((category) => (
            <button key={category}>{category}</button>
          ))}
        </div>
      </div>
      <h2 className="text-2xl">APIで取得した{post.title}</h2>
      <div
        className="line-clamp-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  </article>
);
export default PostCard;
