import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../scss/contact.scss";
import { IoMdMail } from "react-icons/io";
const ContactSection = () => {
  return (
    <section id="contact" className="contact-container">
      <h2 className="section-title">
        {/* <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
        Don&apos;t be shy! Hit me up! {/* </p> */}
        {/* <a href="mailto:tamashidake00@gmail.com" className="contact-link">
          <button className="cta">Say Hello!</button>
        </a> */}
      </h2>
      {/* email, github, linkedin */}
      <div className="contact-links">
        <a
          className="contact-link"
          href="https://github.com/Tamashi-Dake"
          target="_blank"
          rel="noreferrer"
        >
          <div className="wapper">
            <FaGithub className="contact-link-icon" />
          </div>
          <div className="contact-link-text">
            <h4>ChinhVN</h4>
            <p>Check out my projects</p>
          </div>
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/tamashi-dake-abc123/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="wapper">
            <FaLinkedin className="contact-link-icon" />
          </div>
          <div className="contact-link-text">
            <h4>Vu Ngoc Chinh</h4>
            <p>Connect with me</p>
          </div>
        </a>
        <a
          //   id="cta"
          className="contact-link"
          href="mailto:tamashidake00@gmail.com"
        >
          <div className="wapper">
            <IoMdMail className="contact-link-icon" />
          </div>
          <div className="contact-link-text">
            <h4>tamashidake00@gmail.com</h4>
            <p>Say hello!</p>
          </div>
          {/* <button className="cta">Say Hello!</button> */}
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
