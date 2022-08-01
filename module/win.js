// Winning combination
export const winCombinations = [
     [0, 1, 2],   //Horizantal
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],   // Vertical
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],    // Diaganal
     [2, 4, 6]
]
// Check winner function
export function checkWin(curentClass, blockElements) {
    let winMatch = [];
    winCombinations.some((combination) => {
        winMatch.push(combination.every((index) => {
            // console.log(index);
            return blockElements[index].classList.contains(curentClass);
        }));
    });
    return winMatch || null
}