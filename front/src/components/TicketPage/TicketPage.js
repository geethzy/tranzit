import React from 'react'
import './TicketPage.css'
import QRCode from 'react-qr-code';





export default function TicketPage({ history }) {

    const handleSave = () => {
        // Select the QR code element
        const qrCodeEl = document.getElementById('qr-code');
    
        // Get the QR code data as a Data URL
        const qrCodeUrl = qrCodeEl.toDataURL();
    
        // Create a link element and click it to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = qrCodeUrl;
        downloadLink.download = 'qr-code.png';
        downloadLink.click();
      }
    
    

    const handleSignOut = e => {
        e.preventDefault()
        sessionStorage.removeItem('authToken')
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.clear()
        history.push('/')
    }
    const handleBookAgainIcon = e => {
        e.preventDefault()
        history.push('/routes')
    }
   
    const getLocationData = () => {
        let from = localStorage.getItem("start")
        let to = localStorage.getItem("destination")
        return (
            <div>
                <p>From:  {from}</p>
                <p>To:  {to}</p>
            </div>
        )
    }
    const getPassengerName = () => {
        let nameArray = localStorage.getItem("nameData")
        let names = JSON.parse(nameArray)
        return names.map((name, idx) => {
            return (
                <div key={idx}>
                    <p className="names">{name}</p>
                </div>
            )
        })
    }
    const getSeatNumbers = () => {
        let noArray = localStorage.getItem("reservedSeats")
        let arr = JSON.parse(noArray)
        return arr.map((element, idx) => {
            return (
                <div key={idx}>
                    <p classsName="seatNo">{element}</p>
                </div>
            )
        })
    }
    const getIdNumber = () => {
        let tokenData = localStorage.getItem("selectedBusId")
        return (
            <p className="idData">
                {tokenData}
            </p>
        )
    }

 
    const getDateValue = () => {
        let dat = localStorage.getItem("date")
        return <p>On: {dat}, 10 AM (Hourly commute)</p>
    }
    return (

        <div className="container">
            <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log">TRANZIT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                        <ul className="navbar-nav ml-auto nav-flex-icons ic">
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleBookAgainIcon(e)}>Book Again</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleSignOut(e)}>Sign-Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="tpMain">
                <article className="ticket">
                    <header className="ticket__wrapper">
                        <div className="ticket__header">
                        🎟🎟🎟 Tranzit 🎟🎟🎟
                        </div>
                    </header>
                    
                    <div className="ticket__body">
                        <section className="ticket__section">
                            
                            {getSeatNumbers()}
                            <p>Your seats are together <span>{getDateValue()}</span></p>
                        </section>
                        <section className="ticket__section">
                            <h3>Passenger Names</h3>
                            {getPassengerName()}
                        </section>
                        <section className="ticket__section">
                            <h3>QR Code</h3>
                            
                            <QRCode
                                value= {getIdNumber}
                                size={200}
                                bgColor="#FFFFFF"
                                fgColor="#000000"
                                />
                        </section>

                        
                    </div>

                   
                    
  
                    <footer className="ticket__footer">
                        <p>Transaction-ID</p>
                        {getIdNumber()}

                        
                        
                        
                    </footer>
                    

                </article>
            </div>

        </div>

    )
}
