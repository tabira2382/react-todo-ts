import { FC, memo } from 'react';
import styled from 'styled-components';
import { Todo } from '../../types/todo';

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const TodoText = styled.span<{ completed: boolean }>`
  flex: 1;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? '#666' : '#000'};
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

export const TodoItem: FC<Props> = memo(({ todo, onToggle, onDelete }) => {
  return (
    <TodoItemContainer>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <TodoText completed={todo.completed}>
        {todo.title}
      </TodoText>
      <DeleteButton onClick={() => onDelete(todo.id)}>
        削除
      </DeleteButton>
    </TodoItemContainer>
  );
});