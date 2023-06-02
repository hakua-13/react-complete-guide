const Example = () => {
  // 練習用
  // 引数の方定義
  const sum1 = (x: number, y: number) =>{
    return x + y;
  }

  // デフォルト値の設定
  const sum2 = (x: number, y: number = 1) =>{
    return x + y;
  }

  // yの引数を任意にする
  const sum3 = (x: number, y?: number) =>{
    console.log(y);
    // return x + y;
  }

  // 戻り値の型定義
  // 戻り値がない場合は :voidと定義する
  const sum4 = (x: number, y: number): number => {
    return x + y;
  }

  // 型エイリアス
  type Sum = (x: number, y: number) => number;
  const sum5: Sum = (x, y) => x + y;
};

export default Example;
