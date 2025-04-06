const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const enquiryRoutes = require('./src/routes/web/enquiryRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DBURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("DB Error:", error));

// Route mounting
app.use("/web/api/enquiry", enquiryRoutes);


// Start server
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
