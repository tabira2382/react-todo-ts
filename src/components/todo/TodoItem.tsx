import { FC, memo } from 'react';
import { Todo } from '../../types/todo';

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoItem: FC<Props> = memo(({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-2 p-2 border rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
      >
        削除
      </button>
    </div>
  );
});