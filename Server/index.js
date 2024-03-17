import express from 'express';
import connectToMongo from './Database/database.js';
const app = express();

// Initialize database connection
connectToMongo();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
