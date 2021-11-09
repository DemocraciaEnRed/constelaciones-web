import React from "react";
import {Link} from 'gatsby'

const BreadcrumbItem = ({ text, url, isActive = false }) => (
    <li {...(isActive && {className:'is-active', 'aria-current':'page'})}><Link to={url}>{text}</Link></li>
);

export default BreadcrumbItem;