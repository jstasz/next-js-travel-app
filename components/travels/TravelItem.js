function TravelItem(props) {
  return (
    <li>
      <div>
        <div>
          <img src={props.imageUrl} alt={props.city} />
        </div>
        <div>
          <h3>
            {props.city}
          </h3>
          <h3>
            {props.country}
          </h3>
        </div>
        <div>
          <button>Show Details</button>
        </div>
      </div>
    </li>
  );
}

export default TravelItem;
