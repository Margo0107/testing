import { useState } from "react";

import "./post.css";
import CastomButton from "../../ui/buttons/CastomButton";
import Loader from "../../ui/Loader/Loader";

import { usePagination } from "../../../hooks/usePagination";
import { usePosts } from "../../../hooks/usePosts";

const Post = () => {
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  const { posts, totalPages, postsLoading, setPosts } = usePosts(limit, page);
  const countPage = usePagination(totalPages);

  const deletePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div className="post-wrapper">
      {postsLoading ? (
        <Loader />
      ) : (
        <>
          {posts.map((item) => (
            <div className="post-container" key={item.id}>
              <span>{item.id}.</span>
              <h3>{item.title}</h3>
              <p className="title-body-post">{item.body}</p>
              <CastomButton
                className="btn-delete-post"
                onClick={() => deletePost(item.id)}
              >
                delete
              </CastomButton>
            </div>
          ))}
          <div className="page-wrapper">
            {countPage.map((p) => (
              <span
                key={p}
                className={p === page ? "page page-active" : "page"}
                onClick={() => setPage(p)}
              >
                {p}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Post;
