function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then(values => values.reduce((acc, curr) => acc + curr, 0));
  }
  
  addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log);