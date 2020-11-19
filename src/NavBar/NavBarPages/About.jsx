import React from "react";

export const About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <div className="content">
        <p>This is a graphical interface to build a <a href="https://en.wikipedia.org/wiki/Tree_structure" title="Wikipedia: Tree Structure" target="_blank" rel="noopener noreferrer">tree structure</a> and translate to the <a href="https://ctan.org/pkg/tikz-qtree" title="tikz-qtree package on CTAN" target="_blank" rel="noopener noreferrer">tikz-qtree</a> package format for <a href="https://www.latex-project.org/" title="LaTeX Prjoect" target="_blank" rel="noopener noreferrer">LaTeX</a>.</p>
        <p>When creating trees in a LaTeX document&mdash;such as for <a href="https://en.wikipedia.org/wiki/Parse_tree" title="Wikipedia: Parse Tree" target="_blank" rel="noopener noreferrer">syntax trees</a> in linguistics or demonstrating recurrence of algorithms&mdash;the often heavily nested structure can be a nightmare of mismatched brackets and misaligned whitespace.</p>
        <p>Tree2TeX aims to simplify that process by letting you build the tree visually and copy the resulting LaTeX to your document.</p>
      </div>
    </div>
  );
}

export default About;
