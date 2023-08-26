import "./FetchProducts.scss";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/reducers/products";

function FetchProducts() {
  const dispatch = useDispatch();

  const getGoodsFromBackend = () => {
    let url = "https://dummyjson.com/products"; // "https://fakestoreapi.com/products/";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        // setProducts(response.products);
        // localStorage.setItem('allProducts', JSON.stringify(response));
        dispatch(fetchProducts(response.products));
      })
      .catch((e) => {
        console.log(e);
        alert("url не правильный!");
      });
  };

  return (<div className="fetch-products__wrapper">
    <Button
      className="fetch-products__button"
      variant="contained"
      onClick={getGoodsFromBackend}>
      Загрузить товары
    </Button>
  </div>
  );
}

export default FetchProducts;