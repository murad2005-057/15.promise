const promise3 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise4 = new Promise(resolve => setTimeout(() => resolve(5), 60));

Promise.all([promise3, promise4])
  .then(values => {
    const result = values.reduce((acc, curr) => acc + curr, 0);
    console.log(result); 
  }) 

