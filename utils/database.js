import mongoose from "mongoose";

let isConnected = false;

//set Query to strict to not get Warnings in our Console
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    
    if(isConnected) {
        console/log('MongoDB is connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })

        isConnected = true;
        console.log('MongoDB connected!')
    } catch (error) {
        console.log(error)
    }
}