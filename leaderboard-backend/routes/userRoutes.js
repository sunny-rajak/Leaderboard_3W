const express = require("express");
const router = express.Router();
const User = require("../models/User");
const History = require("../models/History");

// Add User
router.post("/add-user", async (req, res) => {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.json({ message: "User added successfully", user });
});

// Claim Points
router.post("/claim-points", async (req, res) => {
    const { userId } = req.body;

    const points = Math.floor(Math.random() * 10) + 1;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.totalPoints += points;
    await user.save();

    const history = new History({ userId, points });
    await history.save();

    res.json({ message: "Points claimed successfully", points, user });
});

// Get Leaderboard
router.get("/leaderboard", async (req, res) => {
    const users = await User.find().sort({ totalPoints: -1 });
    const leaderboard = users.map((user, index) => ({
        rank: index + 1,
        name: user.name,
        totalPoints: user.totalPoints,
        id: user._id,
    }));
    res.json(leaderboard);
});

// Get Claim History
router.get("/history", async (req, res) => {
    const history = await History.find()
        .populate("userId", "name")
        .sort({ timestamp: -1 });
    res.json(history);
});

module.exports = router;
