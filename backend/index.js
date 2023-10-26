const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.use(bodyParser.json());

const authRouter = require("./routes/auth");
const expensesRouter = require("./routes/expensesRoute");

app.use("/auth", authRouter);
app.use("/expenses", expensesRouter);

const port = 4000;

app.listen(port,() => {
    console.log(`Server ready at : ${port}`);
});