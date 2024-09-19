import React, { useEffect, useState } from "react";

const Contact = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputState),
      });

      if (response.ok) {
        alert('Form submitted successfully');
        setInputState({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("active");
      });

      input.addEventListener("focusout", () => {
        if (input.value === "") {
          input.parentElement.classList.remove("active");
        } else {
          input.parentElement.classList.add("active");
        }
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => {});
        input.removeEventListener("focusout", () => {});
      });
    };
  }, []);

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Get In Touch.
          </h2>
          <div className="line"></div>
        </div>
        <p className="services-product-text fade_up">
          TAKE A COFFEE & CHAT WITH ME
        </p>
        <div className="main-box-contact">
          {/* Contact Information Boxes */}
          {/* ... (Unchanged code for displaying email and phone) */}
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <label htmlFor="name" className="form__label">
                NAME
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Your name"
                id="name"
                required
                autoComplete="off"
                value={inputState.name}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="email" className="form__label">
                EMAIL
              </label>
              <input
                type="email"
                className="form__input"
                placeholder="Your email"
                id="email"
                required
                autoComplete="off"
                value={inputState.email}
                onChange={handleChange}
              />
            </div>
            <div className="form subject-input-main">
              <label htmlFor="subject" className="form__label">
                SUBJECT
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Your subject"
                id="subject"
                required
                autoComplete="off"
                value={inputState.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="message" className="form__label">
                MESSAGE
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Write your text..."
                id="message"
                required
                autoComplete="off"
                value={inputState.message}
                onChange={handleChange}
              />
            </div>
            <div className="wrapper blog-btn">
              <button type="submit" className="btn-hover">
                Submit Now
              </button>
            </div>
          </form>
        </div>
        {/* Remove the iframe as it is not needed for this submission */}
        <div className="footer">
          © 2024 | All rights reserved by
          <span>
            <a href="https://1.envato.market/website-portfolio">The_Alomgir</a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Contact;
