const Example = () => {
  // 練習用
  type User = {
    name: string,
    age: number,
  }
  const user:User = {
    name: 'taro',
    age: 10
  }

  type UserName = string;
  type userAge = number;
  type UserGender = 'man' | 'woman' | 'others';

};

export default Example;
