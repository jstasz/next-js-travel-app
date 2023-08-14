import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://j_user:Justyna1@cluster0.37vzcx5.mongodb.net/travels?retryWrites=true&w=majority"
  );

  const db = client.db();

  const travelsCollection = db.collection("travels");

  if (req.method === "POST") {
    const data = req.body;

    const result = await travelsCollection.insertOne(data);

    client.close();

    res.status(200).json({ message: "Travel added!" });
  }

  if (req.method === "DELETE") {
    const travelId = req.body.id;

    const result = await travelsCollection.deleteOne({
      _id: new ObjectId(travelId)
    });

    client.close();

    res.status(200).json({ message: "Travel deleted!" });
  }
}

export default handler;
