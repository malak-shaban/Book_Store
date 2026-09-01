require("dotenv").config();   //read .env
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
// Import Routes
const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const app = express();
// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// Connect Database
connectDB();
//////////////////////////////////
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Book Store API!',
    status: 'Server is running successfully'
  });
});
// Routes
app.use("/", authRoutes);
app.use("/books", bookRoutes);
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});