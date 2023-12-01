import { useState } from "react";

const FileNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = node.type === "folder";

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li>
      <div className={isFolder ? "folder" : "file"} onClick={handleToggle}>
        {node.name}
      </div>
      {isFolder && isOpen && (
        <ul className="file-tree">
          {node.children.map((child) => (
            <FileNode key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const FileTree = ({ data }) => {
  return (
    <ul className="file-tree">
      {data.map((node) => (
        <FileNode key={node.id} node={node} />
      ))}
    </ul>
  );
};

export default FileTree;
