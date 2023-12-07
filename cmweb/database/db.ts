import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL || "";

const client = new MongoClient(uri, {});

export default client.connect();
