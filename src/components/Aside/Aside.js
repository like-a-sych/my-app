import Nav from "../_Nav/Nav";
import style from "./Aside.module.scss";
import { navList } from "../../constants/navigation";

export default function Aside() {
  return (
    <aside className={style["aside"]}>
      <ul className={style["aside__list"]}>
        {navList.map((item) => (
          <Nav
            key={item.name}
            picture={item.picture}
            name={item.name}
            href={item.href}
          />
        ))}
      </ul>
    </aside>
  );
}
