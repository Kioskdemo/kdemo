import React from "react";

interface PrintableContentProps {
  heading: string;
  number: number;
}

class ComponentToPrint extends React.PureComponent<PrintableContentProps> {
  render() {
    const { heading, number } = this.props;

    return (
      <>
        <div className="padding">
          <div id="mid">
            <div className="info">
              <h2 className="">{heading}</h2>
              <p className="para-adjust">{`Q-${number}`}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ComponentToPrint;
