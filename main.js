let txt = "Hello ";
let delayTime = 2000;
let i = 0;
let name;
function startCoolStuff(){
    i++;
    let element = document.getElementById("main-text");
    if(name === "" || name === "Enter your name") return;
    setTimeout(() => {
        if(delayTime > 50){
            delayTime -= 100;
        }
        txt += name + "!"
        element.innerText = txt;
        if(i % 50 === 0){
            txt += " https://tinyurl.com/3njz9nb6 ";
        }else{
            txt += " " + getRandomGreeting() + " ";
        }
        startCoolStuff();
    }, delayTime);
}

function deleteStartDiv(){
    name = document.getElementById("name").value;
    let startingDiv = document.getElementById("main-center");
    startingDiv.parentNode.removeChild(startingDiv)
    startCoolStuff()
}

function setDefaultNameField(mode){
    let element = document.getElementById("name")
    if (mode === "on"){
        if(element.value === "Enter your name"){
            element.value = ""
        }
    }else if(mode === "off"){
        if(element.value === "") {
            element.value = "Enter your name"
        }
    }
}

function getRandomGreeting(){
    let option = Math.floor(Math.random() * 8);
    switch (option){
        case 0:
            return "Hi";
        case 1:
            return "Hello";
        case 2:
            return "Hello there";
        case 3:
            return "Howdy";
        case 4:
            return "Heyo";
        case 5:
            return "Yo";
        case 6:
            return "Hiya";
        case 7:
            return "Top of the morning";
    }
}