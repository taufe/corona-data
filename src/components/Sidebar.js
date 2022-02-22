import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="links">
        <div className="link-items">
          <Link style={{ color: "white" }} to="/">
            Global Stats
          </Link>
        </div>
        <div className="link-items">
          <Link style={{ color: "white" }} to="/table">
            Table
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
