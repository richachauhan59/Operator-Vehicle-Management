const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const Vehicles = require("./models/vehicleSchema");
const vehiclesList = require("./data");
const router = require("./Routes/routes");

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    {
      console.log("Connection Successfull!");
      // Vehicles.insertMany(vehiclesList)
        // .then(() => console.log("Inserted SuccessFully!"))
        // .catch((err) => console.log(err));
    }
  }
);

app.use("/", router);

app.listen(8000, () => {
  console.log("Server is up and running at port 5000!");
});