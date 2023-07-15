// App.js

import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';

const AppWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #0c0c0c;
  color: #fff;
  font-family: 'Roboto', sans-serif;
`;

const App = () => {
  return (
    <AppWrapper>
      <TodoList />
    </AppWrapper>
  );
};

export default App;
