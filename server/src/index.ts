import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 6060;

async function runServer ()
{
  try
  {
    await mongoose.connect( process.env.MONGO_URI as string );
    app.listen( port, () =>
    {
      console.log( `Your server is running on  ${ port }` );
    } );
  } catch ( error )
  {
    console.log( error );
  }
}

runServer();
