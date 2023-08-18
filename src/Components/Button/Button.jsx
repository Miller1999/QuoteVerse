import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const Button = ({ children, author, genre, handleShow }) => {
  const handleClick = () => {
    window.location.href = "/";
  };
  if (author) {
    return (
      <button
        className="flex w-96 p-5 items-center gap-2 justify-between hover:bg-slate-900 hover:text-white transition-all duration-500 max-[426px]:w-full max-[769px]:w-full"
        onClick={() => handleShow()}
      >
        <div className="flex flex-col">
          <span className="text-lg">{author}</span>
          <span className="text-sm text-gray-400">{genre}</span>
        </div>

        <ArrowLongRightIcon className="h-5 w-5" />
      </button>
    );
  } else {
    return (
      <button
        className="flex w-full px-20  py-5 items-center gap-2 justify-end max-[426px]:justify-center"
        onClick={() => handleClick()}
      >
        <span className="text-lg">{children}</span>
        <ArrowPathIcon className="h-5 w-5" />
      </button>
    );
  }
};

export default Button;
