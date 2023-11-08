import React from "react";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <>
        <div className="padding">
          <div id="mid">
            <div className="info">
              <h2 className="">Queue No.</h2>
              <p className="para-adjust">Q-001</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
