import { useRouter } from "next/router";
import Card from "../ui/Card";
import styles from "./TravelItem.module.css";

function TravelItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li onClick={showDetailsHandler}>
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
