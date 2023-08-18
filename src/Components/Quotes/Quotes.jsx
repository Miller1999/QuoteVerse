import { Fragment, useContext, useState } from "react";
import { QuoteContext } from "../../context";
import Button from "../Button/Button";

const Quotes = () => {
  const { quote, author, genre, quotesAuthor } = useContext(QuoteContext);
  const [showQuotesAuthor, setShow] = useState(true);

  const handleShow = () => {
    setShow(!showQuotesAuthor);
  };

  return (
    <section className="flex flex-col px-96 py-16 justify-center items-center gap-12 max-[426px]:px-5 max-[769px]:px-40">
      {showQuotesAuthor ? (
        <p className="border-l-2 border-yellow-500 pl-5">{quote}</p>
      ) : (
        <Fragment></Fragment>
      )}

      <Button author={author} genre={genre} handleShow={handleShow}>
        {author}
      </Button>
      {!showQuotesAuthor ? (
        quotesAuthor.map((quote) => (
          <p
            className="border-l-2 border-yellow-500 pl-5 w-full"
            key={quote._id}
          >
            {quote.quoteText}
          </p>
        ))
      ) : (
        <Fragment></Fragment>
      )}
    </section>
  );
};

export default Quotes;
