function loverHalima(person) {
    // console.log('I love halima')
    return person;
}
// console.log(loverHalima('Do You Love Me'));

function harunLove(name) {
    console.log('I woo thee')
    return function lisa() {
        return console.log("I love You")
    }
};
let loveHarun = harunLove();
// console.log(loveHarun)
loveHarun();


function magii(love, married) {
    love(married);
}

function nuddles(name) {
    console.log('You are beautiful ' + name);
    // return
}
magii(nuddles, 'Dibala')