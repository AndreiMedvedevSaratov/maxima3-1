import "./ProductList.scss";
import Product from "../Product/Product";

function ProductList({ products }) {
  console.log(products);
  return (
    <div className="product-list">
      <h1 className="product-list__h1">Список товаров</h1>

      <div className="product-list__list-wrapper">
        {products.length === 0 &&
          <p>Loading...</p>
        }

        {products.length > 0 && products.map((item) =>
          <Product product={item} key={item.id} />
        )}
      </div>

    </div>
  );
}

export default ProductList;