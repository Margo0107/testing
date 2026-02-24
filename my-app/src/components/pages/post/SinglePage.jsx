import { useEffect, useState } from "react";
import { replace, useNavigate, useParams } from "react-router-dom";
import CastomButton from "../../ui/buttons/CastomButton";

const SinglePage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <CastomButton onClick={goBack}>go back</CastomButton>
          <CastomButton onClick={goHome}>go home</CastomButton>
        </>
      )}
    </>
  );
};
export default SinglePage;
