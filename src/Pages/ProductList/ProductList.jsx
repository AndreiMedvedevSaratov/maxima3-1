import { useState, useEffect } from "react";
import "./ProductList.scss";
import Product from "../Product/Product";

function ProductList({ products, searchValue, setSearchValue, categories, selectValue, setSelectValue, allProducts }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (categories !== undefined) {
      setOptions(categories.map((item, index) => <option key={index}>{item}</option>))
    }
  }, [categories]);

  return (
    <div className="product-list">
      <h1 className="product-list__h1">Список товаров</h1>

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