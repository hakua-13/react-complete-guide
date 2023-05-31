import { render, screen } from '@testing-library/react';
import Message from './Message';
import userEvent from '@testing-library/user-event';

describe('Message Componentのテスト', () => {
  describe('初期画面', () => {
    test('画面内にinput要素が表示されているか確認する', () => {
      render(<Message/>);
  
      const inputEl = screen.getByRole('textbox');
      expect(inputEl).toBeInTheDocument();
    })
  })

  describe('入力操作後', () => {
    test('input要素に値を入力したときに正しく値が更新されるかどうか確認する', async() =>{
      const user = userEvent.setup();
      render(<Message/>);

      const inputEl = screen.getByRole('textbox');
      // const inputEl = screen.getByPlaceholderText('メッセージを入力してください')
      expect(inputEl.value).toBe('');
      
      await user.type(inputEl, 'hello world');
      expect(inputEl.value).toBe('hello world')
    })
  })
});