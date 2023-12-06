export default async function connection() {
  const { MongoClient, ServerApiVersion } = require('mongodb');

  const uri = process.env.DATABASE_URL;

  const dbName = process.env.DB_NAME;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  const db = await client.db(dbName);
  return db;
}

export async function testDB() {
  const { MongoClient, ServerApiVersion } = require('mongodb');

  const uri = process.env.DATABASE_URL;

  const dbName = process.env.DB_NAME;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}