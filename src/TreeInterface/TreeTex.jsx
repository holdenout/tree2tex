import React from "react";

function generateLatexTree(startNode, level = 0, texFormatting = {}) {
  const reducer = (latexTree, child) =>
    latexTree + generateLatexTree(child, level + 1, texFormatting);

  const nameStr = startNode.name.toString();
  const {
    nodeStartStr = ".",
    nodeEndStr = "",
    indentStr = "  ",
    childrenStartStr = "[",
    childrenEndStr = "]"
  } = texFormatting;

  return (
    startNode.children.reduce(
      reducer,
      `${"\n" + indentStr.repeat(level) + childrenStartStr + nodeStartStr + nameStr + nodeEndStr}`
    ) +
    `${(startNode.children.length ? "\n" + indentStr.repeat(level) : " ") +
      childrenEndStr}`
  );
}

export const TreeTex = ({treeData, texFormatting}) => {
  return (
    <div className="latex-output" align="left">
      <pre>
        <code>{texFormatting.treeDeclaration + generateLatexTree(treeData.root, undefined, texFormatting)}</code>
      </pre>
    </div>
  )
};

export default TreeTex;
