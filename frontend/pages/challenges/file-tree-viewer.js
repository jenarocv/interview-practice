import FileTree from "@/components/file-tree"

const data = [
  {
    id: 1,
    type: 'folder',
    name: 'srcs',
    children: [
      { id: 2, type: 'file', name: 'index.js' },
      { id: 3, type: 'file', name: 'App.js' },
      {
        id: 4,
        type: 'folder',
        name: 'components',
        children: [
          { id: 5, type: 'file', name: 'FileTree.js' },
          { id: 6, type: 'file', name: 'FileNode.js' },
        ],
      },
      {
        id: 7,
        type: 'folder',
        name: 'styles',
        children: [
          { id: 8, type: 'file', name: 'App.css' },
          { id: 9, type: 'file', name: 'FileTree.css' },
        ],
      },
    ],
  },
  {
    id: 10,
    type: 'folder',
    name: 'public',
    children: [
      { id: 11, type: 'file', name: 'index.html' },
      { id: 12, type: 'file', name: 'favicon.ico' },
    ],
  },
  { id: 13, type: 'file', name: 'package.json' },
  { id: 14, type: 'file', name: 'README.md' },
];

export default function FileTreeViewer() {
  return(
    <>
      <h1>
        File Tree Viewer
      </h1>
      <p>
        Build a file tree viewer.
        <br />
        <img src="https://ibb.co/bLJ9w5W" />
        <br />
        <br />
        </p>

        <ol>
          <li>It should allow arbitrary levels of depth</li>
          <li>You should be able to expand/collapse any part of the tree</li>
          <li>Basic aesthetics with pure CSS</li>
        </ol>
        <FileTree data={data} />
    </>
  )
}
