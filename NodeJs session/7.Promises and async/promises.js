// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     setTimeout(() => {
//       const data = 'Promise resolved!';
//       const data3 = 'Promise dasdasdsa!';

//       resolve({data,data3}); // Resolve the promise
//     }, 2000);
//   });
  
//   myPromise.then((result) => {
//     console.log(result.data); 
//     console.log(result.data3); 

//   }).catch((error) => {
//     console.error(error);
//   });

//   console.log("After promise");


const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Data fetched!';
        resolve(data);
      }, 2000);
    });
  };
  
  const processData = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("ha3ml haga ableha");
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 2000);
    });
  };
  
  fetchData()
    .then(processData )
    .then((result) => {
      console.log(result); // DATA FETCHED!
    })
    .catch((error) => {
      console.error(error);
    });



///

// const asyncOperation = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber < 0.5) {
//           resolve(randomNumber);
//         } else {
//           reject(new Error('Random number is greater than 0.5!'));
//         }
//       }, 1000);
//     });
//   };
  
//   asyncOperation()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error); // Random number is greater than 0.5!
//     });