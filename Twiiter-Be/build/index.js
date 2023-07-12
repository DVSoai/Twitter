"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const tweetRoutes_1 = __importDefault(require("./routes/tweetRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const authMiddleware_1 = require("./middlewares/authMiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", authMiddleware_1.authenticateToken, userRoutes_1.default);
app.use("/tweet", authMiddleware_1.authenticateToken, tweetRoutes_1.default);
app.use("/auth", authRoutes_1.default);
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
