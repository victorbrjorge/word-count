import { useState } from "react";

function InputForm() {
  const [text, setText] = useState("");
  const [wc, setWc] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // matches all word characters according to the \w definition: A word character is a character a-z, A-Z, 0-9, including _ (underscore).
    const wordCount = text.match(/(\w+)/g).length;
    if (wordCount < 1) {
      alert("Some text input is required");
    }
    setWc(wordCount);
  };

  return (
    <div className="Form">
      <label className="FormField">Paste your text here:</label>
      <textarea
        className="FormField"
        rows={10}
        cols={50}
        placeholder="Input some text over here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="FormField" onClick={handleSubmit}>
        {" "}
        Count words
      </button>
      {wc > 0 && (
        <p className="FormField">
          {" "}
          {wc} word{wc > 1 ? "s" : ""} in text
        </p>
      )}
    </div>
  );
}

export default InputForm;
