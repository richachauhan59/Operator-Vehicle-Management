const VehiclesData = require("../models/vehicleSchema");

const getVehiclesData = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  results.totalCount = await VehiclesData.find({ Owner: req.params.email })
    .countDocuments()
    .exec();
  if (
    endIndex <
    (await VehiclesData.find({ Owner: req.params.email })
      .countDocuments()
      .exec())
  ) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
      limit: limit,
    };
  }
  VehiclesData.find({ Owner: req.params.email })
    .limit(limit)
    .skip(startIndex)
    .then((item) =>
      res.status(200).json({ item: item, totalCount: results.totalCount })
    )
    .catch((err) =>
      res.status(400).json({ message: "Failed to extract the Information" })
    );
};

const getVehicleById = (req, res) => {
  VehiclesData.findOne({ Owner: req.query.email, RegistrationNo: req.query.id })
    .then((item) => res.status(200).json(item))
    .catch((err) =>
      res.status(400).json({ message: "Failed to extract the Information" })
    );
};

const sortByCapacity = async (req, res) => {
  const { order } = req.query;
  if (order == "asc") {
    await VehiclesData.find({ Owner: req.params.email })
      .sort({ vehicleCapacity: 1 })
      .then((response) => res.json(response))
      .catch((err) => res.json({ error: "error" + err }));
  } else if (order == "desc") {
    await VehiclesData.find({ Owner: req.params.email })
      .sort({ vehicleCapacity: -1 })
      .then((response) => res.json(response))
      .catch((err) => res.json({ error: "error" + err }));
  } else {
    res.json({ error: "Input invalid" });
  }
};

const filterByVehicleType = async (req, res) => {
  const { vehicleType } = req.query;
  await VehiclesData.find({ Owner: req.params.email, vehicleType: vehicleType })
    .then((response) => res.json(response))
    .catch((err) => res.json({ error: "error" + err }));
};

const postVehiclesData = (req, res) => {
  const {
    vehicleId,
    vehicleImage,
    vehicleName,
    RegistrationNo,
    vehicleType,
    vehicleCapacity,
    vehicleDatas,
    Owner,
  } = req.body;
  const vehicleData = new VehiclesData({
    vehicleId,
    vehicleImage,
    vehicleName,
    RegistrationNo,
    vehicleType,
    vehicleCapacity,
    vehicleDatas,
    Owner,
  });
  vehicleData
    .save()
    .then(() => res.json("New Vehicles Added."))
    .catch((err) => res.status(400).json("Error is => " + err));
};
module.exports = {
  getVehiclesData,
  postVehiclesData,
  getVehicleById,
  sortByCapacity,
  filterByVehicleType,
};
