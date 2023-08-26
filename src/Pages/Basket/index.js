import "./baskets.css";
import Basket from "../../Components/cardBasket";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  removeBasket,
  addBasket,
  removeAllPosition,
} from "../../store/reducers/products";
import { useDispatch } from "react-redux";

function CardBasket() {
  const hrStyle = { border: "2px solid #D58C51" };
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/products`;
    navigate(path);
  };

  const basket = useSelector((state) => state.products.basket);
  const price = useSelector((state) => state.products.priceProductInBasket);
  const count = useSelector((state) => state.products.countProductInBasket);
  // console.log("basket", basket);

  const remove = (item) => {
    // console.log("item", item);
    dispatch(
      removeBasket({
        item: item.productItem.item,
      })
    );
  };

  const removeAll = (item) => {
    // console.log("item", item);
    dispatch(
      removeAllPosition({
        item: item.productItem.item,
      })
    );
  };

  const add = (item) => {
    // console.log("item", item);
    dispatch(
      addBasket({
        item: item.productItem.item,
      })
    );
  };

  return (
    <div className="container_basket">
      <header className="header_basket">
        <button onClick={routeChange}>
          <img src="/images/back.png" alt="" />
        </button>
        <h1 className="title_bakset">Корзина с выбранными товарами</h1>
      </header>

      <main className="products_basket">
        <div className="products__card_basket">
          {basket.map((item) => {
            if (item.quantity === 0) return null;
            return (
              <Basket
                key={item.productItem.item.id}
                title={item.productItem.item.title}
                url={item.productItem.item.images[0]}
                price={item.productItem.item.price}
                quantity={item.quantity}
                remove={() => remove(item)}
                add={() => add(item)}
                removeAll={() => removeAll(item)}
              />
            );
          })}
        </div>
      </main>
      <hr style={hrStyle}></hr>

      <footer className="footer_basket">
        <p>Заказ на сумму: {price}₽.</p>
        <p>Количество продуктов в корзине: {count} шт.</p>

        <button className="basketButton"> Оформить заказ</button>
      </footer>
    </div>
  );
}

export default CardBasket;
