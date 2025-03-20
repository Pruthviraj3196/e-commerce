const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userData");
const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/e-commerce")
.then(() => console.log("Connection with DataBase made Successfully"))
.catch((error) => console.log(error));

const PORT = 8080; 

app.use("/api/v1/",userRouter);
app.use("/api/v1",productRouter);
app.use("/api/v1", orderRouter);

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})