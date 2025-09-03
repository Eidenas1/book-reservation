const { sql } = require("../utils/postgres");
const db = require("../db");

exports.getAllBooksM = async () => {
  const booksList = await sql`
    SELECT 
      book_id, 
      title, 
      author, 
      isbn, 
      published_date::text AS published_date, 
      language, 
      cover_url, 
      created_at,
      description
    FROM books
  `;
  return booksList;
};