import React from "react";
import ContactsHero from "../Components/Contacts/ContactsHero";
import Maps from "../Components/Contacts/Maps";
import Stors from "../Components/Contacts/Stors";
import ContactForm from "../Components/Contacts/ContactForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <ContactsHero />
      <Maps />
      <Stors />
      <ContactForm />
    </div>
  );
};

export default Contact;
