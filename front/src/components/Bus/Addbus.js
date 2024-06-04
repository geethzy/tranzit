import React, { useState } from "react";
import {BusCreate} from "./AddFuction";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import "../Login-Signup/signup.css";
import img2 from '../../assets/form.png'

export default function BusAdd({ history }) {
  let [bus, newBus] = useState({});



  const handleChangeEvent = (e, field) => {
    let fieldValue = e.target.value;
    newBus({ ...bus, [field]: fieldValue });
    
    // if (field === 'email') {
    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (fieldValue.match(mailformat)) {
    //         newBus({ ...bus, [field]: fieldValue })
    //         return true
    //     } else {
    //         alert("You have entered an invalid email address!");
    //         return false
    //     }
    // } else if (field === 'password') {
    //     var passwordFormat = /^[A-Za-z]\w{7,14}$/;
    //     if (fieldValue.match(passwordFormat)) {
    //         newBus({ ...bus, [field]: fieldValue })
    //         return true
    //     }else{
    //         alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
    //     }
  };
    // submiting data to backend
  const submitData = (e) => {
    e.preventDefault();
    BusCreate(bus).then((response) => response.data);
    console.log(bus);
    history.push("/routes");
  };

  return (
    <div className="container">
      <div className="flex-container">
        <div className="row full">
          <div className="col-md-12">
            <div className="form-container">
              <div className="form-container-in"> </div>{" "}
              <div className="row sgnUp ">
                <div className="col-md-6 right-divider pdding">
                  <h3 className="lead-text mn-txt">Add New Bus </h3>{" "}
                </div>{" "}
                <div className="left-divider">
                  <div className="col-md-6">
                    <form onSubmit={(e) => submitData(e)}>
                      <div className="form-group2">
                        <label htmlFor="name"> Bus Number </label>{" "}
                        <input
                          id="name"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "busNo")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="route"> Selected Bus Route </label>{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="from"> From </label>{" "}
                        <input
                          required
                          id="from"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "from")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="to"> To </label>{" "}
                        <input
                          required
                          id="to"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "to")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="nic"> NIC No </label>{" "}
                        <input
                          required
                          id="nic"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "nic")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="confirm password">Phone No </label>{" "}
                        <input
                          required
                          id="phone"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "phone")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="city"> Number of sites </label>{" "}
                        <input
                          required
                          id="city"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "city")}
                        />{" "}
                      </div>{" "}
                     
                      <div class="form-group2">
                        <input
                          required
                          type="submit"
                          value="submit"
                          className="btn-primary btnn form-submit sub-btn sgnUp"
                        />
                      </div>{" "}
                      <div>
                        <span className="signuptext">
                        </span>{" "}
                      </div>{" "}
                    </form>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
