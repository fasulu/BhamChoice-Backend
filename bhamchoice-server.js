const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose');
const app = express();

const router = require('./Routes/bhamChoiceRoutes');

const { debug } = require('./Middleware/debug');

const config = require('./Config/config')

app.use(cors());
app.use(express.json());

const port = config.port;
const mongoURL = config.mongoURL;

mongoose.set('strictQuery', true);

mongoose.connect(mongoURL, { useNewUrlParser: true }, { useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log("Connected");
        }
    });

app.use("/", debug, router)

app.listen(port, () => {
    console.log("Server listening in : ", port)
})