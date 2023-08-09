import Layout from "@/components/layout/Layout";
import NewTravelForm from "../../components/travels/NewTravelForm";

function NewTravelPage() {
  function addTravelHandler(enteredTravelData) {
    console.log(enteredTravelData);
  }

  return <NewTravelForm onAddTravel={addTravelHandler} />;
}

export default NewTravelPage;
