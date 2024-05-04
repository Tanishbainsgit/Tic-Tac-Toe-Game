// Once you do this, you can use the readline module to handle data on the terminal.
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})

// Utilize this tool to populate the three by three tic tac toe board with vacant spots in order to commence the game.
const initializeBoard = () => Array.from({ length: 3}, () => Array(3).fill(' '))

const printBoard = (board) => {
    console.log('\n board state')
    board.forEach(row => 
        console.log(row.join('|')))
        // This is for add a newline for the better seperation.
    console.log('\n')
     
}

