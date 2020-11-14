import React from "react";

export const LatexResources = () => {
  return (
    <div>
      <h1>LaTeX Resources</h1>
      <div className="content">
        <p>There are plenty of LaTeX resources online, and I encourage you to search for them. I enjoyed getting to know some of the ins and outs of LaTeX and the impressive results it can produce. I've linked a few resources here to get you started.</p>
        <ul>
          <li><a href="https://www.latex-project.org/about/" title="LaTeX Project About" target="_blank" rel="noopener noreferrer">"An introduction to LaTeX"</a> from The LaTeX Project gives a basic explanation of what LaTeX is.</li>
          <li><a href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes" title="Overleaf LaTeX Tutorial" target="_blank" rel="noopener noreferrer">"Learn LaTeX in 30 minutes"</a> from Overleaf is a nice and quick tutorial of the basics</li>
          <li><a href="https://www.youtube.com/playlist?list=PLCRFsOKSM7ePUBOfh3O-K5XZldM5uCPwk" title="ShareLaTeX YouTube Tutorial" target="_blank" rel="noopener noreferrer">ShareLaTeX YouTube Tutorial</a></li>
          <li><a href="https://www.latex-project.org/help/documentation/" title="Core LaTeX Documentation" target="_blank" rel="noopener noreferrer">Core LaTeX Documentation</a></li>
          <li><a href="http://ctan.mirrors.hoobly.com/graphics/pgf/contrib/tikz-qtree/tikz-qtree-manual.pdf" title="tikz-qtree Documentation" target="_blank" rel="noopener noreferrer">tikz-qtree documentation</a></li>
        </ul>
      </div>
    </div>
  );
};

export default LatexResources;
