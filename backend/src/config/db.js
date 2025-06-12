import mongoose from "mongoose";
export const connectDB = async() =>{
try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo");
}catch(err){
    console.error(`Error: ${error.message}`);
    process.exit(1); // process code 1 code means exit with failure, 0 means success
}
}
