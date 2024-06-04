import React from 'react'
import './homepage.css'
import img1 from './logo.png'
import img2 from './call.png'
import img3 from './email.png'
import img4 from './copyright.png'

export default function Homepage({ history }) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/login')
    }

    return (

       
        
        <div className='container maint-cnt'>
      
            
        <div class="row">
                    <div className="header-nav">
                        <span className="mytext1"> Tranzit </span>
                    </div>
        </div>

            <div className="container">
                
            <div className="slogan">
            <p>
                 <span class="tag" >Your online portal to Sri Lanka Expressway Passenger Transit Services</span>
                </p>
                </div>


                <a href="/#" onClick={e => enterSite(e)} className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#395B64" />
                                <stop offset="100%" stopColor="#A5C9CA" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span >Book your ticket</span>
                </a>
            </div>

          

            <div class="footer">
                <div class="row">
                    <div class="col-md-4">
                    <img height={160} width={160} src={img1}></img>
                </div>
                <div className='col'>
                    
                    <div class="row">
                        <img class="icon" src={img2}></img>
                        &nbsp;&nbsp;&nbsp;
                        <p class="iconp">Phone Number - 091 5673455</p>
                    </div>
                    <div class="row">
                        <img class="icon" src={img3}></img>
                        &nbsp;&nbsp;&nbsp;
                        <p class="iconp">Email - booktravel@gmail.com</p>
                    </div>
                    <div class="row">
                        <img class="icon" src={img4}></img>
                        &nbsp;&nbsp;&nbsp;
                        <p class="iconp">Copyrights </p>
                    </div>
                </div>
            </div>
            </div>

           
                
        </div>
    )
}




