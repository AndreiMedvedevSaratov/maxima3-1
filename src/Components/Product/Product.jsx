import "./Product.scss";
import Rating from '@mui/material/Rating';

function Product({ product }) {
  return <div className="product">
    {product !== undefined ?
      <>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <img src={product.images[0]} className="product__image" alt={product.title} />
        <p><b>{product.price} руб.</b></p>
        <p>Категория товара: <b>{product.category}</b></p>
        <p>Рейтинг: <b>{product.rating} stars</b></p>
        <Rating name="read-only" value={product.rating} precision={0.1} size="large" readOnly />
        <button>Добавить в корзину</button>
      </>
      : <p>Пустая карточка товара</p>
    }
  </div>
}

export default Product;