import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import router from "./src/routes/user.route"

const PORT = 8000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("Hello World!");
})

app.use(bodyParser.json());
const DB_URL = 'mongodb://127.0.0.1:27017/admin';

mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})

export default app;