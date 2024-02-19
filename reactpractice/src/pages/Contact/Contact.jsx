import React, { useState } from "react";
import Footer from "/src/components/Footer";
import "./style.css";

const Contact = () => {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Name, email or message has not been entered!");
    } else if (formData.message.length < 2) {
      alert(`Are you sure your message is long enough!`);
    } else {
      alert(
        `Hello, ${formData.name}! Thank you for your message. We will get in touch with you soon.`
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="Name"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
