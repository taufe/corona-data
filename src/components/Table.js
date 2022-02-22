// import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { fetchCountriesData } from "../store/actions";
import { Table } from "antd";
import { Bar } from "react-chartjs-2";

const TableData = () => {
  const data = useSelector((state) => state.countries);

  const [search, setSearch] = useState("");
  const [dataSource, setDataSource] = useState(data);
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    const filterdata = data.filter((item) =>
      item.country.toLowerCase().includes(search.toLowerCase())
    );

    setDataSource(filterdata);
  };

  const columns = [
    {
      title: "Countries",
      dataIndex: "country",
    },
    {
      title: "Cases",
      dataIndex: "cases",
    },
    {
      title: "Active",
      dataIndex: "active",
    },
    {
      title: "Death",
      dataIndex: "deaths",
    },
    {
      title: "Critical",
      dataIndex: "critical",
    },
    {
      title: "Recoverd",
      dataIndex: "recovered",
    },
  ];

  return (
    <div>
      <div className="search">
        <div style={{ fontWeight: "bold" }}>
          Sort by:
          <select value="Sort By">
            <option>Confirmed</option>
          </select>
        </div>
        <div style={{ fontWeight: "bold" }}>
          Search By:
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default TableData;
