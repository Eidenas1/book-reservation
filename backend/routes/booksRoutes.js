const express = require("express");
const router = express.Router();

const {
  getAllBooks
} = require("../controllers/booksController");

router
  .route("/").get(getAllBooks);

  
module.exports = router;
