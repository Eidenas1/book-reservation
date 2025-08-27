import { useState, useEffect } from "react";
import { getData } from "../services/get";
import { BooksContext } from "./contexts";

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getData("books");
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

    return (
    <BooksContext
      value={{ books, setBooks }}
    >
      {children}
    </BooksContext>
  );
};


