// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
const BooksCard = ({ book }) => {
  const flags = {
    en: "https://flagcdn.com/gb.svg",
    fr: "https://flagcdn.com/fr.svg",
    es: "https://flagcdn.com/es.svg",
  };
  return (
    <Link>
      <button>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="text-center flex flex-col gap-4"
        >
          <div className="gap-2 flex flex-col">
            <div className="relative inline-block">
              <img
                src={book.cover_url}
                alt={book.title}
                className="max-w-full"
              />
              {flags[book.language] && (
                <img
                  src={flags[book.language]}
                  alt={`${book.language} flag`}
                  className="absolute top-0 left-0 max-w-8 max-h-10"
                />
              )}
            </div>
            <div>
              <h2 className="text-[#d6d2bc] text-base ">{book.author}</h2>
            </div>
          </div>
          <div>
            <h1 className="text-[#d6d2bc] text-xl font-semibold">
              {book.title}
            </h1>
          </div>
        </motion.div>
      </button>
    </Link>
  );
};

export default BooksCard;
