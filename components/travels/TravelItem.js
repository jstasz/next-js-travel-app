import Card from "../ui/Card";
import styles from "./TravelItem.module.css";

function TravelItem(props) {
  return (
    <li>
      <Card className={styles["travel-item"]}>
        <img className={styles["img"]} src={props.imageUrl} alt={props.city} />
        <div className={styles["content"]}>
          <h2 className={styles["city"]}>
            {props.city}
          </h2>
          <p>
            {props.country}
          </p>
        </div>
      </Card>
    </li>
  );
}

export default TravelItem;
