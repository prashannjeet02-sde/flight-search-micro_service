const { CityService } = require("../services/index");

const cityService = new CityService();

// * Create new city
const newCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      success: true,
      message: "City Successfully Created",
      data: city,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create city",
      data: {},
      err: error,
    });
  }
};

//* List of All city
const listOfAllCity = async (req, res) => {
  try {
    const response = await cityService.allCity(req.query);
    return res.status(200).json({
      success: true,
      message: "List of all cities",
      data: response,
      err: {},
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: true, message: "Bad Request", data: {}, err: error });
  }
};

// * Get city
const listOfCity = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await cityService.fetchCity(id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched city",
      data: result,
      err: {},
    });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "Not Found", data: {}, err: error });
  }
};

// * Update City
const changeCity = async (req, res) => {
  try {
    const id = req.params.id;
    const data = {
      city_name: req.body.city_name,
    };
    const result = await cityService.updateCity(id, data);
    return res.status(200).json({
      success: true,
      message: "City name updated Successfully",
      data: result,
      err: {},
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Bad Request", data: {}, err: error });
  }
};

// * Delete City
const removeCity = async (req, res) => {
  try {
    const cityId = req.params.id;
    const response = await cityService.deleteCity(cityId);
    return res
      .status(200)
      .json({ success: true, message: "City deleted", err: {} });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Error", err: error });
  }
};
module.exports = { newCity, listOfCity, changeCity, removeCity, listOfAllCity };
