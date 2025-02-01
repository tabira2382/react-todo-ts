import { FC } from 'react';
import styled from 'styled-components';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { useTodos } from '../../hooks/useTodos';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TodoList: FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <Container>
      <Title>TODOリスト</Title>
      <TodoForm onSubmit={addTodo} />
      <TodoContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoContainer>
    </Container>
  );
};