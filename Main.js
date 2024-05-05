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

// This function is for informing the player about their next move and then how to execute it.
const nextMove = (player) => {
    printBoard(board)
    rl.questions(`player $(player) (X/O), enter your move (row,col)`, input => {
    // This is for convert the input to the number indices
        const[row,col] = input.split(',').map(number)
        if(board[row,col] === ' ') {
            //This is for updation of the board if nay spot is left empty
            board[row,col] = player
            if (checkWin(player)) {
                console.log(`Congratulation! Player $(player) Wins!`)
                printBoard(board)
                rl.close()
            } else if (board.flat().every(cell => cell !== ' ')) {
                console.log('The Game is a Tie')
                printBoard(board)
                rl.close()
            } else{
                // This is for switching the turns between X and O
                nextMove(player === 'X' ? 'O' : 'X')

            } 
        } else {
            console.log('Spot already taken by other player, try again.')
            // This person needs to be told again if their move is wrong
            nextMove(player)
        }
    })
}

// This function determines whether there is a winning outcomes based on the current satete of the board.
const checkWin = (player) {
const lines = [
    // Rows
    [board[0][0], board[0][1], board[0][2]]
    [board[1][0], board[1][1], board[1][2]]
    [board[2][0], board[2][1], board[2][2]]
    // Columns
    [board[0][0], board[1][0], board[2][0]]
    [board[0][1], board[1][1], board[2][2]]
    [board[0][2], board[1][2], board[2][2]]
    //Diagonals
    [board[0][0], board[1][1], board[2][2]]
    [board[0][2], board[1][1], board[2][0]]

]

// Make sure that each cell in each line matches the current player.
return lines.some(line => line.every(cell => cell === player))

}

// Start the game 
let board = initializeBoard()
// This if for begin the game with the player X
nextMove('X')