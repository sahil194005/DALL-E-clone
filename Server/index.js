
const { OpenAI } = require('openai')
const express = require('express');
const cors = require('cors');
const { AbortController } = require('node-abort-controller');
global.AbortController = AbortController;
 require('dotenv').config();
const connectDB = require('./DB/connect')
const postRoutes = require('./Routes/postRoute')
const dalleRoutes = require('./Routes/DalleRoute')

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)
  
const startServer = async () => {
    try {
       await connectDB(process.env.MONGODB_URL);
        app.listen(process.env.PORT, () => {
            console.log(`server running on PORT ${process.env.PORT}`);
        });
        
    } catch (error) {
        console.log(error);
    }
};
startServer();
