import { Fragment } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./index.css";
import { QuoteContextProvider } from "./context";

function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return routes;
}

function App() {
  return (
    <QuoteContextProvider>
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <AppRoutes />
        </Fragment>
      </BrowserRouter>
    </QuoteContextProvider>
  );
}

export default App;
