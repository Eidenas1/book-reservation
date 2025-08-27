
import BooksCard from "../BooksCard/BooksCard";
import { BooksContext }  from "../../contexts/contexts";
import { useContext } from "react";

const CardsGrid = () => {
  const { books } = useContext(BooksContext);
  return (
    <section className="w-full grid grid-cols-[repeat(5,minmax(1rem,1fr))] gap-16 ">
      {books.length === 0 ? (
        <p className=" ">
          We couldn’t find any available excursions right now. Please check back
          later.
        </p>
      ) : (
        books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))
      )}
    </section>
  );
};

export default CardsGrid;
