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

window.addEventListener("load", function (happen) {
    alert("The page has loaded");
});

function newPicture() {
    document.getElementById('image_one').src = "/Users/philfives/LambdaSchoolWork/DOM-II/shreena-bindra-fHzvQFO-oQg-unsplash.jpg";
}

function oldPicture() {
    document.getElementById('image_one').src = "img/fun-bus.jpg";
}

const navStop = document.querySelector('nav');
navStop.addEventListener('click', function (happen) {
    event.preventDefault();
    alert(`don't click that please`);
})


const btns = document.querySelector('#btn');
btns.addEventListener('dblclick', function (happen) {
    happen.target.style.color = 'red'
});

const button_two = document.querySelector('#btn_dos');
button_two.addEventListener('dblclick', function (happen) {
    happen.target.style.color = 'blue'
});

const butto_three = document.querySelector('#button_tres');
button_three.addEventListener('dblclick', function (happen) {
    happen.target.style.color = 'green'
});


// const image_four = document.querySelector('#image_four');
// image_four.addEventListener('mousedown', function (event) {
//     event.target.style.opacity = '0';
// });

// image_four.addEventListener('mouseup', function (event) {
//     event.target.style.opacity = '1';
// });


document.addEventListener('keydown', Yoo);

function Yoo(e) {
    log.textContent += ` ${e.code}`;
}

document.addEventListener('wheel', () => {
    // console.log('wheel housing')
    const wheels = window.wheelY;
    console.log(wheels);
});




