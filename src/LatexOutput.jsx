import React from "react";

function generateLatexTree(startNode, level = 0, strFormatting = {}) {
  const reducer = (latexTree, child) =>
    latexTree + generateLatexTree(child, level + 1, strFormatting);

  const nameStr = startNode.name.toString();
  const {
    nodeStartStr = ".",
    nodeEndStr = "",
    indentStr = "  ",
    childrenStartStr = "[",
    childrenEndStr = "]"
  } = strFormatting;

  return (
    startNode.children.reduce(
      reducer,
      `${"\n" + indentStr.repeat(level) + childrenStartStr + nodeStartStr + nameStr + nodeEndStr}`
    ) +
    `${(startNode.children.length ? "\n" + indentStr.repeat(level) : " ") +
      childrenEndStr}`
  );
}

export const LatexOutput = ({treeData, strFormatting}) => {
  return (
    <div className="latex-output" align="left">
      <pre>
        <code>{generateLatexTree(treeData.root, undefined, strFormatting)}</code>
      </pre>
    </div>
  )
};

export default LatexOutput;
