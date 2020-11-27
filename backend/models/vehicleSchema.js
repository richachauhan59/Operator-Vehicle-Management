const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    vehicleId: {
      type: String,
      trim: true,
      required: true,
    },
    vehicleImage: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    RegistrationNo: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleType: {
      type: String,
      required: true,
    },
    vehicleCapacity: {
      type: Number,
      required: true,
    },
    vehicleDetails: {
      type: Array,
      required: true,
    },
    Owner: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("VehiclesData", vehicleSchema);