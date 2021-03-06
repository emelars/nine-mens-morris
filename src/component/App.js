import React from "react";
import Game from '../service/Game';
import Board from './Board';
import GameInfo from './GameInfo';
import Rules from './Rules';
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

let game = new Game();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerLocations: Array(24).fill(null),
            playerInfo: {
                player1: true,
                currentMove: game.actions.place,
                pieceQuantity: {player1: 0, player2: 0},
            },
        };
    }

    handleClick(i) {
        let currentGameInfo = {
            playerLocations: this.state.playerLocations.slice(),
            activePlayer: this.state.playerInfo,
            color: this.state.playerInfo.player1 ? "blue" : "red",
            label: this.state.playerInfo.player1 ? 'B' : 'R',
        };
        if (game.calculateWinner(currentGameInfo.activePlayer, currentGameInfo.playerLocations) != null) {
            return;
        }
        currentGameInfo = game.handleAction(currentGameInfo, i);
        // enable/disable pieces according to action
        game.setEnableDisable(currentGameInfo);
        this.setState({
            playerLocations: currentGameInfo.playerLocations,
            playerInfo: currentGameInfo.activePlayer,
        });
    }

    render() {
        const winner = game.calculateWinner(this.state.playerInfo,this.state.playerLocations);
        let status;
        if (winner != null) {
            status = 'Winner: ' + winner;
            game.phase = "Game Over: " + status;
        } else {
            status = 'Next Player: ' + (this.state.playerInfo.player1 ? " Player 1 - Blue" : " Player 2 - Red");
        }
        return (
            <div className="game">
                <div className="game-info">
                    <Alert variant="primary">Game Information</Alert>
                    <Alert variant="warning">{game.phase + game.warning}</Alert>
                    <GameInfo
                        pieceQuantity={this.state.playerInfo.pieceQuantity}
                        initialPieceQuantity={game.initialPieceQty}
                    />
                    <Rules/>
                </div>
                <div className="game-board">
                    <Alert variant="primary">{status}</Alert>
                    <Board
                        onClick={i => this.handleClick(i)}
                        gameInfo={this.state.playerLocations}
                    />
                </div>
            </div>
        );
    }
}

export default App