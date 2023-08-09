import TravelItem from "./TravelItem";

function TravelList(props) {
  return (
    <ul>
      <p>Travels List</p>
      {props.travels.map(travel =>
        <TravelItem
          key={travel.id}
          id={travel.id}
          city={travel.place}
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
