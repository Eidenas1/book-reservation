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

exports.deleteBook = async (id) => {
  const book = await sql`
   DELETE FROM books
   WHERE books.book_id = ${id}
   returning *
    `;
  return book;
};

exports.updateBook = async (id, updatedBook) => {
  const book = await sql`
    update books set ${sql(
      updatedBook,
      "title",
      "author",
      "isbn",
      "published_date",
      "language",
      "cover_url",
      "description"
    )}
    where id = ${id}
    returning *;
  `;
  return book[0];
};