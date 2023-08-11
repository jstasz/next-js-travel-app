import { MongoClient, ObjectId } from "mongodb";
import TravelDetails from "@/components/travels/TravelDetails";

function TravelDetailsPage(props) {
  return (
    <TravelDetails
      city={props.travelData.city}
      country={props.travelData.country}
      imageUrl={props.travelData.imageUrl}
      placeToVisit={props.travelData.placeToVisit}
      food={props.travelData.food}
      restaurant={props.travelData.restaurant}
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
    fallback: false,
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
        placeToVisit: selectedTravel.placeToVisit || null,
        food: selectedTravel.food || null,
        restaurant: selectedTravel.restaurant || null
      }
    }
  };
}

export default TravelDetailsPage;
