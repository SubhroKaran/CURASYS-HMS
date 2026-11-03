import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import patientRoutes from './routes/patientRoutes.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/patients', patientRoutes);

app.get('/', (req, res) => {
  res.send("Jarvis is running");
});




mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected!");
    app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port 3000`);
});
})
.catch((err)=>{
    console.log("MongoDB failed to connect",err);
});
