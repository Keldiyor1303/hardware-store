import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Create from "./Containers/Create";
import Detail from "./Containers/Detail";
import Login from "./Containers/Login";
import AdminPanel from "./Pages/AdminPanel";
import Basket from "./Pages/Basket";
import Home from "./Pages/Home";
import API from "./utils/axios";
import PrivateRouter from "./utils/PrivateRouter";
import { theme } from "./utils/theme";

function App() {

  const { pathname } = useLocation()
  const [themeChange, setThemeChange] = useState("dark")

  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('bag')) ? JSON.parse(localStorage.getItem('bag')) : [])

  function postApi() {
    API.get("products").then(res => {
      setProducts(res.data)
    })
  }

  useEffect(postApi, [])

  function added(data) {
    data.num = 1;
    setBasket([...basket, data]);
    localStorage.setItem("bag", JSON.stringify([...basket, data]))
  }

  function deleted(id) {
    setBasket(basket.filter((element) => element.id !== id))
    localStorage.setItem("bag", JSON.stringify(basket.filter((element) => element.id !== id)))
    API.delete(`products/${id}`);
    postApi();
  }

  function plus(id) {
    basket.map((element) => {
      if (element.id === id) {
        element.num = element.num + 1;
      }
      return element;
    })

    localStorage.setItem("bag", JSON.stringify(basket))
  }

  function minus(id) {
    basket.map((element) => {
      if (element.id === id) {
        element.num = element.num - 1;
      }
      return element;
    })

    localStorage.setItem("bag", JSON.stringify(basket))
  }

  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>

        {pathname !== "/login" && <Header themeChange={themeChange} setThemeChange={setThemeChange} />}

        <Routes>
          <Route path="/" element={<Home themeChange={themeChange} element={products} added={added} />} />
          <Route path="/detail/:id" element={<Detail themeChange={themeChange} />} />
          <Route path="/basket" element={<Basket themeChange={themeChange} plus={plus} minus={minus} />} />
          <Route path="/admin" element={<Login themeChange={themeChange} />} />
          <Route path="/adminPanel" element={<PrivateRouter> <AdminPanel themeChange={themeChange} element={products} deleted={deleted} /> </PrivateRouter>} />
          <Route path="/adminPanel/create" element={<PrivateRouter> <Create themeChange={themeChange} postApi={postApi} /> </PrivateRouter>} />
        </Routes>

      </ThemeProvider>

    </AppWrapper >
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;

`



