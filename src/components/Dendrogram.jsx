// import React, { useMemo, useState, useEffect } from 'react';
// import { Group } from '@visx/group';
// import { Cluster, hierarchy } from '@visx/hierarchy';
// // import { HierarchyPointNode } from '@visx/hierarchy/lib/types';
// import { LinkVertical } from '@visx/shape';
// import '../css/Service.css';

// const white = '#ffffff';
// const color = '#f9bb2b';

// const storkColor = '#f7f7f3';
// const background = 'rgb(0,0,0,0)';
// const nodecolor = '#61738b';

// const clusterData = {
//   name: 'Data Structure and Alogorithm',
//   children: [
//     {
//       name: 'Array',
//       children: [
//         {
//           name: '2-Pointer',
//           children: [
//             {
//               name: 'Binary Search',
//             },
//             {
//               name: 'Sliding Window',
//             },

//           ],
//         },
//         {
//           name:"Recursion",
//           children:[
//             {
//               name:"Strings"
//             }

//           ]
//         },
//         {
//           name: 'Stack',
//           children:[
//             {
//               name: 'Queue',
//               children:[
//                 {
//                   name :'Trees',
//                   children:[
//                     {
//                       name:'Heaps'
//                     }
//                   ]
//                 },
//                 {
//                   name:'Graphs'
//                 }
//               ]
//             },

//           ]
//         },
//       ],
//     },
//   ],
// };

// function RootNode({ node }) {
//   // Calculate text dimensions
//   const font = 20;
//   const textWidth = node.data.name.length * font * 0.6; // Adjust this multiplier as needed
//   const textHeight = font;
//   const padding = 10;

//   return (
//     <Group top={node.y} left={node.x}>
//       <rect
//         width={textWidth + padding * 2}
//         height={textHeight + padding * 2}
//         y={-textHeight / 2 - padding}
//         x={-textWidth / 2 - padding}
//         fill={color}
//         rx={10}
//       />
//       <text
//         dy=".33em"
//         fontSize={font}
//         fontFamily="Arial"
//         textAnchor="middle"
//         style={{ pointerEvents: 'none' }}
//       >
//         {node.data.name}
//       </text>
//     </Group>
//   );
// }

// function Node({ node }) {
//   const isRoot = node.depth === 0;

//   if (isRoot) return <RootNode node={node} />;

//   return (
//     <Group top={node.y} left={node.x}>
//       {node.depth !== 0 && (
//         <rect
//           width={node.width}
//           height={node.height}
//           fill={nodecolor}
//           rx={5} // Apply rounded corners to non-parent nodes
//           stroke={white}
//           onClick={() => {
//             alert(`clicked: ${JSON.stringify(node.data.name)}`);
//           }}
//         />
//       )}
//       <text
//         dy=".33em"
//         fontSize={20}
//         fontFamily="Arial"
//         textAnchor="middle"
//         style={{ pointerEvents: 'none' }}
//         fill={white}
//         x={node.textX}
//         y={node.textY}
//       >
//         {node.data.name}
//       </text>
//     </Group>
//   );
// }

// const defaultMargin = { top: 40, left: 0, right: 0, bottom: 40 };

// export default function Dendrogram() {
//   const [width, setWidth] = useState(window.innerWidth); // Initialize with window width
//   const [height, setHeight] = useState(500);

//   const handleResize = () => {
//     setWidth(window.innerWidth); // Update width on resize
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Calculate node dimensions based on text content
//   const calculateNodeDimensions = (node) => {
//     const font = 20;
//     const textWidth = node.data.name.length * font * 0.6; // Adjust this multiplier as needed
//     const textHeight = font;
//     const padding = 10;

//     return {
//       width: textWidth + padding * 2,
//       height: textHeight + padding * 2,
//       textX: textWidth / 2 + padding,
//       textY: textHeight / 2 + padding,
//     };
//   };

//   const data = useMemo(() => hierarchy(clusterData).each((node) => {
//     const { width, height, textX, textY } = calculateNodeDimensions(node);
//     node.width = width;
//     node.height = height;
//     node.textX = textX;
//     node.textY = textY;
//   }), []);

//   const xMax = width - defaultMargin.left - defaultMargin.right;
//   const yMax = height - defaultMargin.top - defaultMargin.bottom;

//   return (
//     <div className="dendrogram-container">
//       <svg className="dendrogram-svg" width={width} height={height}>
//         <rect width="100%" height="100%" rx={14} fill={background} />
//         <Cluster root={data} size={[xMax, yMax]}>
//           {(cluster) => (
//             <Group top={defaultMargin.top} left={defaultMargin.left}>
//               {cluster.links().map((link, i) => (
//                 <LinkVertical
//                   key={`cluster-link-${i}`}
//                   data={link}
//                   stroke={storkColor}
//                   strokeWidth="5"
//                   strokeOpacity={0.7}
//                   fill="none"
//                 />
//               ))}
//               {cluster.descendants().map((node, i) => {
//                 if (node.data.name === 'Common Node') {
//                   // Render the common "Common Node" differently
//                   return (
//                     <Group key={`cluster-node-${i}`} top={node.y} left={node.x}>
//                       <rect
//                         width={node.width}
//                         height={node.height}
//                         fill={nodecolor}
//                         rx={5}
//                         stroke={white}
//                         onClick={() => {
//                           alert(`clicked: ${JSON.stringify(node.data.name)}`);
//                         }}
//                       />
//                       <text
//                         dy=".33em"
//                         fontSize={20}
//                         fontFamily="Arial"
//                         textAnchor="middle"
//                         style={{ pointerEvents: 'none' }}
//                         fill={white}
//                         x={node.textX}
//                         y={node.textY}
//                       >
//                         {node.data.name}
//                       </text>
//                     </Group>
//                   );
//                 } else {
//                   // Render other nodes as usual
//                   return <Node key={`cluster-node-${i}`} node={node} />;
//                 }
//               })}
//             </Group>
//           )}
//         </Cluster>
//       </svg>
//     </div>
//   );
// }
