import { MongoClient } from "mongodb";
import TravelList from "@/components/travels/TravelsList";

function HomePage(props) {
  return <TravelList travels={props.travels} />;
}

export async function getStaticProps() {
  const client = new MongoClient(
    "mongodb+srv://j_user:Justyna1@cluster0.37vzcx5.mongodb.net/travels?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  await client.connect();

  const db = client.db("travels");
  const travelsCollection = db.collection("travels");
  const loadedTravels = await travelsCollection.find().toArray();

  console.log(loadedTravels);

  client.close();

  return {
    props: {
      travels: loadedTravels.map(travel => ({
        city: travel.city,
        country: travel.country,
        imageUrl: travel.imageUrl,
        id: travel._id.toString()
      }))
    },
    revalidate: 1
  };
}

export default HomePage;
