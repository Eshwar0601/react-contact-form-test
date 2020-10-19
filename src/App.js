import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form name="contact" method="post">
        <p>
          <label>
            Your Name: <input type="hidden" type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="hidden" type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea type="hidden" name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default App;
