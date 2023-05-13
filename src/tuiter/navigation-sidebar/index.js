import React from "react";
import { Link } from "react-router-dom";

const NavigationSideBar = (
    {active = 'explore'}
) => {
    return (
        <div className="list-group">
        <a className="list-group-item">Tuiter</a>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'? 'active': ''}`}>Home</Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'? 'active': ''}`}>Explore</Link>
        <Link to="/" className={`list-group-item ${active === 'notifications'? 'active': ''}`}>Notifications</Link>
        <Link to="/" className={`list-group-item ${active === 'messages'? 'active': ''}`}>Messages</Link>
        <Link to="/" className={`list-group-item ${active ==='bookmarks'? 'active': ''}`}>Bookmarks</Link>
        <Link to="/" className={`list-group-item ${active === 'lists'? 'list': ''}`}>Lists</Link>
        <Link to="/" className={`list-group-item ${active === 'profile'? 'active': ''}`}>Profile</Link>
        <Link to="/" className={`list-group-item ${active === 'more'? 'active': ''}`}>More</Link>
      </div>

    )
}

export default NavigationSideBar;