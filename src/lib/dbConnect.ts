import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
  };

  const connection:ConnectionObject = {}

  async function dbConnect() : Promise<void> {
   if(connection.isConnected){
    console.log('already connected to database')
   }

   try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "")
    connection.isConnected=db.connections[0].readyState
    console.log('db connections successfully')
   } catch (error) {
    console.log('database connection failed',error);
    process.exit()
   }

  }

  export default dbConnect