import React, { useState } from "react";
import ContactNavbar from "../components/ContactSection/ContactNavbar";
import ContactSection from "../components/ContactSection/Contact";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <ContactNavbar toggleSidebar={toggleSidebar} />
      <ContactSection />
    </>
  );
};

export default Contact;
