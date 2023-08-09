import Layout from "@/components/layout/Layout";
import NewTravelForm from "../../components/travels/NewTravelForm";

function NewTravel() {
  function addTravelHandler(enteredTravelData) {
    console.log(enteredTravelData);
  }

  return <NewTravelForm onAddTravel={addTravelHandler} />;
}

export default NewTravel;
