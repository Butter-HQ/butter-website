var menu = document.getElementById("hamburger-menu")
var hamburger = document.getElementById("hamburger-icon")
var x = document.getElementById("x")
//var butter_image = document.getElementById("btr_img_hamburger");
var menuItem = document.getElementById("menu-item")
var menuList = document.getElementById("menu-list")
//var nav = document.getElementById("nav_main")
var nav_main = document.getElementsByClassName("nav_main")

//const nav_left = document.getElementById("nav_desktop_left");
//const mql = window.matchMedia("(min-width: 48.001rem)");




//Functional to show and hide nav bar after a user scroll to a certain point 
function handleScroll() {
//   if (!mql.matches) {
//     return; // ignore on mobile
//   } 

  if (window.scrollY > 200) {
   // nav_main[0].style.display = "none";
   nav_main[0].style.transform = "translateY(-100%)";
   nav_main[0].style.transition = "500ms";
  } else {
    nav_main[0].style.display = "flex";
    nav_main[0].style.transform = "translateY(0%)";
   nav_main[0].style.transition = "500ms";
  }
}






function getRand(min,max) {
    return Math.random() * (max - min) + min;
}

function getRandRotate(index) {
    let rand = (Math.floor(Math.random() * (40 - 10) + 10));
    if (index % 2 != 0) {
        return rand * -1;
    }
    return rand;
}

var minLeft;
var maxLeft;
var getLeft;
var getTop;

for (let i = 0; i < 7; i++) {
var minLeft = (i*13);   
var maxLeft = minLeft+13; 
getLeft = getRand(minLeft,maxLeft);
getTop = getRand(1,16);
let b_img = document.createElement("img");
b_img.src = "./listOfImages/crystalButter.png";
b_img.style.width = "2rem";
b_img.style.height = "2rem";
b_img.style.top = getTop.toString() + "%";
b_img.style.left = getLeft.toString() + "%";
b_img.style.rotate = getRandRotate(i) + "deg";
b_img.style.display = "flex";
b_img.style.position = "absolute";
menuList.appendChild(b_img);
}

//butter_image.style.rotate = "10deg";
// var butterBtn = document.querySelectorAll('.get_butter_free_btn');

// function mobileColorChange() {
// butterBtn.forEach((b) => {
//     b.style.setProperty("background-color", "green", "important");
//     b.style.setProperty("color", "white", "important");
//     b.style.transitionDuration = "0.1s";
//     b.addEventListener('transitionend', changeBack);
// }) 

// }

// function changeBack() {
//     butterBtn.forEach((b) => {
//     b.style.setProperty("background-color", "white", "important");
//     b.style.setProperty("color", "black", "important");
//     })
// }


// butterBtn.addEventListener("click",mobileColorChange)


//Functionality to show and hide hamburger menu *****
function showMenu() {
    menu.style.display = "flex";
    requestAnimationFrame(() => {
        menu.style.transform = "translate(0%)";
    })  
}

function exit() {
    menu.style.transform = "translate(100%)"
    menu.addEventListener('transitionend', hideMenu);
}

function hideMenu() {
    menu.style.display = "none";
    menu.removeEventListener('transitionend', hideMenu);
}

//***** 

//*** Function to handle email sending

async function docs() { //Declared async function to allow the use of await (forces program to pause until function under await is complete)
 const email = document.getElementById("email").value.trim(); //Use trim to remove the spaces between the email
 if(!email) {
    alert("Please Enter an email/Email is invalid");
    return;
 }

try {
await fetch("https://script.google.com/macros/s/AKfycby3nXLzhViEhRlA_xxwK94TMk0Ic_hSso4mrtgLxmxBLbKhrBX4ujhj513sCDY9rP285w/exec",{ //Await pauses funciton until fetch finishes
    method: "Post", //Sends data (write something new)
    headers: {"Content-Type":"application/x-www-form-urlencoded"},
    body: "email=" + encodeURIComponent(email)
})

alert("Email saved!");
document.getElementById("email").value = "";
} catch (err) {
    console.log(err);
    alert("There was an error saving your email.")
}
}

//*** 



//**Event Listener */
hamburger.addEventListener("click", showMenu)
x.addEventListener("click", exit)
document.addEventListener("scroll", handleScroll);
document.getElementById("emailForm").addEventListener("submit", e => {
e.preventDefault();
docs();
});


//await: pauses the function until fetch is done running
//fetch: send HTTP request to a URL over internet
//method: type of method (GET,POST,PUT,DELETE) 
    //Get will read what is in the notebook
    //Post will add something into the notebook
    //Put will update exist something in notebook
    //Delete will erase something in notebook
//header tells server where data format it is in {"Content-Type":"type"};
//header Transforms the data into key/val pairs
//body email="" name expected from google apps 
//body encodeURIComponent(email) converts characters to safe url format

