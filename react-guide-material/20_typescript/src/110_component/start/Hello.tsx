import { FC, ReactNode } from 'react';

type HelloProps = {
  text: string,
  children: ReactNode,
}

export const Hello: FC<HelloProps> = ({text, children}) => {
  return <h1>{text}: {children}</h1>
}


type FnProps = {
  fn: (text: string) => void
}

export const Btn: FC<FnProps> = ({fn}) => {
  return (
    <button onClick={() => fn('typescript')}>
      ボタン
    </button>
  )
}