import React from "react";
import PropTypes from "prop-types";
import Clock from "./Clock";

export default function ClockLayout({ clocks, currentUTC, handleRemove }) {
  return (
    <div className="container">
    <div className = "row">
    <div className="col" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", width:'150px', margin:"15px"}}>
      {clocks.map((clock) => (
        <Clock
          key={clock.id}
          clock={clock}
          currentUTC={currentUTC}
          handleRemove={handleRemove}
        />
      ))}
    </div>
    </div>
    </div>
  );
}

ClockLayout.propTypes = {
  clocks: PropTypes.array,
  currentUTC: PropTypes.object,
  handleRemove: PropTypes.func,
};
ClockLayout.defaultProps = {
  clocks: [],
  currentUTC: {},
  handleRemove: () => {},
};
