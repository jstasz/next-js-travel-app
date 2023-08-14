import styles from "./ListItems.module.css";

function ListItems(props) {
  function removeHandler(index) {
    props.onClick(index);
  }
  return (
    <ul className={props.className}>
      {props.list.map((listEl, index) =>
        <li key={listEl} className={styles["list-items"]}>
          <p>
            {listEl}
          </p>
          <span
            className={`material-symbols-outlined ${styles["remove-icon"]}`}
            onClick={() => removeHandler(index)}
          >
            do_not_disturb_on
          </span>
        </li>
      )}
    </ul>
  );
}

export default ListItems;
