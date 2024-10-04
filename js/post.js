function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(love => love.json())
        .then(live =>loveLive(live))
}
function loveLive(love){
    const poster = document.getElementById('post-container');
    for(const data of love){
        const miniPoster = document.createElement('div');
        miniPoster.classList.add('post');
        miniPoster.innerHTML=
        `
        <h4>User_:${data.userId}</h4>
        <h5>Post: ${data.title}</h5>
        <p>Post Description:${data.body}</p>
        `;
        poster.appendChild(miniPoster);

    }
}
getPost();