const delayedResponse = (delay, data) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

export function getExample() {
  return delayedResponse(0, {});
}

export function postExample() {
  return delayedResponse(3000, {});
}
