import React, { useEffect } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchCountriesData, fetchdata } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  const fetchAllData = async () => {
    await axios.get("https://disease.sh/v3/covid-19/all").then((res) => {
      dispatch(fetchdata(res.data));
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchCountriesInfo = async () => {
    await axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
      dispatch(fetchCountriesData(res.data));
      console.log(res.data);
    });
  };
  useEffect(() => {
    fetchCountriesInfo();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Header />

      <Content />
      <Footer />
    </div>
  );
}

export default App;
