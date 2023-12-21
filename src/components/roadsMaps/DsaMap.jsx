import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
];

const initialNodes = [
  {
    id: "1",
    data: { label: "Arrays" },
    position: { x: 680, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "Two Pointer" },
    position: { x: 500, y: 100 },
  },
  {
    id: "3",
    data: { label: "Stack" },
    position: { x: 900, y: 100 },
  },
];

const outerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start", // Align items to the top
  height: "100vh",
};

const innerContainerStyle = {
  width: "100%",
  height: "100%",
};

function DsaMap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        >
          <Background />
          {/* <MiniMap style={miniMap} /> */}
          {/* <Controls /> */}
        </ReactFlow>
      </div>
    </div>
  );
}

export default DsaMap;
