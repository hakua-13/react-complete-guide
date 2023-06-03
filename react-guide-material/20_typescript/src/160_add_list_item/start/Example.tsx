import { useState } from "react";
import { TaskList } from "./TaskList";

export type Todo = {
  id: number,
  text: string,
}

const Example = () => {
  const [ inputText, setInputText ] = useState<string>('');
  const [ todos, setTodos ] = useState<Todo[]>([
    {
      id: 1,
      text: 'todo1'
    },
    {
      id: 2,
      text: 'todo2'
    }
])

  const handleChangeInputText = (e:any) => {
    setInputText(e.target.value);
  }

  const addTodo = () => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        text: inputText,
      }
    ]);

    setInputText('');
  }

  return(
    <>
      <input type='text' value={inputText} onChange={handleChangeInputText}/>
      <button onClick={addTodo}>追加</button>
      <TaskList todos={todos}/>
    </>
  )
};

export default Example;
