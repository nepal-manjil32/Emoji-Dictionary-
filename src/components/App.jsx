import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emj)
{
  return(
    <Entry 
          emoji = {emj.emoji}
          name = {emj.name}
          meaning= {emj.meaning}
      />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
      <footer>Manjil Nepal © {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
