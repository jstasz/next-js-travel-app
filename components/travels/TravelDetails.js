import { useRouter } from "next/router";
import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./TravelDetails.module.css";

function TravelDetails(props) {
  const router = useRouter();

  function removeHandler() {
    props.onRemoveTravel(props.id);
  }

  return (
    <div className={styles["travel-details"]}>
      <h2 className="page-title">your travel to ...</h2>
      <Card className="travel-item">
        <img className="img" src={props.imageUrl} alt={props.city} />
        <div className="content">
          <h2 className="city">
            {props.city}
          </h2>
          <p>
            {props.country}
          </p>
        </div>
        <div />
      </Card>
      <div className={styles["to-do"]}>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            <span className={styles["title-color"]}>places</span> you must see
          </h3>
          <ul>
            {props.places &&
              props.places.map(place =>
                <li className={styles["item"]} key={place}>
                  <span
                    className={`material-symbols-outlined ${styles["icon"]}`}
                  >
                    fiber_manual_record
                  </span>
                  {place}
                </li>
              )}
          </ul>
        </div>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            worth visiting{" "}
            <span className={styles["title-color"]}>restaurants</span>
          </h3>
          <ul>
            {props.restaurants &&
              props.restaurants.map(restaurant =>
                <li className={styles["item"]} key={restaurant}>
                  <span
                    className={`material-symbols-outlined ${styles["icon"]}`}
                  >
                    fiber_manual_record
                  </span>
                  {restaurant}
                </li>
              )}
          </ul>
        </div>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            <span className={styles["title-color"]}>food</span> you should try
          </h3>
          <ul>
            {props.foods &&
              props.foods.map(food =>
                <li className={styles["item"]} key={food}>
                  <span
                    className={`material-symbols-outlined ${styles["icon"]}`}
                  >
                    fiber_manual_record
                  </span>
                  {food}
                </li>
              )}
          </ul>
        </div>
      </div>
      <div className={styles["actions-btns"]}>
        <Button
          className={styles["edit-btn"]}
          onClick={() => router.push(`/edit-travel/${props.id}`)}
        >
          Edit Travel
        </Button>
        <Button className={styles["remove-btn"]} onClick={removeHandler}>
          Remove Travel
        </Button>
      </div>
    </div>
  );
}

export default TravelDetails;
