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
      <form action="" className="mt-8" name="contact" method="post">
        <div>
          <input type="hidden" name="form-name" value="contact" />
          <label className="text-md font-bold text-gray-400 block" for="name">
            Name
          </label>
          <input
            style={{ width: 400 }}
            type="text"
            className="border rounded bg-transparent outline-none focus:border-custom-blue-button text-white p-2"
            name="name"
            required
          />
          <label
            className="text-md font-bold text-gray-400 block mt-6"
            for="email"
          >
            Email
          </label>
          <input
            style={{ width: 400 }}
            type="email"
            className="border rounded bg-transparent outline-none focus:border-custom-blue-button text-white p-2"
            name="email"
            required
          />
          <label
            className="text-md font-bold text-gray-400 block mt-6"
            for="message"
          >
            Message
          </label>
          <textarea
            rows="4"
            cols="60"
            style={{ width: 400 }}
            type="text"
            name="message"
            className="border rounded bg-transparent outline-none focus:border-custom-blue-button text-white p-2"
            required
          />
          <input
            type="submit"
            className="block text-md md:text-xl font-bold text-white bg-custom-blue-button outline-none active:bg-blue-700 hover:bg-blue-500 rounded-md w-32 h-8 md:w-40 md:h-10 tracking-wide mt-6"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
