import React from "react";
import "../App.css";

const Loading = () => {
    return (
    <div className="loading-screen">
        <div className="spinner-border text-info my-spinner" role="status" ></div>
        <div className="spinner-border text-warning my-spinner" role="status"></div>
        <div className="spinner-border text-success my-spinner" role="status"></div>
    </div>
    )
}
 
export default Loading;