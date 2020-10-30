import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState({
    value: "", // Email value
    isValid: null, // Is email valid/not
    error: "", // Error messages
  });

  const handleSubmit = (e) => {
    // Prevent default event
    e.preventDefault();

    if (email.value.trim() === "") {
      // Check if email is blank
      setEmail({
        ...email,
        isValid: false,
        error: "Email cannot be blank.",
      });
    } else if (
      !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      // Check if email is not in standard format
      setEmail({
        ...email,
        isValid: false,
        error: "Please provide valid email.",
      });
    } else {
      setEmail({ ...email, isValid: true, error: "" });
      // TODO: Submit Form
    }
  };

  const showFormOnClick = () => setShowForm(true);

  if (!showForm)
    return (
      <button
        className='email-me'
        onClick={showFormOnClick}
      >
        Get Email Updates
      </button>
    );

  return (
    <form
      className='email-signup'
      name='newsletter'
      method='POST'
      data-netlify='true'
      netlify
    >
      <p>
        <span>We'll email with occasional updates</span>
        <br />
        <input
          type='email'
          name='email'
          placeholder='Enter your Email'
          className={`${
            email.isValid === false && "is-error"
          } email`}
          value={email.value}
          onChange={(e) =>
            setEmail({ ...email, value: e.target.value })
          }
        />
        <br />
        {!email.isValid && (
          <span className='error-message'>
            {email.error}
          </span>
        )}
      </p>
      <button
        type='submit'
        onClick={(e) => handleSubmit(e)}
        className='newsletter-submit'
      >
        Sign Up!
      </button>
      <input
        type='hidden'
        name='form-name'
        value='newsletter'
      />
    </form>
  );
};

export default Form;
