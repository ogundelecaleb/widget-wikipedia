import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl"
  },
  {
    label:"French",
    value:"fr"
  },
  {
    label:"Chinese",
    value: "zh"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("term");


  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <hr />
      <h1 className="ui header">Output</h1>
      <Convert debouncedText={debouncedText} language={language}/>
    </div>
  );
};

export default Translate;
