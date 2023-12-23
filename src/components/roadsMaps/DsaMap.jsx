  import React, { useEffect, useRef } from "react";
  import ReactFlow, { Controls, Background } from "reactflow";
  import "reactflow/dist/style.css";

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e4-3", source: "4", target: "7" },
    { id: "e6-7", source: "6", target: "7" },
    { id: "e7-8", source: "7", target: "8" },
    { id: "e7-9", source: "7", target: "9" },
    { id: "e7-10", source: "7", target: "10" },
  ];

  const initialNodes = [
    {
      id: "1",
      data: { label: "Arrays" },
      position: { x: 680, y: 0 }, // Adjust y-coordinate to avoid overlap with the navbar
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
    {
      id: "4",
      data: { label: "Binary" },
      position: { x: 300, y: 200 },
    },
    {
      id: "5",
      data: { label: "Sliding Window" },
      position: { x: 500, y: 200 },
    },
    {
      id: "6",
      data: { label: "Linked List" },
      position: { x: 700, y: 200 },
    },
    {
      id: "7",
      data: { label: "Tree" },
      position: { x: 600, y: 300 },
    },
    {
      id: "8",
      data: { label: "Tire" },
      position: { x: 300, y: 400 },
    },
    {
      id: "9",
      data: { label: "Heap" },
      position: { x: 500, y: 400 },
    },
    {
      id: "10",
      data: { label: "BackTracking" },
      position: { x: 700, y: 400 },
    },
    {
      id: "11",
      data: { label: "Graph" },
      position: { x: 800, y: 500 },
    },
    {
      id: "12",
      data: { label: "1D-DP" },
      position: { x: 1000, y: 500 },
    },
    {
      id: "13",
      data: { label: "Intervals" },
      position: { x: 200, y: 500 },
    },
    {
      id: "14",
      data: { label: "Greedy" },
      position: { x: 370, y: 500 },
    },
    {
      id: "15",
      data: { label: "Advanced Graph  " },
      position: { x: 550, y: 500 },
    },
    {
      id: "16",
      data: { label: "2D-DP" },
      position: { x: 900, y: 600 },
    },
    {
      id: "17",
      data: { label: "Bit-Manipulation" },
      position: { x: 1100, y: 600 },
    },
    {
      id: "18",
      data: { label: "Math & Geometry" },
      position: { x: 1000, y: 700 },
    },
  ];

  const outerContainerStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const innerContainerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    margin: "auto",
  };

  function DsaMap() {
    return (
      <div style={outerContainerStyle}>
        <div style={innerContainerStyle}>
          <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
            <Background />
            <Controls/>
            {/* Additional components */}
          </ReactFlow>
        </div>
      </div>
    );
  }

  export default DsaMap;
