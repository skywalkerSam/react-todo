// App.jsx
import React from 'react';
import 'tachyons';
import styled from 'styled-components';
import TodoList from './components/TodoList';

const AppWrapper = styled.div`
  max-width: 75%;
  margin: 1% auto;
  padding: 20px;
  background-color: transparent;
  color: red;
`;

const App = () => {
  return (
    <div>
      <h1 className='tc red f1 hover-green pointer'>TODO</h1>
      <AppWrapper>
        <TodoList />
      </AppWrapper>
    </div>
  );
};

export default App;
