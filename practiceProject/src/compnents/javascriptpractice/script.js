console.log("hello");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//  fetch(URL,
//     {
//         method: "POST",
//         body: JSON.stringify(data),
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }
// ).then(response => response.json())
// .then(data => {

// })
// .catch((err) => {

//     })
// });
