// index.js
const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("./db/dbConnect.js");
const app = require("./app.js");

app.use(express.json());
app.use(cors());

// const userRouter = require("./route/user.route");
// app.use("/api/users", userRouter);

const authRoutes = require("./route/auth.route.js");
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Hey this is my API running 🥳");
// });

// app.get("/about", (req, res) => {
//   res.send("This is my about route..... ");
// });

// Export the Express API
module.exports = app;
