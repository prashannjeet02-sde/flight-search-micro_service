const { AirportService } = require("../services/index");

const airportService = new AirportService();

// * Create Single Airport
const controllerCreateAirport = async (req, res) => {
  try {
    const airport = await airportService.serviceCreateAirport(req.body);
    return res.status(201).json({
      success: true,
      message: "Airport created",
      data: airport,
      err: {},
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Bad Request", data: {}, err: error });
  }
};

//* Create Multiple Airports
const controllerMultipleAirports = async (req, res) => {
  try {
    const bulkAirport = await airportService.serviceCreateBulkAirport(req.body);
    return res.status(201).json({
      success: true,
      message: "Airports Created",
      data: bulkAirport,
      err: {},
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to create multiple Airports",
      err: error,
      data: {},
    });
  }
};

// * Get single Airport
const controllerGetAirport = async (req, res) => {
  try {
    const airportId = req.params.id;
    const result = await airportService.serviceGetAirport(airportId);
    return res.status(200).json({
      success: true,
      message: "Airport fetched",
      data: result,
      err: {},
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Failed to fetch",
      data: {},
      err: error,
    });
  }
};

// * Get Multiple Airports
const controllerGetAirports = async (req, res) => {
  try {
    const allAirports = await airportService.serviceGetAllAirports(req.body);
    return res.status(200).json({
      success: true,
      message: "List of airports",
      data: allAirports,
      err: {},
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Failed to fetch",
      data: {},
      err: error,
    });
  }
};

// * Autocomplete Airport API
const controllerAutoCompleteAirport = async (req, res) => {
  try {
    const { letter } = req.query;
    const airport = await airportService.serviceAutocompleteAirport(letter);
    return res
      .status(200)
      .json({ success: true, message: "Airports", data: airport, err: {} });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Bad Request",
      data: {},
      err: error.message,
    });
  }
};

// * Update Airport
const controllerUpdateAirport = async (req, res) => {
  try {
    const airportId = req.params.id;
    const data = {
      name: req.body.name,
      address: req.body.address,
      city_id: req.body.city_id,
    };
    const result = await airportService.serviceUpdateAirport(airportId, data);
    return res.status(200).json({
      success: true,
      message: "Airport Data Updated Successfully",
      data: result,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to Update",
      data: {},
      err: error,
    });
  }
};

// * Delete Airport
const controllerDeleteAirport = async (req, res) => {
  try {
    const airportId = req.params.id;
    const result = await airportService.serviceDeleteAirport(airportId);
    return res.status(200).json({
      success: true,
      message: "Airport deleted Successfully",
      data: {},
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete",
      err: error,
      data: {},
    });
  }
};

// * Delete Multiple Airports
const controllerBulkAirportDelete = async (req, res) => {
  try {
    const ids = req.body.id;
    const deleteCount = await airportService.serviceBulkAirportDelete(ids);
    return res
      .status(200)
      .json({ success: true, message: "Deleted Successfully", err: {} });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete airports",
      data: {},
      err: error,
    });
  }
};

module.exports = {
  controllerCreateAirport,
  controllerMultipleAirports,
  controllerGetAirport,
  controllerGetAirports,
  controllerUpdateAirport,
  controllerDeleteAirport,
  controllerBulkAirportDelete,
  controllerAutoCompleteAirport,
};
