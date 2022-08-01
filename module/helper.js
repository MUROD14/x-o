import { game } from "./vareables.js";

export function profile() {
    game.selectedProfile.forEach(img => {
        img.addEventListener("click", (e) => {
            let target = e.target.dataset.id;
            removeimgSelected(game.selectedProfile);
            document.querySelector(`[data-id='${target}']`).classList.add("selected");
            if(target == "x2" || target == "y2") {
                game.X_CLASS = "x2",
                game.Y_CLASS = "y2"
            }

            game.turn = target == "y" || target == "y2" ? true : false;
        });
       });
}

function removeimgSelected(img) {
    [].forEach.call(img, function(el) {
        el.classList.remove("selected")
    });
}
//Set hover effect function
export function setHoverEffect() {
    game.boardElement.classList.remove(game.X_CLASS);
    game.boardElement.classList.remove(game.Y_CLASS);
    if(game.turn) {
        game.boardElement.classList.add(game.Y_CLASS);
    }else {
        game.boardElement.classList.add(game.X_CLASS);
    }
}
// markcell function
export function maksCell(cell, currentClass) {
    cell.classList.add(currentClass);
}

//swap function
export function swapTurn(turn) {
    return turn =! turn;
}


// endGame function
export function endGame(draw, winEl, drawEl) {
    if(!draw) {
        winEl.classList.add('show');
    }else {
        drawEl.classList.add('show');
    }
}
export function isDraw(flag) {
    if(flag.length) return;
    return [...game.blockElements].every( (cell) => {
        return cell.classList.contains(game.X_CLASS)
        ||
        cell.classList.contains(game.Y_CLASS);
    });
}