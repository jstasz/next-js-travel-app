import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewTravelForm.module.css";
import Button from "../ui/Button";

function NewTravelForm(props) {
  const cityRef = useRef();
  const countryRef = useRef();
  const imageUrlRef = useRef();
  const placeToVisitRef = useRef();
  const foodRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredCity = cityRef.current.value;
    const enteredCountry = countryRef.current.value;
    const enteredImageUrl = imageUrlRef.current.value;
    const enteredPlaceToVisit = placeToVisitRef.current.value;
    const enteredFood = foodRef.current.value;

    const travelData = {
      city: enteredCity,
      country: enteredCountry,
      imageUrl: enteredImageUrl,
      placesToVisit: enteredPlaceToVisit,
      food: enteredFood
    };

    props.onAddTravel(travelData);
  }

  return (
    <>
    <h2 className='page-title'>New travel</h2>
    <Card className={styles["new-travel-card"]}>
      <form className={styles["new-travel-form"]} onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="city">city</label>
          <input type="text" id="city" ref={cityRef} required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="country">country</label>
          <input type="text" id="country" ref={countryRef} required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="imageUrl">image</label>
          <input type="url" id="imageUrl" ref={imageUrlRef} required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="placeToVisit">place to visit</label>
          <input
            type="text"
            id="placeToVisit"
            ref={placeToVisitRef}
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="food">food</label>
          <input type="text" id="food" ref={foodRef} required />
        </div>
          <Button className={styles['add-button']}>
            <span className="material-symbols-outlined">add_task</span>
          </Button>
      </form>
    </Card>
    </>
  );
}

export default NewTravelForm;
