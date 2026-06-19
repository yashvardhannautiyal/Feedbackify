const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/DbConfig");

const app = express();

//connect database
connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes

app.use("/api/feedback", require("./routes/FeedbackRoutes"));

// test route
app.get("/", (req, res) =>{
    res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});