import { FC } from 'react';

import { Todo } from './Example';

type TaskListProps = {
  todos: Todo[]
}

export const TaskList:FC<TaskListProps> = ({todos}) => {
  return(
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}