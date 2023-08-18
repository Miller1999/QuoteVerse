import { createContext, useState, useEffect } from "react";

export const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [quotesAuthor, setQuotesAuthor] = useState();
  const API = " https://quote-garden.onrender.com/api/v3/quotes/random";
  const quotes = `https://quote-garden.onrender.com/api/v3/quotes?author=${author}`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.data[0].quoteAuthor);
        setQuote(data.data[0].quoteText);
        setGenre(data.data[0].quoteGenre);
      });
  }, []);

  useEffect(() => {
    fetch(quotes)
      .then((res) => res.json())
      .then((data) => {
        setQuotesAuthor(data.data);
      });
  }, [quotes]);

  return (
    <QuoteContext.Provider value={{ quote, author, genre, quotesAuthor }}>
      {children}
    </QuoteContext.Provider>
  );
};
