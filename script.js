let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let win = false;

let meDoorPath = "https://i.imgur.com/Kf5UtAH.png";
let catDoorPath = "https://i.imgur.com/xIBb9nc.png";
let cowDoorPath = "https://i.imgur.com/98kJm9Z.png";

let closedDoorPath = "https://i.imgur.com/xIDzOWo.png";

let currentlyPlaying = false;


const gameOver = (status) => {
    if(status === 'win')
        startButton.innerHTML = 'You win! Play again?';
    else
        startButton.innerHTML = 'Game over! Play again?';
    currentlyPlaying = false;
    if(!isBot(doorImage1))
        doorImage1.style.visibility="hidden";
    if(!isBot(doorImage2))
        doorImage2.style.visibility="hidden";
    if(!isBot(doorImage3))
        doorImage3.style.visibility="hidden";

}

const isBot = (door) => {
    if(door.src === meDoorPath)
        return true;
    else
        return false;
}

function isClicked(door)
{
    if(door.src === closedDoorPath)
        return false;
    else
        return true;
}

function playDoor(door)
{
    numClosedDoors--;
    if((numClosedDoors === 2) && isBot(door))
    {
        gameOver('win');
        win = true;
    }
    if((numClosedDoors === 0) && (!win))
    {
        gameOver('lose');
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);

    if(choreDoor === 1)
    {
        openDoor1 = meDoorPath;
        openDoor2 = catDoorPath;
        openDoor3 = cowDoorPath;
    }
    else if(choreDoor === 2)
    {
        openDoor1 = catDoorPath;
        openDoor3 = cowDoorPath;
        openDoor2 = meDoorPath;
    }
    else if(choreDoor === 3)
    {
        openDoor1 = cowDoorPath;
        openDoor2 = meDoorPath;
        openDoor3 = catDoorPath;
    }
}

doorImage1.onclick = () => {
    if (!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);

    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);

    }
}


doorImage3.onclick = () => {
    if (!isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);

    }
}

startButton.onclick = () => {
    if(currentlyPlaying == false)
        startRound();
}

const startRound = () => {
    doorImage1.src = "https://i.imgur.com/xIDzOWo.png";
    doorImage1.style.visibility="visible";
    doorImage2.src = "https://i.imgur.com/xIDzOWo.png";
    doorImage2.style.visibility="visible";
    doorImage3.src = "https://i.imgur.com/xIDzOWo.png";
    doorImage3.style.visibility="visible";
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;

    randomChoreDoorGenerator();
}

