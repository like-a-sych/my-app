import style from "./Pagination.module.scss";

export default function SelectOptions(props) {
  return (
    <option className={style["pagination__option"]} value={props.value}>
      {props.value}
    </option>
  );
}
