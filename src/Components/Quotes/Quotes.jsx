import Button from "../Button/Button";

const Quotes = () => {
  return (
    <section className="flex flex-col px-96 pt-16 justify-center items-center gap-12">
      <p className="border-l-2 border-yellow-500 pl-5">
        “The first rule of any technology used in a business is that automation
        applied to an efficient operation will magnify the efficiency. The
        second is that automation applied to an inefficient operation will
        magnify the inefficiency.”
      </p>
      <Button autor="Bill Gates">Bill Gates</Button>
    </section>
  );
};

export default Quotes;
