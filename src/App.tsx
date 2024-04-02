import { Helmet, HelmetProvider } from "react-helmet-async";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
