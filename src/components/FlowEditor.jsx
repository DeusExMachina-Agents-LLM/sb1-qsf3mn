import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'E8 Root' },
    position: { x: 250, y: 25 },
  },
];

const initialEdges = [];

const toolTypes = [
  { value: 'mathOperation', label: 'Math Operation' },
  { value: 'dataTransformation', label: 'Data Transformation' },
  { value: 'visualization', label: 'Visualization' },
  { value: 'analysis', label: 'Analysis' },
];

function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedTool, setSelectedTool] = useState('');

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const addNode = useCallback(() => {
    if (selectedTool) {
      const newNode = {
        id: Date.now().toString(),
        type: 'default',
        data: { label: selectedTool },
        position: { x: Math.random() * 500, y: Math.random() * 300 },
      };
      setNodes((nds) => nds.concat(newNode));
    }
  }, [selectedTool, setNodes]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <select 
          value={selectedTool} 
          onChange={(e) => setSelectedTool(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          <option value="">Select a tool</option>
          {toolTypes.map((tool) => (
            <option key={tool.value} value={tool.value}>{tool.label}</option>
          ))}
        </select>
        <button onClick={addNode} disabled={!selectedTool}>Add Tool</button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default FlowEditor;