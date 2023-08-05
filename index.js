const boards = document.querySelectorAll(".score-board");

function add(number, element) {
    if (boards[element - 1]) {
        const sum = Number(boards[element - 1].textContent) + number;
        boards[element - 1].textContent = sum;
    }
    compare();
}

function compare() {
    if (boards[0].textContent === boards[1].textContent) {
        boards[1].classList.remove("lead");
        boards[0].classList.remove("lead");
    }
    else if (Number(boards[0].textContent) > Number(boards[1].textContent)) {
        // home in lead
        boards[1].classList.remove("lead");
        boards[0].classList.add("lead");
    }
    else {
        // guest in lead
        boards[0].classList.remove("lead");
        boards[1].classList.add("lead");
    }
}

function newGame() {
    boards[0].textContent = 0;
    boards[1].textContent = 0;
    boards[1].classList.remove("lead");
    boards[0].classList.remove("lead");
}