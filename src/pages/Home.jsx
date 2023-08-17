import { Fragment } from "react";

import Footer from "../Components/Footer/Footer";
import Quotes from "../Components/Quotes/Quotes";

function Home() {
  return (
    <Fragment>
      <Quotes />
      <Footer />
    </Fragment>
  );
}

export default Home;
