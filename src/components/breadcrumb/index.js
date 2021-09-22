import React from "react";

//TODO: add flexible configuration for use in more pages
const Breadcrumb = () => (
    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
            <li><a href="/">Home</a></li>
            <li className="is-active" aria-current="page"><a href="/mujeres">Mujeres</a></li>
        </ul>
    </nav>
);

export default Breadcrumb;
