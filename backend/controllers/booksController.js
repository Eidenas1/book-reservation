const {
  getAllToursM,
} = require("../models/booksModel");
const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");

exports.getAllTours = async (req, res, next) => {
  try {
    const toursList = await getAllToursM();
    res.status(200).json({
      status: "success",
      tours: toursList,
    });
  } catch (error) {
    next(error);
  }
};
