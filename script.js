//your JS code here. If required.
let btn = document.getElementById('btn');

btn.addEventListener('click', async function() {
  // Get user input
  let text = document.getElementById('text').value;
  let delay = document.getElementById('delay').value;

  // Create a new Promise that resolves after the specified delay
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });

  // Wait for the Promise to resolve and get the result
  let result = await promise;

  // Display the result in the output div
  document.getElementById('output').textContent = result;
});