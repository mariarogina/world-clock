import React from "react";
import PropTypes from "prop-types";
import close from "./close.png";

export default function Clock({ clock, currentUTC, handleRemove }) {
  return (
    <div
      style={{
        width: "250px",
        height: "200px",
        border: "1px dashed grey",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <div style={{ display: "block", fontWeight: "bold", padding: "20px", fontSize:"1.5rem" }}>
        <div style={{ marginBottom: "10px" }}>{clock.city}</div>
      </div>
      <div style={{ fontWeight: '700', fontSize:"1.7rem"}}>
        {currentUTC.utcOffset(Number(clock.offset)).format("HH:mm:ss")}
      </div>
      <button
        style={{ margin: "10px", marginTop:"20px", padding:"3px", width:"30px"}}
        className="btn btn-outline-danger"
        onClick={() => handleRemove(clock.id)}
      >
        <img src={close} />
      </button>
    </div>
  );
}

Clock.propTypes = {
  clock: PropTypes.object,
  currentUTC: PropTypes.object,
  handleRemove: PropTypes.func,
};

Clock.defaultProps = {
  clock: {},
  currentUTC: {},
  handleRemove: () => {},
};
