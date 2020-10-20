# Tree2TeX
[![License](https://img.shields.io/github/license/holdenout/tree2tex?color=blue)](https://github.com/holdenout/tree2tex/blob/master/COPYING)

## Overview

Tree2TeX is a graphical interface to build a [tree structure](https://en.wikipedia.org/wiki/Tree_structure) and translate to the [tikz-qtree](https://ctan.org/pkg/tikz-qtree) package format for [LaTeX](https://www.latex-project.org/).

## Why does this exist?

When creating trees in a LaTeX document&mdash;such as for [syntax trees](https://en.wikipedia.org/wiki/Parse_tree) in linguistics or demonstrating recurrence of algorithms&mdash;the often heavily nested structure can be a nightmare of mismatched brackets and misaligned whitespace.

Tree2TeX aims to simplify that process by letting you build the tree visually and copy the resulting LaTeX to your document.

## Potential Features
- [ ] translation of extended character set for LaTeX (such as [IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet) characters and math symbols)
- [ ] extended style formatting (for text and tree)
- [ ] more of a WYSIWYG interface
- [ ] in browser LaTeX preview
- [ ] support for other tree libraries

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>

The build is minified and the filenames include the hashes.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<br>

## License
GNU General Public License v3.0 or later.

See [COPYING](https://github.com/holdenout/tree2tex/blob/master/COPYING) to see the full text.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).