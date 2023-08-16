const boards = document.querySelectorAll(".score-board");

function add(number, element) {
    if (boards[element]) {
        const sum = Number(boards[element].textContent) + number;
        boards[element].textContent = sum;
    }
    compare(element);
}

function compare(element) {
    const active = document.querySelector(".lead");
    if (active) {
        const otherElIdx = element === 0 ? 1 : 0;
        if (boards[0].textContent === boards[1].textContent) {
            // both stm are same
            // active.classList.remove("lead");
            boards[otherElIdx].classList.remove("lead");
        }
        else if (Number(boards[element].textContent) > Number(boards[otherElIdx].textContent)) {
            boards[element].classList.add("lead");
            boards[otherElIdx].classList.remove("lead");
        }
    }
    else {
        boards[element].classList.add("lead");
    }
}

function newGame() {
    boards[0].textContent = 0;
    boards[1].textContent = 0;
    boards[1].classList.remove("lead");
    boards[0].classList.remove("lead");
}