import React, { useState } from "react";
import "./App.css";

function App() {
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
      setEmail({ ...email, isValid: false, error: "Email cannot be blank." });
    } else if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
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
  return (
    <div className="App">
      <div className="container">
        <div className="logo">
          <img src="" alt="Alex's Wonderland Puzzles Logo" />
        </div>
        <div class="flex">
          <div className="card about">
            <p>
              Alex's Wonderland was inspired by my autistic brother-in-law, Alex,
              assembling a jigsaw.
            </p>
            <p>
              He absolutely loved them but quickly completed them and suffered
              from the same problem that a lot of jigsaws do - most the pieces
              were background.
            </p>
            <p>
              There are many number of jigsaws with interesting pictures, but
              these are often with thousands of pieces which autistic children
              struggle with.
            </p>
            <p>
              Each of our puzzles contains interesting details and simple lessons,
              such as taking care of elders and sharing.
            </p>
            <p>
              We hope that you'll join us on our journey of creating these
              puzzles. If you'd like to be a play-tester or have any ideas, please
              email me -{" "}
              <a href="mailto:beta@alexswonderlandpuzzles.com">
                beta@alexswonderlandpuzzles.com
              </a>
            </p>
          </div>
          <div className="card">
            <p className="bold">
              A new series of Jigsaws aimed at Autistic Children and Young Adults
            </p>
            <p className="regular">
              Each puzzle tells a story and aims to teach simple lessons in a fun
              and unique way.
            </p>
            <button className="kickstarter">Be Part of Alex's Wonderland</button>
            {!showForm && (
              <button className="email-me" onClick={showFormOnClick}>
                Get Email Updates
              </button>
            )}
            {showForm && (
              <form
                className="email-signup"
                name="newsletter"
                method="POST"
                data-netlify="true"
                netlify
              >
                <p>
                  <span>We'll email with occasional updates</span>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className={`${email.isValid === false && "is-error"} email`}
                    value={email.value}
                    onChange={(e) =>
                      setEmail({ ...email, value: e.target.value })
                    }
                  />
                  <br />
                  {!email.isValid && (
                    <span className="error-message">{email.error}</span>
                  )}
                </p>
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="newsletter-submit"
                >
                  Sign Up!
                </button>
                <input type="hidden" name="form-name" value="newsletter" />
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
