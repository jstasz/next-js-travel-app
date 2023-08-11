import { useState } from "react";
import NewTravelForm from "../../components/travels/NewTravelForm";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

function NewTravelPage() {
  const router = useRouter();
  const [isLoadingData, setIsLoadingData] = useState(false);

  async function addTravelHandler(enteredTravelData) {
    setIsLoadingData(true);

    const response = await fetch("/api/new-travel", {
      method: "POST",
      body: JSON.stringify(enteredTravelData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    router.push("/");

    setIsLoadingData(false);
  }

  return (
    <>
    {!isLoadingData && <NewTravelForm onAddTravel={addTravelHandler} />}
    {isLoadingData && <LoadingSpinner />}
    </>
    );
}

export default NewTravelPage;
