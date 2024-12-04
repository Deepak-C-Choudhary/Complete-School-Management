
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL, 
  credentials: true, 
}));
// app.use(cors()); (use it instead of above code, when running on local host)
app.use(bodyParser.json());

// Routes
app.use("/api", schoolRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
