import TravelItem from "./TravelItem";
import styles from "./TravelsList.module.css";

function TravelList(props) {
  return (
    <ul className={styles.travels}>
      {props.travels.map(travel =>
        <TravelItem
          key={travel.id}
          id={travel.id}
          city={travel.city}
          country={travel.country}
          imageUrl={travel.imageUrl}
          placesToVisit={travel.address}
          food={travel.food}
        />
      )}
    </ul>
  );
}

export default TravelList;
