import "./DetailsPage.scss";
import Nav from "../../components/Nav/Nav";
import { useContext, useState } from "react";
import { BooksContext } from "../../contexts/contexts";
import { useParams } from "react-router";
import { CircleLoader } from "react-spinners";
const DetailsPage = () => {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const [imgLoading, setImgLoading] = useState(true);
  if (!books || books.length === 0) {
    return <div className="flex h-[200dvh] items-center justify-center"></div>;
  }
  const book = books.find((book) => book.book_id === Number(id));
  const flags = {
    en: "https://flagcdn.com/gb.svg",
    fr: "https://flagcdn.com/fr.svg",
    es: "https://flagcdn.com/es.svg",
  };
  return (
    <div className="flex h-[200dvh]">
      <div className="z-10 w-full h-full flex">
        <div className="w-1/12 shadow-[inset_0_0_2rem_rgba(0,0,0,0.9)] bg-[#4E3524] max-md:hidden"></div>
        <Nav />
        <div className="shadow-[inset_0_0_4rem_rgba(0,0,0,0.9)] blob blob-reverse mx-auto flex aspect-[9/16] flex-col max-md:justify-start max-h-[full] w-3/4 items-start overflow-hidden bg-[#4E3524] p-16 py-16 transition-[background] before:absolute before:top-[25%] before:left-[75%] before:z-0 before:h-[20%] before:w-[20%] before:origin-[60%] before:rounded-[30rem] before:bg-gradient-to-br before:from-[#161010] before:via-[#382121] before:to-[#763636] before:blur-[85px] before:brightness-150 after:absolute after:top-[25%] after:left-[20%] after:z-0 after:h-[20%] after:w-[20%] after:origin-[60%] after:rounded-[30rem] after:bg-gradient-to-br after:from-[#763636] after:via-[#382121] after:to-[#161010] after:blur-[85px] after:brightness-150 max-md:before:h-[35%] max-md:before:w-[100%] max-md:after:h-[35%] max-md:after:w-[100%] max-md:before:rounded-2xl max-md:after:rounded-2xl max-md:before:top-[5%] max-md:after-top-[5%] max-md:w-full max-md:h-[675dvh]">
          <div className="flex z-20 w-full h-full gap-16 flex-col max-md:flex-row bg-[#d6d2bc] border-8 border-[#3a271b] shadow-[inset_0_0_2rem_rgba(0,0,0,0.9)] p-12">
            {imgLoading && (
              <div className="w-full h-full flex justify-center p-32">
                <CircleLoader color="#4E3524" size={45} />
              </div>
            )}
            <div
              className={`border-6 border-[#3a271b] flex flex-col gap-12 p-14 w-full h-full  ${
                imgLoading ? "invisible" : "visible"
              }`}
            >
              <div className="w-full gap-16 max-md:flex-col justify-between flex">
                <div className="w-1/3 border-4 border-[#3a271b]">
                  <img
                    src={book.cover_url}
                    alt="Book Cover"
                    className="w-full h-full"
                    onLoad={() => setImgLoading(false)}
                  />
                </div>
                <div className="w-1/3 gap-6 flex flex-col text-xl text-center justify-center font-semibold text-[#4E3524]">
                  <p>Title: {book.title}</p>
                  <p>Author: {book.author}</p>
                  <p>ISBN: {book.isbn}</p>
                  <p>
                    Published Date: <br /> {book.published_date}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span>Language:</span>
                    {flags[book.language] && (
                      <img
                        src={flags[book.language]}
                        alt={`${book.language} flag`}
                        className="max-w-8 max-h-10"
                      />
                    )}
                  </div>
                </div>

                <div className="w-1/3 flex flex-col justify-center items-center font-bold gap-16 text-[#4E3524] ">
                  <button className=" w-full p-4 border-2  border-[#3a271b] rounded-2xl cursor-pointer">
                    RESERVE
                  </button>
                  <button className="w-full  p-4 border-2  border-[#3a271b] rounded-2xl cursor-pointer">
                    EXTEND RESERVATION PERIOD
                  </button>
                </div>
              </div>
              <div className="w-full gap-8 justify-center items-center text-bold text-4xl text-[#4E3524] flex">
                <hr className="w-1/4" /> <h1>Description</h1>{" "}
                <hr className="w-1/4" />
              </div>
              <div className="h-full w-full flex text-lg">
                <h1>{book.description}</h1>
              </div>
              <div className="h-1/3 flex flex-col gap-6">
                <div className="w-full gap-8 justify-center items-center text-bold text-4xl text-[#4E3524] flex">
                  <hr className="w-1/4" />{" "}
                  <h1>Reviews {/*({reviews.count})*/}</h1>{" "}
                  <hr className="w-1/4" />
                </div>
                <div className="h-full w-full flex flex-col text-center">
                  <button className="self-center p-2 border-1 border-[#3a271b] rounded-xl text-xs cursor-pointer">
                    WRITE A REVIEW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
