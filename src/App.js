import Layout from "./Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";

function App() {
  const isLogged = useSelector((state) => state.ProductReducer.isLogged);
  return (
    <Routes>
      <Route path="/" element={!isLogged ? <Auth /> : <Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart title="Cart" />} />
        <Route path="*" element={<NoPage title="Page Not Found" />} />
      </Route>
    </Routes>
  );
}

export default App;
