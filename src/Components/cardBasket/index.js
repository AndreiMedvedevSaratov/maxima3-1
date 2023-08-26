import "./cardBasket.css";

function cardBasket(props) {
  console.log(props);
  return (
    <div className="card_basket">
      <img className="card__preview_basket" src={props.url} alt=""></img>
      <h2 className="card__title_basket">{props.title}</h2>

      <p className="card__price_basket">
        <button className="card__button_basket" onClick={props.add}>
          +
        </button>
        {props.quantity}шт.
        <button className="card__button_basket" onClick={props.remove}>
          -
        </button>
        x {props.price} ₽ = {props.quantity * props.price} ₽
      </p>
      <button className="card__button_basket" onClick={props.removeAll}>
        x
      </button>
    </div>
  );
}

export default cardBasket;
