const {
  getAllBooksM,
} = require("../models/booksModel");

exports.getAllBooks = async (req, res, next) => {
  try {
    const booksList = await getAllBooksM();
    res.status(200).json({
      status: "success",
      books: booksList,
    });
  } catch (error) {
    next(error);
  }
};
