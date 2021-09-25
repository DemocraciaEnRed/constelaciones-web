import React from "react";

const Breadcrumb = ({ children }) => (
    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
            {children}
        </ul>
    </nav>
);

export default Breadcrumb;
