import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../store/counterSlice";
import CastomButton from "../../ui/buttons/CastomButton";
import { fetchProducts } from "../../../store/productSlice";
import Loader from "../../ui/Loader/Loader";
import { useState } from "react";
import { useGetPokemonQuery } from "../../../store/pokemonAPI";
import { useAddPostMutation, useGetPostQuery } from "../../../store/api";
import { useLocation, useParams } from "react-router-dom";

const Shop = () => {
  const [visible, setIsVisible] = useState(false);
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const { items, isLoading, isError } = useSelector((state) => state.products);

  const {
    data,
    isLoading: isPokemonLoading,
    error: PokemonError,
  } = useGetPokemonQuery();
  console.log(data);

  const {
    data: postsData,
    isLoading: postsLoading,
    error: postError,
  } = useGetPostQuery();
  console.log(postsData);

  const [addPost, { isLoading: isAdding }] = useAddPostMutation();

  const paramsThis = useParams();
  console.log(useParams());

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <CastomButton
        onClick={() => {
          if (!visible) {
            dispatch(fetchProducts());
          }
          setIsVisible(!visible);
        }}
      >
        загрузить товари
      </CastomButton>
      {isLoading && <Loader />}
      {isError && <p>{isError}</p>}
      {visible &&
        items?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <span>{item.price}</span>
          </div>
        ))}

      {isPokemonLoading && <Loader />}
      {PokemonError && <p>Error loading pokemon</p>}

      {data?.results.map((pokemon) => (
        <div>
          <p key={pokemon.name}>{pokemon.name}</p>
        </div>
      ))}

      {postsLoading && <Loader />}
      {postError && <p>error posts</p>}
      <CastomButton
        onClick={() =>
          addPost({ title: "new Post", body: "pokemon", userId: 1, id: 1 })
        }
      >
        add post
      </CastomButton>
      {postsData?.slice(0, 5).map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};
export default Shop;
