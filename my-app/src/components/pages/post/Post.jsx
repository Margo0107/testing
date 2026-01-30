import { useEffect, useState } from "react";
import "./post.css";
import CastomButton from "../../ui/buttons/CastomButton";
import PostService from "../../../API/PostService";

const Post = () => {
  const [posts, setPosts] = useState([]);
  //   const [rurrentPage, setCurrentPage] = useState(0);
  const [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    setPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setPostsLoading(false);
  }

  const deletePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div className="post-wrapper">
      {postsLoading ? (
        <div className="loader"></div>
      ) : (
        posts.map((item) => (
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
        ))
      )}
    </div>
  );
};
export default Post;
