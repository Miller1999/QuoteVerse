import { useContext } from "react";
import { QuoteContext } from "../../context";
import Button from "../Button/Button";

const Quotes = () => {
  const { quote, author, genre } = useContext(QuoteContext);
  return (
    <section className="flex flex-col px-96 pt-16 justify-center items-center gap-12">
      <p className="border-l-2 border-yellow-500 pl-5">{quote}</p>
      <Button author={author} genre={genre}>
        {author}
      </Button>
    </section>
  );
};

export default Quotes;
