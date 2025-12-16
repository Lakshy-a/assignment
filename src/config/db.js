import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}${process.env.COLLECTION_NAME}`, {
            //   useNewUrlParser: true,
            //   useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection failed');
        process.exit(1);
    }
}


export default connectDB;
