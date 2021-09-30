import React from "react";

const BreadcrumbItem = ({ text, url, isActive = false }) => (
    <li {...(isActive && {className:'is-active', 'aria-current':'page'})}><a href={url}>{text}</a></li>
);

export default BreadcrumbItem;