import { useState, useEffect } from "react";
import { BooksContext } from "./contexts";
import { getData } from "../services/get";

export const ExcursionContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getData("books");
        setBooks(data.books); 
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BooksContext
      value={{ books, setBooks, loading, setLoading }}
    >
      {children}
    </BooksContext>
  );
};
