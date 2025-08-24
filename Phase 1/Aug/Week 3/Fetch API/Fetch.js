//  document.getElementById("load").addEventListener("click", () => {
//       fetch("https://jsonplaceholder.typicode.com/posts") // request
//         .then(res => res.json()) // convert response to JSON
//         .then(data => {
//           console.log("Fetched Data:", data); // log in console
//           document.getElementById("output").textContent = JSON.stringify(data, null, 2);
//         })
//         .catch(err => console.error("Error:", err));
//     });

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload = function() {
  console.log(xhr.responseText);
};
xhr.send();
