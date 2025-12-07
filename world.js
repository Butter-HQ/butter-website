var menu = document.getElementById("hamburger-menu")
var hamburger = document.getElementById("hamburger-icon")
var x = document.getElementById("x")
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



hamburger.addEventListener("click", showMenu)
x.addEventListener("click", exit)
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

