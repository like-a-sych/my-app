import Products from "./TabPages/Products";
import Users from "./TabPages/Users";
import Category from "./TabPages/Category";
import Cities from "./TabPages/Cities";
import Brands from "./TabPages/Brands";
import Protocols from "./TabPages/Protocols";
import Orders from "./TabPages/Orders";
import Banners from "./TabPages/Banners";
import Seminars from "./TabPages/Seminars";
import Promocodes from "./TabPages/Promocodes.jsx";
import AdminButton from "./_AdminButton/AdminButton";
import style from "./MainContent.module.scss";
import { Route, Routes } from "react-router-dom";

export default function MainContent() {

  return (
    <main className={style.main}>
      <div className={style.main__header}>
        <AdminButton />
      </div>
      <div className={style.main__body}>
        <div className={style["main__content"]}>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/seminars" element={<Seminars />} />
            <Route path="/promocodes" element={<Promocodes />} />
            <Route path="/*" element={<div>404</div>} />
          </Routes>
        </div>
      </div>
    </main>
  );
}
