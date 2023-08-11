import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://j_user:Justyna1@cluster0.37vzcx5.mongodb.net/travels?retryWrites=true&w=majority"
    );

    const db = client.db();

    const travelsCollection = db.collection("travels");
    const result = await travelsCollection.insertOne(data);

    client.close();

    res.status(210).json({ message: "Travel added!" });
  }
}

export default handler;
