import React from "react";
import { Link } from "react-router-dom";

export default function Example() {
    return (
        <div>
            <Link to="/">Home</Link> <br />
            <Link to="/about-us">About Us</Link> <br />
            <h1>Hello 3</h1>
        </div>
    );
}