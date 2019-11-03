let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
let numClosedDoors = 3
let closeDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
let startButton = document.getElementById('start')
let openDoor1,
    openDoor2,
    openDoor3;
randomChoreDoorGenerator = () => {
    let choreDoor = Math.random()
    choreDoor = choreDoor * numClosedDoors
    choreDoor = Math.floor(choreDoor)
    console.log(choreDoor)
    if (choreDoor == 0) {
        openDoor1 = botDoorPath
        openDoor2 = beachDoorPath
        openDoor3 = spaceDoorPath
    } else if (choreDoor == 1) {
        openDoor1 = beachDoorPath
        openDoor2 = spaceDoorPath
        openDoor3 = botDoorPath
    } else if (choreDoor == 2) {
        openDoor1 = spaceDoorPath
        openDoor2 = botDoorPath
        openDoor3 = beachDoorPath
    }
}
isClick = (door) => {
    if (door.src == closeDoorPath) {
        return false
    } else {
        return true
    }
}
playDoor = () => {
    numClosedDoors--
    if (numClosedDoors === 0) {
        gameOver('win')
    }
}
doorImage1.onclick = () => {
    doorImage1.src = openDoor1
    playDoor()
    if (!isClick(doorImage1)) {

    }

}
doorImage2.onclick = () => {
    doorImage2.src = openDoor2
    playDoor()
    if (!isClick(doorImage1)) {

    }
}
doorImage3.onclick = () => {
    doorImage3.src = openDoor3
    playDoor()
    if (!isClick(doorImage1)) {

    }
}
let gameOver = (status) => {
    if (status == 'win') {
        startButton.innerHTML = 'You win! Play again?'
    }
}
randomChoreDoorGenerator()