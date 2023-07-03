import Products from "../Products/Products";
import Users from "../../tabpages/Users";
import Category from "../../tabpages/Category";
import Cities from "../../tabpages/Cities";
import Brands from "../../tabpages/Brands";
import Protocols from "../Products/Products";
import Orders from "../../tabpages/Orders";
import Banners from "../Banners/Banners";
import Seminars from "../../tabpages/Seminars";
import Promocodes from "../../tabpages/Promocodes";
import AdminButton from "../AdminButton";
import style from "./MainContent.module.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function MainContent() {
  const [limitCellonPage, setlimitCellonPage] = useState(5);

  return (
    <main className={style.main}>
      <div className={style.main__header}>
        <AdminButton />
      </div>
      <div className={style.main__body}>
        <div className={style["main__content"]}>
          <Routes>
            <Route
              path="/products"
              element={
                <Products
                  limitCellonPage={limitCellonPage}
                  setlimitCellonPage={setlimitCellonPage}
                />
              }
            />
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
