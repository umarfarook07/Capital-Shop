import mongoose from 'mongoose';

const connectToMongo = () => {
  // Your MongoDB connection logic here
  mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));
};

export default connectToMongo;
