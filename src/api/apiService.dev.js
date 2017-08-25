const delayedResponse = (delay, data) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

export const getExample = () => delayedResponse(0, {});

export const postExample = () => delayedResponse(3000, {});
