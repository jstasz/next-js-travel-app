import NewTravelForm from "../../components/travels/NewTravelForm";
import { useRouter } from "next/router";

function NewTravelPage() {
  const router = useRouter();

  async function addTravelHandler(enteredTravelData) {
    const response = await fetch("/api/new-travel", {
      method: "POST",
      body: JSON.stringify(enteredTravelData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    router.push("/");
  }

  return <NewTravelForm onAddTravel={addTravelHandler} />;
}

export default NewTravelPage;
