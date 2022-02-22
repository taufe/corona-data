import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStat from "./GlobalStat";
import TableData from "./Table";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<GlobalStat />} />
        <Route path="/table" element={<TableData />} />
      </Routes>
    </div>
  );
};

export default Content;
