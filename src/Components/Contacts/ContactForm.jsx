import React, { useState } from "react";
import "./Forms.css";

const ContactForm = () => {
  const [multiforms, setMultiForms] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setMultiForms({ ...multiforms, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!multiforms.name.trim()) tempErrors.name = "Name is required";
    if (!multiforms.email.trim()) tempErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(multiforms.email))
      tempErrors.email = "Email is invalid";
    if (!multiforms.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(multiforms);
      setMultiForms({
        name: "",
        email: "",
        message: "",
      });
      alert("Message sent successfully!");
    }
  };

  return (
    <div className="contact-form">
      <h3>Get In Touch</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={multiforms.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={multiforms.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={multiforms.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
