import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Example from "./Example";

export default function Routers() {
    return (
        <Route>
            <Routes>
                <Router path="/" element={<Example />} />
            </Routes>
        </Route>
    );

}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}