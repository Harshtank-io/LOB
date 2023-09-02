import React, { useMemo, useState, useEffect } from 'react';
import { Group } from '@visx/group';
import { Cluster, hierarchy } from '@visx/hierarchy';
import { HierarchyPointNode } from '@visx/hierarchy/lib/types';
import { LinkVertical } from '@visx/shape';
import '../css/Service.css'

const white = '#ffffff';
const color = '#f9bb2b';

const storkColor = '#f7f7f3';
const background = 'rgb(0,0,0,0)';



const clusterData = {
  name: 'DSA',
  children:[
    {
      name:"Array",
      children:[
        {
          name:"2-Pointer",
          children:[
            {
              name:"Binary Search",

            },
            {
              name:"Sliding Window"
            },
            {
              name:"Linked List"
            }
          ]
        },
        {
          name:"Stack"
        }
      ]
    }
    ]
};


function RootNode({ node }) {
  const width = 70;
  const height = 30;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const font = 20;

  return (
    <Group top={node.y} left={node.x}>
      <rect width={width} height={height} y={centerY} x={centerX} fill={color} rx={10} />
      <text
        dy=".33em"
        fontSize={font}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function Node({ node }) {
  const isRoot = node.depth === 0;

  if (isRoot) return <RootNode node={node} />;

  const nodeWidth = 50;
  const nodeHeight = 20;

  return (
    <Group top={node.y} left={node.x}>
      {node.depth !== 0 && (
        <rect
          width={nodeWidth}
          height={nodeHeight}
          fill={background}
          rx={10} // Apply rounded corners to non-parent nodes
          stroke={white}
          onClick={() => {
            alert(`clicked: ${JSON.stringify(node.data.name)}`);
          }}
        />
      )}
      <text
        dy=".33em"
        fontSize={9}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={white}
        x={nodeWidth / 2}
        y={nodeHeight / 2}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

const defaultMargin = { top: 40, left: 0, right: 0, bottom: 40 };

export default function Dendrogram() {
  const [width, setWidth] = useState(window.innerWidth); // Initialize with window width
  const [height, setHeight] = useState(500);

  const handleResize = () => {
    setWidth(window.innerWidth); // Update width on resize
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const data = useMemo(() => hierarchy(clusterData), []);
  const xMax = width - defaultMargin.left - defaultMargin.right;
  const yMax = height - defaultMargin.top - defaultMargin.bottom;

  return (
    <div className="dendrogram-container">
      <svg className="dendrogram-svg" width={width} height={height}>
        <rect width="100%" height="100%" rx={14} fill={background} />
        <Cluster root={data} size={[xMax, yMax]}>
          {(cluster) => (
            <Group top={defaultMargin.top} left={defaultMargin.left}>
              {cluster.links().map((link, i) => (
                <LinkVertical
                  key={`cluster-link-${i}`}
                  data={link}
                  stroke={storkColor}
                  strokeWidth="1  "
                  strokeOpacity={0.5}
                  fill="none"
                />
              ))}
              {cluster.descendants().map((node, i) => (
                <Node key={`cluster-node-${i}`} node={node} />
              ))}
            </Group>
          )}
        </Cluster>
      </svg>
    </div>
  );
}