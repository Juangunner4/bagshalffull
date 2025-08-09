import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (_, res) => res.send("API is running"));

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/yourgame";

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`API listening on ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
