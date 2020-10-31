import React from "react";

export const guide = (
  <div>
    <h1>Guide</h1>
    <div className="content">
      <ol>
        <li>Choose your preferences if necessary, then create a tree using the graphical interface.</li>
        <li>Copy the LaTeX at the bottom. Make sure to include all of it!</li>
        <li>Go to your LaTeX project and make sure you include <code>\usepackage{"{tikz-qtree}"}</code> at the top along with the rest of your packages. See below for suggestions on setting up your project.</li>
        <li>Paste the tree in the desired position</li>
        <li>Compile the document and verify your tree looks how you'd like!</li>
      </ol>
      <br />
      <h3>Setting Up A Project</h3>
      <p>My preferred editor is <a href="https://www.overleaf.com/" title="Overleaf" target="_blank" rel="noopener noreferrer">Overleaf</a>, which has auto-compiling, multi-user simultaneous editing, and many packages (including tikz-qtree) already accessible.</p>
      <p>To setup a full project, I would suggest looking around for tutorials/examples, but I have a sample barebones setup <a href="https://www.overleaf.com/read/thwsxqzcyfwb" title="Sample Setup" target="_blank" rel="noopener noreferrer">here</a> that you can copy for a new project of your own.</p>
    </div>
  </div>
);
