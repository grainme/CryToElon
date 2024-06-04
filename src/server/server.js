import express, { json, urlencoded } from "express";
const app = express();
import mongoose from "mongoose";
import WebSocket from "ws";

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
const url = "mongodb://localhost:27018/crypto_trades";
mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a schema and a model
const mySchema = new mongoose.Schema({
  time: Number,
  id: Number,
  vwap: Number,
});

const MyModel = mongoose.model("trades", mySchema, "trades");

// Routes
app.get("/", (req, res) => {
  res.send("server is up");
});

// Start server
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Set up a change stream using Mongoose
const changeStream = MyModel.watch();

const ws = WebSocket.Server({ server });

changeStream.on("change", (change) => {
  console.log("Change stream event:", change);
  ws.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(change));
    }
  });
});
