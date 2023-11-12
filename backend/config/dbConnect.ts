import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  let DB_URI: string =  ""

  if (process.env.NODE_ENV === 'development') 
    DB_URI = process.env.DB_LOCAL_URI!
  if (process.env.NODE_ENV === 'production') DB_URI = process.env.DB_URI!

  // For testing:
  // await mongoose.connect(DB_URI).then((con) => console.log("DB Connected"))
  // Otherwise:
  await mongoose.connect(DB_URI)
}

export default dbConnect