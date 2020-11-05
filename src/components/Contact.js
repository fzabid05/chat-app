import React from "react";
import "./Contact.css";

const isOnline = true;
function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/67.jpg"
      />
      <div>
        <div className="name">Lola Lilly</div>
        <div className="status">
          <div className={isOnline ? "status-online" : "status-offline"}></div>
          <span className="status-text">{isOnline ? "online" : "offline"}</span>
        </div>
      </div>
    </div>
  );
}
export default Contact;
