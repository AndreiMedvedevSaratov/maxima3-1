import "./Product.scss";
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addBasket } from "../../store/reducers/products";

function Product({ product, allProducts }) {
  const params = useParams();
  const dispatch = useDispatch();
  const prodId = params.id;

  if (product === undefined) {
    product = allProducts[prodId - 1];
  }

  const handleAddProduct = (product) => {
    dispatch(addBasket(product))
  }

  return <div className="product">
    {product !== undefined ?
      <>
        <Link to={`/product/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
        <p>{product.description}</p>
        <img src={product.images[0]} className="product__image" alt={product.title} />
        <p><b>{product.price} руб.</b></p>
        <p>Категория товара: <b>{product.category}</b></p>
        <p>Рейтинг: <b>{product.rating} stars</b></p>
        <Rating name="read-only" value={product.rating} precision={0.1} size="large" readOnly />
        <button onClick={handleAddProduct}>Добавить в корзину</button>
      </>
      : <p>Пустая карточка товара</p>
    }
  </div>
}

export default Product;