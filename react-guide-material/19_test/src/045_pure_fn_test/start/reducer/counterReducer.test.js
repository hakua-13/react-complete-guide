import { counterReducer } from "./counterReducer";

const initState = { count: 0, step: 1};

describe("counterReducerの動作確認", () => {
  test("up", () => {
    const newState = counterReducer(initState, {type: 'up'});
    expect(newState.count).toBe(1);
    // toBeは参照が一致しているか確認する
    // toEqualは値が一致しているか確認する
    expect(newState).toEqual({count: 1, step: 1});
  });

  test("down", () => {
    const newState = counterReducer(initState, {type: "down"});
    expect(newState).toEqual({ count: -1, step: 1});
  });

  test("changeStep -> up", () => {
    const stateBeforeUpdate = counterReducer(initState, {type: ''});
    expect(stateBeforeUpdate).toEqual({ count: 0, step: 1});

    let newState = counterReducer(initState, {type: 'changeStep', payload: "3"});
    expect(newState).toEqual({count: 0, step: 3});

    newState = counterReducer(newState, {type: "up"});
    expect(newState).toEqual({ count: 3, step: 3});
  })
})

