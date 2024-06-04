import React, { useState } from "react";
import * as signupFunc from "./SignupFunctions";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import "./signup.css";
import img2 from '../../assets/form.png'

export default function Signup({ history }) {
  let [newUser, setnewUser] = useState({});



  const handleChangeEvent = (e, field) => {
    let fieldValue = e.target.value;
    setnewUser({ ...newUser, [field]: fieldValue });
    
    // if (field === 'email') {
    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (fieldValue.match(mailformat)) {
    //         setnewUser({ ...newUser, [field]: fieldValue })
    //         return true
    //     } else {
    //         alert("You have entered an invalid email address!");
    //         return false
    //     }
    // } else if (field === 'password') {
    //     var passwordFormat = /^[A-Za-z]\w{7,14}$/;
    //     if (fieldValue.match(passwordFormat)) {
    //         setnewUser({ ...newUser, [field]: fieldValue })
    //         return true
    //     }else{
    //         alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
    //     }
  };

  // sign in
  const getToSignIn = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  // submiting data to backend
  const submitData = (e) => {
    e.preventDefault();
    signupFunc.registerUser(newUser).then((response) => response.data);
    console.log(newUser);
    history.push("/login");
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
                  <h3 className="lead-text mn-txt"> Welcome to Tranzit! </h3>{" "}

                  <img src={img2}/>
                </div>{" "}
                <div className="left-divider">
                  <div className="col-md-6">
                    <form onSubmit={(e) => submitData(e)}>
                      <div className="form-group2">
                        <label htmlFor="name"> Name: </label>{" "}
                        <input
                          id="name"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "name")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="email"> Email: </label>{" "}
                        <input
                          required
                          id="email"
                          type="email"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "email")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="password"> Password: </label>{" "}
                        <input
                          required
                          id="password"
                          type="password"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "password")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="confirm password">Confirm Password: </label>{" "}
                        <input
                          required
                          id="confirmpassword"
                          type="password"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "confirmpassword")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="mob-number"> Mobile - No: </label>{" "}
                        <input
                          required
                          id="mob-number"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "mobile")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="gender"> Gender </label>{" "}
                        <input
                          required
                          id="gender"
                          type="text"
                          className="form-control sgnUp"
                          autoComplete="off"
                          onChange={(e) => handleChangeEvent(e, "gender")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="city"> City: </label>{" "}
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
                        <small className="form-text text-muted link-text">
                          Already a User ?
                        </small>{" "}
                        <span className="signuptext">
                          <a href="/#" onClick={(e) => getToSignIn(e)}>
                            Log - In{" "}
                          </a>{" "}
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
