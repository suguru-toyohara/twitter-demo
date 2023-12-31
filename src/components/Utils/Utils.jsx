//1秒間awaitする関数
export const Sleep = (msec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, msec);
  });
};
