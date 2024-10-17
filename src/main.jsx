import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./Contexts/ProductsContext.jsx";
import CartContext from "./Contexts/CartContext.jsx";
import StateContext from "./Contexts/StatesContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ProductsContext>
          <CartContext>
            <StateContext>
              <App />
            </StateContext>
          </CartContext>
        </ProductsContext>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
