// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// const pr1 = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     resolve(obtainInstruction('steak', 0));
//   }, 2000)
// });
// const pr2 = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     resolve(obtainInstruction('steak', 1));
//   }, 2000)
// });
// pr1
// .then((value) => {console.log("resolved with: ", value);})

// pr2
// .then((value2) => {console.log(value2);})


//chain of promises

//create function that takes the dish as an argument
function listSteps(dish) {
  //in order to start promise chain we store a resolved promise in a var
  let promise = Promise.resolve();

  //then loop through the array of steps
  dish.forEach((step) => {
    promise = promise.then(() => {
      //each iteation creates a new promise
      //create our chain by calling .then
 
      return new Promise((resolve) => {
        //returns new Promise
        //each of which have the settimeout function to specify the delay
        setTimeout(() => {
          //print the steps to the page
          document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
          resolve();
        }, 1000);
      });
    });
  });
}

listSteps(steak);

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
