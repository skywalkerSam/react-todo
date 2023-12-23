// TodoItem.js

import React from 'react';
import styled from 'styled-components';
import { RiCloseCircleFill } from 'react-icons/ri';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  transform: scale(1.5);
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${TodoItemWrapper}:hover & {
    opacity: 1;
  }
`;

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const { id, title, completed } = todo;

  return (
    <TodoItemWrapper>
      <Checkbox
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <Title completed={completed}>{title}</Title>
      <DeleteButton onClick={() => deleteTodo(id)}>
        <RiCloseCircleFill />
      </DeleteButton>
    </TodoItemWrapper>
  );
};

export default TodoItem;
