export function sleep(millis) {
  const date = Date.now();
  let curDate = null;
  do {
    curDate = Date.now();
  } while (curDate - date < millis);
}

export function sleepImmediate(millis) {
  setImmediate(() => {
    sleep(millis);
  });
}
