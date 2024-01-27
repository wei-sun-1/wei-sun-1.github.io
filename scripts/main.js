let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/f1.jpg") {
        myImage.setAttribute("src", "images/f1.1.jpg");
    } else {
        myImage.setAttribute("src", "images/f1.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = `F1 is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = `F1 is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
