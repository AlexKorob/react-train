import React from 'react';
import 'index.scss';


function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}


class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let rows = [];
    for (let i = 0; i < 3; i++) {
        rows.push(
        <div className="board-row" key={i}>
          {
            [...Array(3).keys()].map(item => {
              return this.renderSquare(item + i * 3);
            })
          }
        </div>
        );
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  handleClick(i) {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let currentSquares = history[history.length - 1].slice();
    if (currentSquares[i] || calculateWinner(currentSquares)) {
      return;
    }
    currentSquares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([currentSquares]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(i) {
    this.setState({
      stepNumber: i,
      xIsNext: (i % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    let currentSquares = history[this.state.stepNumber];
    let winner = calculateWinner(currentSquares);
    let moves = history.map((step, move) => {
      let desc = move ? `Go to #${move}` : "Start game";
      return (
        <li key={step}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    }
    else {
      status = `Next player: ${this.state.xIsNext ? "X": "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // console.log("-----------");
  for (let line of lines) {
    const [a, b, c] = line;
    // console.log(a, b, c);
    // console.log(squares);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
