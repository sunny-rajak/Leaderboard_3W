const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

const allowedOrigins = [
    "http://localhost:3000",
    "https://leaderboard-3-w.vercel.app",
];

dotenv.config();

const app = express();

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
