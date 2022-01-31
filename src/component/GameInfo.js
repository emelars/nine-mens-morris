import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function GameInfo(props) {
    return(
        <div className="game-statics">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th></th>
                    <th>Player1-Blue</th>
                    <th>Player2-Red</th>
                </tr>
                </thead>
                <tbody key="table-body">
                <tr>
                    <td>Piece Qty (Board)</td>
                    <td>{props.pieceQuantity.player1}</td>
                    <td>{props.pieceQuantity.player2}</td>
                </tr>
                <tr>
                    <td>Piece Qty (Initial)</td>
                    <td>{props.initialPieceQuantity.player1}</td>
                    <td>{props.initialPieceQuantity.player2}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default GameInfo
