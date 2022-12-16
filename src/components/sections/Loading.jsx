import React from "react";

function Loading() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h4>Loading...</h4>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
