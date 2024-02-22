// TodoItem.jsx
import React from 'react';
import styled from 'styled-components';
import { RiCloseCircleFill } from 'react-icons/ri';

const TodoItemWrapper = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-bottom: 1%;
  border-radius: 5px;
`;

const Checkbox = styled.input`
  background-color: transparent;
  color: greenyellow;
  margin-right: 10px;
  transform: scale(1.5);
  cursor: pointer;
`;

const Title = styled.p`
  background-color: transparent;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  color: greenyellow;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 1.5rem;
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
