import React from "react";

const Contact = ({ name, email, phone }) => {
  return (
    <div className="contact">
      <h3>{name}</h3>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>{phone}</p>
    </div>
  );
};

export default Contact;
