import { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import FetchProducts from "./Components/FetchProducts/FetchProducts";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <FetchProducts setProducts={setProducts} />

      <ProductList products={products} />
    </div>
  );
}

export default App;
