import Card from "../ui/Card";
import styles from "./TravelDetails.module.css";

function TravelDetails(props) {
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
      </Card>
      <div className={styles["to-do"]}>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            <span className={styles["title-color"]}>places</span> you must see
          </h3>
          <p className={styles["item"]}>
            {props.placeToVisit}
          </p>
        </div>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            worth visiting{" "}
            <span className={styles["title-color"]}>restaurants</span>
          </h3>
          <p className={styles["item"]}>
            {props.restaurant}
          </p>
        </div>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            <span className={styles["title-color"]}>food</span> you should try
          </h3>
          <p className={styles["item"]}>
            {props.food}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TravelDetails;
