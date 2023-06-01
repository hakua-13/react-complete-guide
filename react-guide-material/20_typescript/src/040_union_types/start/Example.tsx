const Example = () => {
  // 練習用
  let strOrNum: string | number = 'hello';
  strOrNum = 123;
  console.log(strOrNum);

  let helloOrNum: 'hello' | number = 'hello';
  helloOrNum = 456;
  console.log(helloOrNum);

  type HelloOrNum = 'hello' | number;
  const hello: HelloOrNum = 789;
  console.log(hello)
};

export default Example;
