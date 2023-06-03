import { useState } from "react";

type Todo  = {
  id: number,
  text: string,
}

const Example = () => {
  const [ text, setText ] = useState<string>('hello');

  const [ array , setArray ] = useState<number[]>([1,2,3]);

  const [ todos, setTodos ] = useState<Todo[]>([{id: 0, text: "test"}])
};

export default Example;
 