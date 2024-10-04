function loadingFour(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(harun => loveHarun(harun))
}
function loveHarun(dhur){
    const rashid = document.getElementById('loverea');
    for(const data of dhur){
        const ar = document.createElement('li');
        ar.innerText = data.name;
        rashid.appendChild(ar);
    }
}