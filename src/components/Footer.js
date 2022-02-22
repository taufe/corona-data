import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <h3 className="footer-text">
        Copyright © {currentYear} covid-19.All rights reserved.
      </h3>
    </div>
  );
};

export default Footer;
