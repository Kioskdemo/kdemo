import React from "react";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <>
        <div className="padding">
          <div id="mid">
            <div className="info">
              <h2>Counter No.</h2>
              <p className="text-2xl">C-001</p>
              <h2>Queue No.</h2>
              <p>Q-001</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
