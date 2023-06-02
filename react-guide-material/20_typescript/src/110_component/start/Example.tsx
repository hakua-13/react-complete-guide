import { FC } from "react";

import { Btn, Hello } from "./Hello";

const Example: FC = () => {
  return (
    <>
      <Hello text="hello">children!!</Hello>
      <Btn fn={(text) => console.log("hello", text)} />
    </>
  );
};

export default Example;
