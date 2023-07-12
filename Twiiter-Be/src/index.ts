import express from "express";

import userRoutes from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";
import authRoutes from "./routes/authRoutes";
import { authenticateToken } from "./middlewares/authMiddleware";

const app = express();

app.use(express.json());

app.use("/user", authenticateToken, userRoutes);
app.use("/tweet", authenticateToken, tweetRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/user", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

//list Tweets
app.get("/user", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// get one Tweet
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented : ${id}` });
});

// update Tweet
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented : ${id}` });
});

//delete Tweet
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented : ${id}` });
});

app.listen(8080, () => {
  console.log("Server ready at location: 8080");
});
