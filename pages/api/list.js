import clientPromise from "../../lib/mongodb"

export default async function handler(request, response) {
    if (request.method === "GET") {
        try {
            // const { mongoClient } = await connectToDatabase();
            const mongoClient = await clientPromise;
            const db = mongoClient.db("meteora_products");
            const collection = db.collection("products");
            const results = await collection
                .find({})
                .project({
                })
                .limit(20)
                .toArray();

            response.status(200).json(results);
        } catch (e) {
            console.error(e);
            response.status(500).json(e);
        }
    }
    else if (request.method === "POST") {
        const data = request.body;
        const mongoClient = await clientPromise;
        const db = mongoClient.db("meteora_products");
        const yourCollection = db.collection("products");
        const results = await yourCollection.insertOne(data);
        console.log(results);
        //client.close();
        response.status(201).json({ message: "Data inserted successfully!" });
    }
}
