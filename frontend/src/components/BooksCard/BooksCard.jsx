const BooksCard = ({ book }) => {
  return (
    
      <div className="text-center flex flex-col gap-4">
        <div className="gap-2 flex flex-col">
            <div>
                <img src={book.cover_url} alt={book.cover_url} className="max-w-full"/>
            </div>
            <div>
                <h2 className="text-[#d6d2bc] text-base ">{book.author}</h2>
            </div>
        </div>
        <div>
            <h1 className="text-[#d6d2bc] text-xl font-semibold">{book.title}</h1>
        </div>
      </div>
    
  );
};

export default BooksCard;
