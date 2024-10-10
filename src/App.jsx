import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import E8Visualization from './components/E8Visualization';
import FlowEditor from './components/FlowEditor';
import CodeEditor from './components/CodeEditor';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#4a4a4a' : '#2a2a2a'};
  color: white;
  border: none;
  cursor: pointer;
`;

const TabContent = styled.div`
  flex: 1;
  background-color: #1e1e1e;
`;

function App() {
  const [activeTab, setActiveTab] = useState('visualization');

  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <TabContainer>
          <Tab active={activeTab === 'visualization'} onClick={() => setActiveTab('visualization')}>
            E8 Visualization
          </Tab>
          <Tab active={activeTab === 'flowEditor'} onClick={() => setActiveTab('flowEditor')}>
            Flow Editor
          </Tab>
          <Tab active={activeTab === 'codeEditor'} onClick={() => setActiveTab('codeEditor')}>
            Code Editor
          </Tab>
        </TabContainer>
        <TabContent>
          {activeTab === 'visualization' && <E8Visualization />}
          {activeTab === 'flowEditor' && <FlowEditor />}
          {activeTab === 'codeEditor' && <CodeEditor />}
        </TabContent>
      </MainContent>
    </AppContainer>
  );
}

export default App;