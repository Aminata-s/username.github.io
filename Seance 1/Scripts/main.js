

let myVariable = 'Bob';
myVariable = 'Étienne';

let iceCream = 'chocolat';
if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector('html').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "image/insta.webp" ) {
      myImage.setAttribute('src',"image/insta.webp" );
    } else {
      myImage.setAttribute('src',"image/insta.webp" );
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
  }

  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  }

  myButton.addEventListener('click', function() {
    setUserName();
  });