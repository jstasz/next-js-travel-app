import { useRef, useState } from "react";
import Card from "../ui/Card";
import styles from "./NewTravelForm.module.css";
import Button from "../ui/Button";
import ListItems from "../ui/ListItems";
import { useRouter } from "next/router";

function NewTravelForm(props) {
  const router = useRouter();
  const editMode = router.pathname.includes("edit-travel");

  const cityRef = useRef();
  const countryRef = useRef();
  const imageUrlRef = useRef();
  const placeRef = useRef();
  const foodRef = useRef();
  const restaurantRef = useRef();

  const [places, setPlaces] = useState(props.places || []);
  const [foods, setFoods] = useState(props.foods || []);
  const [restaurants, setRestaurants] = useState(props.restaurants || []);

  function addPlace() {
    placeRef.current.value !== '' ? setPlaces([...places, placeRef.current.value]) : '';
    placeRef.current.value = '';
  }

  function addFood() {
    foodRef.current.value !== '' ? setFoods([...foods, foodRef.current.value]) : '';
    foodRef.current.value = '';
  }

  function addRestaurant() {
    restaurantRef.current.value !== '' ? setRestaurants([...restaurants, restaurantRef.current.value]) : '';
    restaurantRef.current.value = '';
  }

  function removePlace(index) {
    setPlaces(places.filter((_, i) => i !== index));
  }

  function removeFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  function removeRestaurant(index) {
    setRestaurants(restaurants.filter((_, i) => i !== index));
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredCity = cityRef.current.value;
    const enteredCountry = countryRef.current.value;
    const enteredImageUrl = imageUrlRef.current.value;

    const travelData = {
      city: enteredCity,
      country: enteredCountry,
      imageUrl: enteredImageUrl,
      places: places,
      foods: foods,
      restaurants: restaurants
    };

    if(editMode) {
      props.onEditTravel(travelData)
    } else {
      props.onAddTravel(travelData);
    }
  }

  return (
    <>
    {!editMode && <h2 className='page-title'>add your new travel</h2>}
    {editMode && <h2 className='page-title'>edit your travel to {props.city}</h2>}
    <Card className={styles["new-travel-card"]}>
      <form className={styles["new-travel-form"]} onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="city">city</label>
          <input type="text" id="city" ref={cityRef} defaultValue={props.city} required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="country">country</label>
          <input type="text" id="country" ref={countryRef} defaultValue={props.country} required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="imageUrl">image</label>
          <input type="url" id="imageUrl" ref={imageUrlRef} defaultValue={props.imageUrl} required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="placeToVisit">place to visit</label>
          <div className={styles["add-input"]}>
          <input
            type="text"
            id="placeToVisit"
            ref={placeRef}
          />
                    <p className={`material-symbols-outlined ${styles["add-icon"]}`} onClick={addPlace}>
                    add_circle
            </p>
            </div>
        </div>
        <ListItems list={places} onClick={removePlace}/>
        <div className={styles["form-control"]}>
          <label htmlFor="food">food</label>
          <div className={styles["add-input"]}>
          <input className={styles["short-input"]} type="text" id="food" ref={foodRef} />
          <p className={`material-symbols-outlined ${styles["add-icon"]}`} onClick={addFood}>
              add_circle
            </p>
            </div>
        </div>
        <ListItems list={foods} onClick={removeFood}/>
        <div className={styles["form-control"]}>
          <label htmlFor="restaurant">restaurant</label>
          <div className={styles["add-input"]}>
          <input className={styles["short-input"]} type="text" id="restaurant" ref={restaurantRef} />
          <p className={`material-symbols-outlined ${styles["add-icon"]}`} onClick={addRestaurant}>
          add_circle
            </p>
            </div>
        </div>
        <ListItems list={restaurants} onClick={removeRestaurant}/>
        <Button className={styles['add-button']}>
          <span className="material-symbols-outlined">add_task</span>
        </Button>
      </form>
    </Card>
    </>
  );
}

export default NewTravelForm;
