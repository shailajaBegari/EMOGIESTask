import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🚜": "Traly",
  "👑": "Queen crown",
  "🤱": "Mother",
  "🌹": "Red Rose",
  "🌻": "Sunflower",
  "😃": "Smiling",
  "😳": "Disbelief",
  "😔": "sad",
  "🍔": "Burger",
  "❤️": "Love",
  "⚽": "Ball",
  "👰 ": "MarraigeBride"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this symbol in my Data";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>WELLCOME EMOJIES</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
