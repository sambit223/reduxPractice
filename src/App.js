import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { lazy, Suspense } from "react";
const Cart = lazy(() => import("./Components/Cart"));
const Homepage = lazy(() => import("./Components/Homepage"));
const Pagination = lazy(() => import("./Components/Pagination"));
const Form = lazy(() => import("./Components/Form"));
const Practice = lazy(() => import("./Components/Practice"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={Store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/prac" element={<Practice />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/page" element={<Pagination />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
