import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Message from './Message';

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示の正常性確認", () => {
    test("入力された文字が画面上に存在する確認", () =>{
      render(<Message/>);
      const h2El = screen.getByRole('heading', {name: '入力された文字:'})
      expect(h2El).toBeInTheDocument();
    })
  });
  describe("画面操作正常性確認", () => {
    test("入力値の変更 > 操作ボタン押下", async() => {
      const user = userEvent.setup();
      render(<Message/>);
      const inputEl = screen.getByRole('textbox');
      const btnEl = screen.getByRole('button', {name: '送信ボタン'});
      const h2El = screen.getByRole('heading', {name: "入力された文字:"});

      expect(btnEl).toBeDisabled();
      expect(inputEl.value).toBe("");

      await user.type(inputEl, "こんにちは");
      expect(btnEl).not.toBeDisabled();
      expect(inputEl.value).toBe("こんにちは");

      await user.click(btnEl);
      expect(btnEl).toBeDisabled();
      expect(inputEl.value).toBe("");
      expect(h2El.textContent).toBe("入力された文字:こんにちは");
    })
  })
})