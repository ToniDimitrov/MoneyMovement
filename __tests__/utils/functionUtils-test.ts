import { debounce } from "../../src/utils/functionUtils";

jest.useFakeTimers();

describe("debounce", () => {
  let func: jest.Mock;
  let debouncedFunc: Function;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  test("Call debounced fn 100 times, debounce, should call function once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
