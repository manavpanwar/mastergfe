import React from "react";

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="top-loading-bar"></div>
      <div className="loader"></div>
      <div className="accent-text" style={{ marginTop: '20px', letterSpacing: '2px', fontSize: '14px', fontWeight: '600' }}>
        LOADING EXPERIENCE
      </div>
    </div>
  );
}
