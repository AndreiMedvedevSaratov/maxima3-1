import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import FetchProducts from "./Components/FetchProducts/FetchProducts";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Registration } from "./Pages/Registration";
import { Login } from "./Pages/Login";
import Product from "./Components/Product/Product";

function App() {
  const isAuth = true;

  const [products, setProducts] = useState([]);

  // Поисковая строка, то что вводит пользователь, изначально она пустая
  const [searchValue, setSearchValue] = useState("");

  // Товары, которые мы найдём через поиск, изначально пустой массив
  const [foundedProducts, setFoundedProducts] = useState([]);

  // Эффект который срабатывает, когда меняется массив зависимостей - [products]
  // Когда с бэкенда приходит список товаров
  useEffect(() => {
    setFoundedProducts(products);
  }, [products]);

  // Массив заголовков и айдишников, изначально пустой
  const titles = [];
  // Заполнил заголовками и айдишниками всех товаров
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      titles.push({
        title: products[i].title.toLowerCase(),
        id: products[i].id,
      });
    }
  }

  // Осуществляем сам поиск по заголовкам и в массив foundSearchIds пушим
  // найденные айдишники. Ограничение минимум 3 символа.
  const foundSearchIds = [];
  if (searchValue.length >= 3) {
    titles.forEach((item) => {
      if (item.title.includes(searchValue.toLowerCase())) {
        foundSearchIds.push(item.id);
      }
    });
  }

  // Создали промежуточный массив, в который пушим товары, айдишники которых
  // совпадают с найденными товарами по заголовкам
  let tempFoundProducts = [];
  products.forEach((item) => {
    if (foundSearchIds.includes(item.id)) {
      tempFoundProducts.push(item);
    }
  });

  // Если меняется поисковая строка searchValue,
  // Еcли она длиннее 3х символов, то мы устанавливаем найденные товары
  // Если меньше 3х символов, то выводим все товары
  useEffect(() => {
    if (searchValue.length >= 3) {
      setFoundedProducts([...tempFoundProducts]);
    } else {
      setFoundedProducts(products);
    }
  }, [searchValue]);

  // ----- Select -----
  // Массив категорий, изначально пустой
  const categories = ["Все товары"];
  // Заполним категориями
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      if (!categories.includes(products[i].category)) {
        categories.push(products[i].category);
      }
    }
  }
  // Для селекта, выбранное значение
  const [selectValue, setSelectValue] = useState("Все товары");

  // Создали промежуточный массив, в который пушим товары, категория которых
  // совпадает с выбранной категорией
  let tempFoundProductsFromSelect = [];
  products.forEach((item) => {
    if (item.category === selectValue) {
      tempFoundProductsFromSelect.push(item);
    }
  });

  // Если меняется поисковая строка searchValue,
  // Еcли она длиннее 3х символов, то мы устанавливаем найденные товары
  // Если меньше 3х символов, то выводим все товары
  useEffect(() => {
    if (selectValue !== "Все товары") {
      setFoundedProducts([...tempFoundProductsFromSelect]);
    } else {
      setFoundedProducts(products);
    }
  }, [selectValue]);

  return (
    <div className="App">
      <FetchProducts setProducts={setProducts} />

      <hr />

      <Routes>
        <Route
          path="/product/:id"
          element={
            isAuth ? <Product allProducts={products} /> : <Registration />
          }
        ></Route>

        {/* <Route
          path="/basket"
          element={isAuth ? <Basket /> : <Registration />}
        ></Route> */}

        <Route
          path="/products"
          element={
            isAuth ? (
              <ProductList
                products={foundedProducts}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                categories={categories}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                allProducts={products}
              />
            ) : (
              <Registration />
            )
          }
        ></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
