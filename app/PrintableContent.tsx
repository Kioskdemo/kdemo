import React from 'react';
import './globals.css'

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <>
        <div id="invoice-POS">
          <center id="top">
            <div className="info">
              <h2>SBISTechs Inc</h2>
            </div>
          </center>
          <div id="mid">
            <div className="info">
              <h2>Contact Info</h2>
              <p className='text-2xl'>
                Address : street city, state 0000<br />
                Email   : JohnDoe@gmail.com<br />
                Phone   : 555-555-5555<br />
              </p>
            </div >
          </div >
        </div>
      </>
    );
  }
}