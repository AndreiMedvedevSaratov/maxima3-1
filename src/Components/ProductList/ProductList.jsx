import { useState, useEffect } from "react";
import "./ProductList.scss";
import Product from "../Product/Product";
import { authLogout } from "../../store/reducers/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductList({ products, searchValue, setSearchValue, categories, selectValue, setSelectValue, allProducts }) {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories !== undefined) {
      setOptions(categories.map((item, index) => <option key={index}>{item}</option>))
    }
  }, [categories]);

  const handleLogout = () => {
    dispatch(authLogout());
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/basket`;
    navigate(path);
  };

  return (
    <div className="product-list">
      <h1 className="product-list__h1">Список товаров</h1>
      <button onClick={handleLogout}>Разлогиниться</button>
      <button onClick={routeChange}>Перейти в корзину</button>

      <input
        type="text"
        className="product-list__search"
        placeholder="Поиск по товарам"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>

      <select className="product-list__select" value={selectValue} onChange={(event) => setSelectValue(event.target.value)}>
        {options}
      </select>

      <div className="product-list__list-wrapper">
        {products.length === 0 &&
          <p>Товары не найдены или не загружены</p>
        }

        {products.length > 0 && products.map((item) =>
          <Product
            product={item}
            key={item.id}
            allProducts={allProducts}
          />
        )}
      </div>

    </div>
  );
}

export default ProductList;