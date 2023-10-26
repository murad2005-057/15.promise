const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

Promise.all([promise1, promise2])
  .then(values => {
    const result = values.reduce((acc, curr) => acc + curr, 0);
    console.log(result); 
  })
  .catch(error => {
    console.error(error); 
  });





