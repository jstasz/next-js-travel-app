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
      <Card className={`travel-item ${styles["travel-item"]}`}>
        <img className="img" src={props.imageUrl} alt={props.city} />
        <div className="content">
          <h2 className="city">
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
