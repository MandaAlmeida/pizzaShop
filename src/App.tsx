import { Helmet, HelmetProvider } from "react-helmet-async";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
