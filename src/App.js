import { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import FetchProducts from "./Components/FetchProducts/FetchProducts";
import Button1 from "./Components/Button1/Button1";
import Button2 from "./Components/Button2/Button2";
import Button3 from "./Components/Button3/Button3";
import Button4 from "./Components/Button4/Button4";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <FetchProducts setProducts={setProducts} />

      <hr />

      <ProductList products={products} />

      <hr></hr>
      <Button1></Button1>
      <Button2></Button2>
      <Button3></Button3>
      <Button4></Button4>
    </div>
  );
}

export default App;
