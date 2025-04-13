const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const EmployeeModel = require("./models/Employee");

dotenv.config(); // Load env vars

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/employee")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  console.log("Request Body:", req.body);
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json(err);
    });
});

// Use port from env
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
