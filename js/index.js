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

//5
document.addEventListener('keydown', Yoo);

function Yoo(e) {
    log.textContent += ` ${e.code}`
    function logKey(e) {

    };
}

//6
window.addEventListener('resize', (happen) => {
    document.querySelectorAll('h2').forEach(el => {
        el.style.fontSize = '30rem';
        console.log('My headings are huugeee!');
    })
})




//7
const bodyText = document.querySelector(".text-content");
bodyText.addEventListener("copy", () => {
    bodyText.style.color = "white";
});



//8
document.addEventListener('wheel', () => {
    // console.log('wheel housing')
    const wheels = window.wheelY;
    console.log(wheels);
});
//9
const test1 = document.querySelector(".destination h4");
test1.addEventListener("mouseup", () => {
    test1.style.color = "purple";
});
//10
const test2 = document.querySelector(".destination p");
test2.addEventListener("mousedown", () => {
    test2.style.color = "orange";
});
//11
const body = document.querySelector("body");
body.addEventListener("click", () => {
    body.style.backgroundColor = "blue";
});

//12
const remove = document.querySelector("#image_two");
remove.addEventListener("click", (happen) => {
    remove.style.visibility = "hidden";

    event.stopPropagation();
})





