import { useEffect, useState } from "react";
import { getPageCount } from "../utils/pages";
import PostService from "../API/PostService";

export const usePosts = (limit, page) => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setPostsLoading(true);

      const response = await PostService.getAll(limit, page);
      setPosts(response.data);

      const totalPageCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalPageCount, limit));
      setPostsLoading(false);
    }
    fetchPost();
  }, [limit, page]);
  return { posts, totalPages, postsLoading, setPosts };
};
