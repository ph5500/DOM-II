// // Your code goes here
// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
// }

// // document.body.innerHTML = '<div>gone</div>'

// document.querySelector('a').addEventListener('click', clickEventHandler)
// document.querySelector('nav').addEventListener('click', clickEventHandler)
// document.querySelector('header').addEventListener('click', clickEventHandler)
// document.body.addEventListener('click', clickEventHandler)
// document.addEventListener('click', clickEventHandler)
// window.addEventListener('click', clickEventHandler)

// //you can grab ANY elements in the DOM
// //you can do ANYTHING you want with it
// //you can create new elements and attach them to the DOM
// //you can destroy any part of the website
// //you can trigger network requests to send data to the server
// //animation
// //analytics

//1//
window.addEventListener("load", function (happen) {
    alert("The page has loaded");
});
//2
function newPicture() {
    document.getElementById('image_one').src = "/Users/philfives/LambdaSchoolWork/DOM-II/shreena-bindra-fHzvQFO-oQg-unsplash.jpg";
}

function oldPicture() {
    document.getElementById('image_one').src = "img/fun-bus.jpg";
}
//3
const navStop = document.querySelector('nav');
navStop.addEventListener('click', function (happen) {
    event.preventDefault();
    alert(`don't click that please`);
})

//4
const btns = document.querySelector('#btn');
btns.addEventListener('dblclick', function (happen) {
    happen.target.style.color = 'red'
});

const button_two = document.querySelector('#btn_dos');
button_two.addEventListener('dblclick', function (happen) {
    happen.target.style.color = 'blue'
});

const button_three = document.querySelector('#btn_tres');
btn_tres.addEventListener('dblclick', function (happen) {
    happen.target.style.color = 'green'
});


// const image_four = document.querySelector('#image_four');
// image_four.addEventListener('mousedown', function (event) {
//     event.target.style.opacity = '0';
// });

// image_four.addEventListener('mouseup', function (event) {
//     event.target.style.opacity = '1';
// });

//5
document.addEventListener('keydown', Yoo);

function Yoo(e) {
    log.textContent += ` ${e.code}`
    function logKey(e) {

    };
}
//6
const div = document.getElementById('myDiv').style.resize = "both";
// myDiv.style.addEventListener('resize' = 'vertical');
//7
const paragraph = document.querySelector('#p_one');
paragraph.addEventListener('clone', function (happen) {
    alert('clone this')
});

//8
document.addEventListener('wheel', () => {
    // console.log('wheel housing')
    const wheels = window.wheelY;
    console.log(wheels);
});




