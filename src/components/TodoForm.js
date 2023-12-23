// TodoForm.js

import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  border-bottom: 2px solid #fff;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 15px;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo({
        id: Date.now(),
        title: title,
        completed: false,
      });
      setTitle('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <SubmitButton type="submit">Add Task</SubmitButton>
    </FormWrapper>
  );
};

export default TodoForm;
