import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./TravelDetails.module.css";

function TravelDetails(props) {
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
        <Button className={styles["remove-btn"]} onClick={removeHandler}>
          Remove Travel
        </Button>
        <div />
      </Card>
      <div className={styles["to-do"]}>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            <span className={styles["title-color"]}>places</span> you must see
          </h3>
          <p className={styles["item"]}>
            {props.placeToVisit}
          </p>
          <div className={styles["edit"]}>
            <p className={`material-symbols-outlined ${styles["edit-icon"]}`}>
              edit
            </p>
          </div>
        </div>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            worth visiting{" "}
            <span className={styles["title-color"]}>restaurants</span>
          </h3>
          <p className={styles["item"]}>
            {props.restaurant}
          </p>
          <div className={styles["edit"]}>
            <p className={`material-symbols-outlined ${styles["edit-icon"]}`}>
              edit
            </p>
          </div>
        </div>
        <div className={styles["box"]}>
          <h3 className={styles["title"]}>
            <span className={styles["title-color"]}>food</span> you should try
          </h3>
          <p className={styles["item"]}>
            {props.food}
          </p>
          <div className={styles["edit"]}>
            <p className={`material-symbols-outlined ${styles["edit-icon"]}`}>
              edit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelDetails;
