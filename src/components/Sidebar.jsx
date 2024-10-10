import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2a2a2a;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ControlGroup = styled.div`
  margin-bottom: 20px;
`;

const ControlLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const ControlInput = styled.input`
  width: 100%;
  padding: 5px;
  background-color: #3a3a3a;
  color: white;
  border: none;
`;

const ToolList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: auto;
`;

const ToolItem = styled.li`
  margin-bottom: 10px;
`;

function Sidebar() {
  const openSourceTools = [
    'NumPy',
    'SciPy',
    'Matplotlib',
    'Pandas',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
  ];

  return (
    <SidebarContainer>
      <Title>E8 Kathara Grid Controls</Title>
      <ControlGroup>
        <ControlLabel>Rotation Speed</ControlLabel>
        <ControlInput type="range" min="0" max="1" step="0.1" />
      </ControlGroup>
      <ControlGroup>
        <ControlLabel>Particle Size</ControlLabel>
        <ControlInput type="range" min="0.01" max="0.1" step="0.01" />
      </ControlGroup>
      <ControlGroup>
        <ControlLabel>Show Flower of Life</ControlLabel>
        <ControlInput type="checkbox" />
      </ControlGroup>
      <ControlGroup>
        <ControlLabel>Show Kathara Grid</ControlLabel>
        <ControlInput type="checkbox" />
      </ControlGroup>
      <Title>Available Open Source Tools</Title>
      <ToolList>
        {openSourceTools.map((tool, index) => (
          <ToolItem key={index}>{tool}</ToolItem>
        ))}
      </ToolList>
    </SidebarContainer>
  );
}

export default Sidebar;