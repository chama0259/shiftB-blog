import { formatDate } from "../utils/date.js";

const PostCard = ({ post }) => (
  <article className="border border-gray-300 p-4 my-8">
    {" "}
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <time dateTime={post.createdAt} className="text-gray-400">
          {formatDate(post.createdAt)}
        </time>
        <div className="text-sm flex gap-2">
          {post.categories.map((category) => (
            <span
              key={category}
              className="border border-blue-500 text-blue-500 px-2 py-0.5 rounded"
            >
              {category}
            </span>
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
