const PLAYER_ONE ="X";
const PLAYER_TWO ="O";
class TicTacToe{
    handleSquareClick(e){
        this.executeMove(e.target.id);
    }
    executeMove(moveIndex){
        if(this.board[moveIndex]== ""){
            this.board[moveIndex]=this.currentPlayer;
            this.updateBoard();
            if(!this.gameHasWinner()){
                this.currentPlayer=(this.currentPlayer==PLAYER_ONE?PLAYER_TWO:PLAYER_ONE);
            }else{
                alert("player "+this.currentPlayer+" is the winner");
                this.start();
            }
        }
        console.log(this.board);
    }
    updateBoard(){
        let gameBoard=document.getElementById("gameBoard");
        let squareElements=gameBoard.childNodes;
        squareElements.forEach((element,index)=>{
            if(element.innerText != this.board[index]){
                element.innerText=this.board[index];
            }
        })
    }
    gameHasWinner(){
        const winningCombs=[
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ];
        return winningCombs.find(combo=>{
            if(this.board[combo[0]] != "" && this.board[combo[1]] != "" && this.board[combo[2]] != "" && this.board[combo[0]] == this.board[combo[1]] && this.board[combo[1]] == this.board[combo[2]] )
            {
            return true;
            }else{ 
                return false;
            }
        })
    }
    drawBoard(){
        document.body.innerHTML="";
        let gameBoard=document.createElement('div');
        gameBoard.id='gameBoard';
        gameBoard.classList.add("board");
        gameBoard.addEventListener("click",this.handleSquareClick.bind(this));//bind the current scope to the function
        this.board.forEach((square,index)=>{
            let squareElement=document.createElement('div');
            squareElement.classList.add('square');
            squareElement.id=index;
            gameBoard.appendChild(squareElement);
        });
        document.body.appendChild(gameBoard);
    }
    start(){
        this.board=['','','',
                    '','','',
                    '','',''];
        this.currentPlayer=PLAYER_ONE;
        this.drawBoard();
    }
}
const game= new TicTacToe();
game.start();