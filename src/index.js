import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'fontsource-roboto';
import { ListingsProvider } from "./ListingsContext.js";

ReactDOM.render(
    <ListingsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ListingsProvider>, 
    document.getElementById("root")
)