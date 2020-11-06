import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} />
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <span className="status-text">
            {props.online ? "online" : "offline"}
          </span>
        </div>
      </div>
    </div>
  );
}
Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  text: PropTypes.bool.isRequired,
};
export default Contact;
