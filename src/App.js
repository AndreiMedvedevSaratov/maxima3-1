import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import FetchProducts from "./Components/FetchProducts/FetchProducts";
import Button1 from "./Components/Button1/Button1";
import Button2 from "./Components/Button2/Button2";
import Button3 from "./Components/Button3/Button3";
import Button4 from "./Components/Button4/Button4";

function App() {
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

      <ProductList
        products={foundedProducts}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        categories={categories}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />

      <hr></hr>
      <Button1></Button1>
      <Button2></Button2>
      <Button3></Button3>
      <Button4></Button4>
    </div>
  );
}

export default App;
