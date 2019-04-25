import React, { Component } from 'react';
import './Game.css';
import Score from "../Score/Score.js"
import Highscore from "../Score/Highscore.js"

/*
DRAW:
Fyll de tre raderna längst till vänster.
Lägg en token längst till höger.
fortsätt sedan fylla på från rad 4 från vänster

*/


class Game extends Component {
    constructor(props) {
        super(props);
        this.state={
            board: [], //Will contain the board of the game
            playerTurn: 1, //Sets the starting player to 1(out of 2)
            username1: this.props.username1,
            username2: this.props.username2,
            winner: "",
            score1: 0,
            score2: 0,
            gameOver: false
        }
    }
    startUp = () => {
        let array = []; //Array to contain the board to be set as the state.board.
        for (let r=0; r<7; r++) { //Creates the 'rows' of the board, but is visually turned into columns after css is applied.
            let row = []; //Array representing the row.
            for (let c=0; c<6; c++){ //Creates the 'colums' of the board, but is visually turned into columns after css is applied.
                row.push(0); //Pushes a zero into each index of the array, creating the "column"
            }
            array.push(row) //Pushes the rows created above into the array created at the top of the function.
        }
        this.setState({
            board: array, //Puts the array at the state.board, meaning the state.board now contains a gameboard.
          })
    }
    componentDidMount(){
        this.startUp(); //Once the component is opened and ran, the above startUpInit is ran and the board is created. 
    }
    changePlayerTurn = () => { //Method that changes the player when you click to place a gametoken.
        this.setState({
            playerTurn: this.state.playerTurn === 2 ? 1 : 2 //If player2 is true, then it turns to 1. If player2 is false, it's put to 2.
        })
    }
    renderPlayerToken = (tr, i) => { //Method to render the playerToken.
        return (
            <tr key={i}>
                {tr.map((td, j) => <td key={j} className="boardBox">
                    <div className={"circle player"+td} onClick={() => this.onClick(i)}>{}</div>    
                </td>)}
            </tr>
        )
    }
    checkVertically(board) {
        for (let r = 0; r < 7; r++) {
          for (let c = 0; c < 5; c++) {
            if (board[r][c]) {
              if (board[r][c] === board[r][c + 1] && 
                  board[r][c] === board[r][c + 2] &&
                  board[r][c] === board[r][c + 3]) {

                  if (this.state.playerTurn === 1) {
                      this.setState({
                        winner: this.props.username1,
                        score1: this.state.score1 + 1,
                        gameOver: true
                      })
                  } else if (this.state.playerTurn === 2) {
                      this.setState({
                          winner: this.props.username2,
                          score2: this.state.score2 + 1,
                          gameOver: true
                      })
                  }
                return board[r][c];
              }
            }
          }
        }
      }
    checkHorizontally(board) {
    for (let r = 3; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
            if (board[r][c] === board[r - 1][c] &&
                board[r][c] === board[r - 2][c] &&
                board[r][c] === board[r - 3][c]) {
                if (this.state.playerTurn === 1) {
                    this.setState({
                      winner: this.props.username1,
                      score1: this.state.score1 + 1,
                      gameOver: true
                    })
                } else if (this.state.playerTurn === 2) {
                    this.setState({
                        winner: this.props.username2,
                        score2: this.state.score2 + 1,
                        gameOver: true
                    })
                }
            return board[r][c];    
            }
        }
        }
    }
    }
    checkDiagonalLeft(board) {
        for (let r = 3; r < 7; r++) {
          for (let c = 0; c < 6; c++) {
            if (board[r][c]) {
              if (board[r][c] === board[r - 1][c + 1] &&
                  board[r][c] === board[r - 2][c + 2] &&
                  board[r][c] === board[r - 3][c + 3]) {
                  if (this.state.playerTurn === 1) {
                    this.setState({
                      winner: this.props.username1,
                      score1: this.state.score1 + 1,
                      gameOver: true
                    })
                } else if (this.state.playerTurn === 2) {
                    this.setState({
                        winner: this.props.username2,
                        score2: this.state.score2 + 1,
                        gameOver: true
                    })
                }
                return board[r][c];
              }
            }
          }
        }
      }
      checkDiagonalRight(board) {
        for (let r = 3; r < 7; r++) {
          for (let c = 3; c < 7; c++) {
            if (board[r][c]) {
              if (board[r][c] === board[r - 1][c - 1] &&
                  board[r][c] === board[r - 2][c - 2] &&
                  board[r][c] === board[r - 3][c - 3]) {
                  if (this.state.playerTurn === 1) {
                    this.setState({
                      winner: this.props.username1,
                      score1: this.state.score1 + 1,
                      gameOver: true
                    })
                } else if (this.state.playerTurn === 2) {
                    this.setState({
                        winner: this.props.username2,
                        score2: this.state.score2 + 1,
                        gameOver: true
                    })
                }
                return board[r][c];
              }
            }
          }
        }
      }
      checkDraw(board) {
        for (let r = 0; r < 7; r++) {
          for (let c = 0; c < 6; c++) {
            if (board[r][c] === 0) {
              console.log("DRAWINNER")  
              return null;
            }
          }
        }
        this.setState({
          winner: "draw",
          gameOver: true
        })
      }
    onClick = (id) => {
        let player = this.state.playerTurn; //Variable containing the state.player
        let column = id; //Variable containing the id used as argument.
        const table = [...this.state.board] //Spreadarray for the state.board
        let newBoard = table[column] 
        let addLast = newBoard.lastIndexOf(0);
        this.setState({
            username1: this.props.username1,
            username2: this.props.username2
        })
        if (addLast === -1) {
            return;
        }
        newBoard[addLast] = player;

        this.checkHorizontally(table);
        this.checkVertically(table);
        this.checkDiagonalLeft(table);
        this.checkDiagonalRight(table);
        this.checkDraw(table);
        this.changePlayerTurn();
    }
    reset = () => {
        console.log("Reset");
        this.setState({
            winner: "",
            gameOver: false,
        })
        this.startUp();
    }
    render() {
        let board = this.state.board //Variable containing the state.board
        if (this.state.winner === "") {     
            return (
            <>
            <div className="boardContainer"> {/* Div to contain the boardgame */}
                <table>
                    <tbody>
                        {board.map(this.renderPlayerToken)}
                    </tbody>
                </table>
            </div>
            </>
            )
        }
        return (
            <>
            <Highscore 
            username1={this.state.username1}
            username2={this.state.username2}
            score1={this.state.score1}
            score2={this.state.score2}
            />
            <div className="boardContainerScore disabled"> {/* Div to contain the boardgame */}
                <table>
                    <tbody>
                        {board.map(this.renderPlayerToken)}
                    </tbody>
                </table>
            </div>
            <Score 
            winner={this.state.winner}
            />
            <div className="game_reset" onClick={this.reset}>

            </div>
            </>
        )
    }
}//End of Game

export default Game;