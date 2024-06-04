import React, { useState } from "react";
import "./Routeselector.css";
import * as apiCall from "./routeApifunc";
import BusList from "../BusList/BusList";
import img3 from "../../assets/magnifying-glass.png";
import Select from "react-select";
import axios from "axios";


const options = [
  { value: "Kadawatha", label: "Kadawatha" },
  { value: "Kaduwela", label: "Kaduwela" },
  { value: "Makubura", label: "Makubura" },

  { value: "Galle", label: "Galle" },

  { value: "Mathra ", label: "Mathra " },
  { value: "Kurunegala", label: "Kurunegala" },
];


export default function Routeselector() {
  const [dataInp, setData] = useState([]);
  const [startCity, setStartCity] = useState("");
  const [destination, setDestination] = useState("");
  const [page, setPage] = useState(1);

  const handleToCity = (e) => {
    setDestination(e.value )
  };
  const renderBusList = (dataInp) => {
    if (Object.keys(dataInp).length > 0) {
      return <BusList value={dataInp} />;
    }
  };
  const handleFromCity = (e) => {
    setStartCity(e.value);
  };

  const getRoutes = async (e) => {
    e.preventDefault();
    console.log(startCity,destination )
      let data = await axios
        .get(`http://localhost:3000/bus/search?city=${startCity}&page=${page}&search=${destination}`)
        .then(({ data }) =>
        setData(data.jobs)
        
        );

    //   setLoad(true);
    //   setJobData(data.jobs);

    };
    // const getAdds = async () => {
    //   let data = await api
    //     .post(`/adds/search?comName=All&page=${page}&search=${search}`)
    //     .then(({ data }) => data);

    //   setLoad(true);
    //   console.log("jobs", data);
    //   setJobData(data.jobs);
    // };

  const handleDate = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="rdc">
      <img src={img3} />
      <h1>Search buses</h1>
      <hr></hr>
      <div className="form-group inline"></div>
      <div className="main-container">
        <form className="form-inline" onSubmit={getRoutes}>
        <label className="">
                            From
                            </label>
          <Select
            id="jobCategory"
            className="selectpicker"
            options={options}
            onChange={handleFromCity}
          />
  <label className="">
                            To
                            </label>
          <Select
            id="jobCategory"
            className="selectpicker"
            options={options}
            onChange={handleToCity}
          />

          <input
            onChange={(e) => {
              handleDate(e);
            }}
            type="date"
          ></input>
          <input type="submit" value={"Select BUS"} className=" btn btn-primary btn-md getRoute" />
        </form>

        <div>{renderBusList(dataInp)}</div>
      </div>
    </div>
  );
}
