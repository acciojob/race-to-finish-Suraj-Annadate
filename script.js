window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Array of promises
const promises = Array.from({ length: 5 }, () => {
  const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomTime} seconds`);
    }, randomTime * 2000);
  });
});

// Using Promise.any()
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.log(error); // Handle error if no promises resolve
  });

