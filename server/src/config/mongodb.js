import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'

// Create an instance of database
let trelloDatabaseInstance = null;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version: https://www.mongodb.com/docs/drivers/node/current/fundamentals/stable-api/
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  // Connect the client to the server (optional starting in v4.7)
  await mongoClientInstance.connect();
  // Send a ping to confirm a successful connection
  trelloDatabaseInstance = await mongoClientInstance.db(env.DATABASE_NAME);
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to database first!');
  return trelloDatabaseInstance;
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}