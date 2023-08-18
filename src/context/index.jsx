import { createContext, useState, useEffect } from "react";

export const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const API = " https://quote-garden.onrender.com/api/v3/quotes/random";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.data[0].quoteAuthor);
        setQuote(data.data[0].quoteText);
        setGenre(data.data[0].quoteGenre);
      });
  }, []);
  return (
    <QuoteContext.Provider value={{ quote, author, genre }}>
      {children}
    </QuoteContext.Provider>
  );
};
