import { game } from "./module/vareables.js";
import { profile, setHoverEffect, maksCell, swapTurn, endGame, isDraw } from "./module/helper.js";
import { checkWin, winCombinations } from "./module/win.js";

game.startBtn.addEventListener("click", startGmae);
game.restartBtn.addEventListener("click", startGmae);
game.drawBtn.addEventListener("click", startGmae);

profile();

// Start Game
function startGmae() {
    setHoverEffect();
    game.blockElements.forEach(cell => {
        cell.classList.remove(game.X_CLASS);
        cell.classList.remove(game.Y_CLASS);
        cell.classList.remove("win");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once: true});
    });
    game.startWindow.classList.add("hide");
    game.winEl.classList.remove("show");
    game.drawEl.classList.remove("show");
    game.winnerImg.children.length ? game.winnerImg.removeChild(game.winner) : null
}

// Onclick function 
function handleClick(e) {
    const cell = e.target;
    const curentClass = game.turn ? game.Y_CLASS : game.X_CLASS;
    maksCell(cell, curentClass);
    let flag = checkWin(curentClass, game.blockElements).filter( (win, index) => {
        if(win) {
            game.winner = game.blockElements[winCombinations[index][0]].cloneNode(true);
            return win !== false
        }
    } );
    // Ga'laba yoki durrangni tekshirish
    if(flag.length) {
        endGame(false, game.winEl, game.drawEl);
        game.winnerImg.append(game.winner);
    }else if(isDraw(flag)) {
        endGame(true, game.winEl, game.drawEl);
    }

    game.turn = swapTurn(game.turn);

    setHoverEffect();
}