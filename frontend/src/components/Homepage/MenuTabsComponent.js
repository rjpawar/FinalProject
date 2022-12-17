import React from "react";
import {FaCalendarPlus, FaWpforms} from 'react-icons/fa';
import {Link} from "react-router-dom";

export default function MenuTabs(){
    const userId = JSON.parse(localStorage.getItem('user')) === null? '234' : JSON.parse(localStorage.getItem('user'))._id;
    return(
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-item nav-link wd-pill-item"
               to="/plan-forum">
                <FaWpforms /> Itineraries
            </Link>
            <Link className="nav-item nav-link wd-pill-item"
               to={`/user/${userId}/plans`}
               tabIndex="-1"
               aria-disabled="true">
                <FaCalendarPlus /> Manage Itineraries</Link>
        </nav>
    )
}
