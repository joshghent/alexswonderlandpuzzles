import React, { useState } from "react";
import Form from "./components/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [showAboutContent, setShowAboutContent] = useState(
    false
  );

  return (
    <div className='App'>
      <div className='container'>
        <div className='logo'>
          <img
            src={Logo}
            className='logo'
            alt="Alex's Wonderland Puzzles Logo"
          />
        </div>
        <div className='card'>
          <b>
            A new series of Jigsaws aimed at Autistic
            Children and Young Adults
          </b>
          <p>
            Each puzzle tells a story and aims to teach
            simple lessons in a fun and unique way.
          </p>
          <p>
            We hope that you'll join us on our journey of
            creating these puzzles. If you'd like to be a
            play-tester or have any ideas, please email me -{" "}
            <a href='mailto:beta@alexswonderlandpuzzles.com'>
              beta@alexswonderlandpuzzles.com
            </a>
          </p>
          <div
            className='about'
            style={{
              maxHeight: !showAboutContent ? 0 : "200px",
            }}
          >
            <p>
              Alex's Wonderland was inspired by my autistic
              brother-in-law, Alex, assembling a jigsaw.
            </p>
            <p>
              He absolutely loved them but quickly completed
              them and suffered from the same problem that a
              lot of jigsaws do - most the pieces were
              background.
            </p>
            <p>
              There are many number of jigsaws with
              interesting pictures, but these are often with
              thousands of pieces which autistic children
              struggle with.
            </p>
            <p>
              Each of our puzzles contains interesting
              details and simple lessons, such as taking
              care of elders and sharing.
            </p>
          </div>
          <button
            className='readmore'
            onClick={() =>
              setShowAboutContent(!showAboutContent)
            }
          >
            read more
            <FontAwesomeIcon
              icon={faArrowDown}
              size='1x'
              style={{ marginLeft: "1rem" }}
              rotation={showAboutContent ? 180 : 0}
            />
          </button>
          <button className='kickstarter'>
            Be Part of Alex's Wonderland
          </button>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
