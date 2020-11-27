const express = require("express");
const router = express.Router();
const {
  getVehiclesData,
  postVehiclesData,
  getVehicleById,
  sortByCapacity,
  filterByVehicleType,
} = require("../Controller/vehicleController");
const { Registration, Login } = require("../Controller/authController");

router.get("/all/:email", getVehiclesData);
router.get("/vehicle", getVehicleById);
router.post("/addvehicles", postVehiclesData);
router.post("/register", Registration);
router.post("/login", Login);
router.get("/sort/:email", sortByCapacity);
router.get("/type/:email", filterByVehicleType);

module.exports = router;