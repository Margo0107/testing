import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../store/counterSlice";
import { FaBasketShopping } from "react-icons/fa6";
import { addToCart } from "../../../store/cardSlice";

const Shop = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const totalCard = useSelector((state) => state.card.totalCard);
  const apple = {
    id: 1,
    title: "apple",
    price: 10,
  };
  const banana = {
    id: 2,
    title: "banana",
    price: 5,
  };
  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>Shop</h3>

      <div>
        <FaBasketShopping />
        <p>csrd: {totalCard} items</p>
        <div>
          <span>Apple - 10$</span>
          <button onClick={() => handleAddCart(apple)}>add</button>
        </div>
        <div>
          <span>Banana - 5$</span>
          <button onClick={() => handleAddCart(banana)}>add</button>
        </div>
      </div>
    </div>
  );
};
export default Shop;
