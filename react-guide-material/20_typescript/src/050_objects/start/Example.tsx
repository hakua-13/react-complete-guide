const Example = () => {
  // 練習用
  // array
  const arry1: number[] = [1,2,3];
  const arry2: Array<number> = [1,2,3];

  const arry3: (string | number)[] = [1,'a'];
  const arry4: Array<string | number> = [1,'a'];

  // object
  const abj1:{name: string, age: number} = {
    name: 'taro',
    age: 18,
  }
  type Person = {name: string, age:number};
  const obj2:Person = {
    name: 'taro',
    age: 18
  }
  type Person2 = {name: string, age?: number};
  const obj3:Person2 = {
    name: 'taro'
  }

  // array, object
  const users: Person2[] = [
    {name: 'taro'},
    {name: 'taro', age: 19}
  ]
};

export default Example;
