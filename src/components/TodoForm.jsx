// TodoForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  background-color: transparent;
  display: flex;
  align-items: center;
  color: red;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: red;
  font-size: 1.2rem;
  border-bottom: 2px solid #fff;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: greenyellow;
  border: 2px solid red;
  border-radius: 15px;
  padding: 10px 15px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: semi-bold;
  }
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
        color="red"
        placeholder="Write something here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <SubmitButton type="submit">Add Task!</SubmitButton>
    </FormWrapper>
  );
};

export default TodoForm;
