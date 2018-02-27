"use strict";

module.exports = promise => {
  let wrapper = new Promise(resolve => {
    Promise.resolve(promise).then(
      result => resolve([false, result]),
      error => resolve([true, error])
    );
  });

  return () =>
    new Promise((resolve, reject) => {
      wrapper.then(([isError, value]) => {
        if (isError) reject(value);
        else resolve(value);
      });
    });
};
