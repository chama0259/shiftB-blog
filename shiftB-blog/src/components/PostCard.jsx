import { formatDate } from "../utils/date.js";
import { contentWithLineBreaks } from "../utils/formatcontent.jsx";
import "./PostCard.css";

const PostCard = ({ post }) => (
  <article className="post-card">
    <div className="post-inner flex flex-col gap-4">
      <div className="post-header flex justify-between items-center">
        <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        <div className="categories text-sm flex gap-2">
          <button>React</button>
          <button>TypeScript</button>
        </div>
      </div>
      <h2 className="text-2xl">APIで取得した{post.title}</h2>
      <p className="line-clamp-2">{contentWithLineBreaks(post.content)}</p>
    </div>
  </article>
);
export default PostCard;

{
  /* <p className="post-content line-clamp-2 w-[70%]">
  {post.content.replace(/<br\s*\/?>/gi, '\n')}
</p> */
}
