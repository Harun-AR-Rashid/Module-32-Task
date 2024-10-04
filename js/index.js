// function loadingOne() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

function loadingTwo() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>console.log(data))
}
function loadingThree() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data =>console.log(data))
}
