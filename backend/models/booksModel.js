const { sql } = require("../utils/postgres");
const db = require("../db");

exports.getAllBooksM = async () => {
  const booksList = await sql`
    SELECT * FROM books
    `;
  return booksList;
};