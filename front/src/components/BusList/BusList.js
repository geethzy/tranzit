import React, { useState, useEffect } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import './busList.css'
export default function BusList({ value: dataInp }) {

    const [obj, setObj] = useState('')
    const [reset, Setreset] = useState(false)
    const [arrowDown, setArrowDown] = useState(false)
    const [clas, SetClas] = useState(true)


    useEffect(() => {
        setObj(dataInp)
    }, [dataInp])


    const handleSubmit = bId => {
        localStorage.setItem("selectedBusId", bId)
        SetClas(false)
        setArrowDown(true)
    }


    const handleReset = (e) => {
        if (clas === false) {
            Setreset(true)
            SetClas(true)
            setArrowDown(false)
        }
        localStorage.removeItem("selectedBusId")
    }


    const renderFunction = () => {
        return dataInp.map((bus) => {
            // let bId = bus._id
            return (
                <div key={bus._id} className="card mt-5 buslist">
                    <div class="row ml-3">
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">NIC</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">From</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">To</div>
                        <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Bus No</div>

                        <div class="w-100 d-none d-md-block"></div>

                        {console.log(bus)}
                        <div class="col-6 col-sm-3 mb-4">{bus.nic}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.from}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.to}</div>
                        <div class="col-6 col-sm-3 mb-4">{bus.busNo}</div>
                        <div class="col-6 col-sm-4 mb-2 ml-0">
                            <button className={clas ? "btn btn-primary btn-md" : "btn btn-primary btn-md disabled"} onClick={(bId) => { handleSubmit(bus._id) }} >Book Now</button>
                        </div>
                    </div>
                </div >
            )
        })

    }


    return (
        <div className="">
            {renderFunction()}
            <div className={arrowDown ? "activeArrow" : "nonActive"}>
                <FaAngleDoubleDown />
            </div>
        </div>

    )
}
