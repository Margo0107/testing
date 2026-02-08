import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../store/counterSlice";
import { FaBasketShopping } from "react-icons/fa6";

const Shop = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>Shop</h3>

      <div>
        <FaBasketShopping />
        <p>csrd: 0 items</p>
        <div>
          <span>Apple - 10$</span>
          <button>add</button>
        </div>
        <div>
          <span>Banana - 5$</span>
          <button>add</button>
        </div>
      </div>
    </div>
  );
};
export default Shop;
