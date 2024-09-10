import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        const connectionString="mongodb+srv://idlakshan21:lakshan21@devcluster.2rwwy.mongodb.net/storehub?retryWrites=true&w=majority&appName=DevCluster"
        await mongoose.connect(connectionString);
        console.log("connected to the database");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to the database");
        
        
    }
}