const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }

  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }

  // ジェネリク
  // 型を引数のように扱うことができる
  // 型ごとに同じ関数を作成し冗長なコードになることを防ぐ
  const strArray = repeatStr('hello', 3);
  console.log(strArray);
  const numArray = repeatNum(10, 3);
  console.log(numArray);

  const strArray2 = repeat<number>(1, 3);
  console.log(strArray2);
  const numArray2 = repeat<string>('world' ,3);
  console.log(numArray2);
};

export default Example;
