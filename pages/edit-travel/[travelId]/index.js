import NewTravelForm from "@/components/travels/NewTravelForm";
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";

function EditTravelPage(props) {
  const router = useRouter();

  async function editTravelHandler(travelData) {
    const updatedData = {
      id: props.travelData.id,
      updatedTravelData: travelData
    };

    const response = await fetch("/api/travel", {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    router.push("/");
  }

  return (
    <NewTravelForm
      city={props.travelData.city}
      country={props.travelData.country}
      imageUrl={props.travelData.imageUrl}
      places={props.travelData.places}
      foods={props.travelData.foods}
      restaurants={props.travelData.restaurants}
      onEditTravel={editTravelHandler}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://j_user:Justyna1@cluster0.37vzcx5.mongodb.net/travels?retryWrites=true&w=majority"
  );
  const db = client.db();
  const travelsCollection = db.collection("travels");
  const loadedtravels = await travelsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: loadedtravels.map(travel => ({
      params: { travelId: travel._id.toString() }
    }))
  };
}

export async function getStaticProps(context) {
  const travelId = context.params.travelId;

  const client = await MongoClient.connect(
    "mongodb+srv://j_user:Justyna1@cluster0.37vzcx5.mongodb.net/travels?retryWrites=true&w=majority"
  );
  const db = client.db();
  const travelsCollection = db.collection("travels");

  const selectedTravel = await travelsCollection.findOne({
    _id: new ObjectId(travelId)
  });

  return {
    props: {
      travelData: {
        id: selectedTravel._id.toString(),
        city: selectedTravel.city,
        country: selectedTravel.country,
        imageUrl: selectedTravel.imageUrl,
        places: selectedTravel.places || null,
        foods: selectedTravel.foods || null,
        restaurants: selectedTravel.restaurants || null
      }
    }
  };
}

export default EditTravelPage;
