import {Accordion, Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function Rules() {
    return (
        <div className="game-rules">
            <Alert variant="primary">Rules</Alert>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About Game</Accordion.Header>
                    <Accordion.Body>
                        Nine men's morris is a strategy board game for two players. The board consists of a grid with
                        twenty-four points.
                        Each player has nine pieces. Players try to form 'mills' (three of their own pieces lined
                        horizontally or vertically) allowing a player to remove an opponent's piece from the game.
                        A player wins by reducing the opponent to two pieces, or by leaving them without a legal move.
                        <p></p>
                        <p>The game proceeds in three phases:</p>
                        <p>Phase1: Placing pieces on vacant points</p>
                        <p>Phase2: Moving piece to adjacent points</p>
                        <p>Phase3: Moving piece to any vacant point</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Phase 1: Placing pieces</Accordion.Header>
                    <Accordion.Body>
                        The game begins with an empty board.
                        The players take turns placing their piece one per play on empty points.
                        If a player is able to place three of their pieces on contiguous points in a straight line,
                        vertically or horizontally, they have formed a mill and may remove one of their opponent's
                        pieces from the board and the game,
                        with the caveat that a piece in an opponent's mill can only be removed if no other pieces are
                        available.
                        After all pieces have been placed, phase two begins.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Phase 2: Moving pieces</Accordion.Header>
                    <Accordion.Body>
                        Players continue to alternate moves, this time moving a piece to an adjacent point.
                        A piece may not "jump" another piece. Players continue to try to form mills and remove
                        their opponent's pieces as in phase one. A player can "break" a mill by moving one of his pieces
                        out of an existing mill, then moving it back to form the same mill a second time (or any number
                        of times),
                        each time removing one of his opponent's piece. The act of removing an opponent's piece is
                        sometimes
                        called "pounding" the opponent. When one player has been reduced to three piece, phase three
                        begins.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Phase 3: Flying</Accordion.Header>
                    <Accordion.Body>
                        When a player is reduced to three pieces, there is no longer a limitation on that player of
                        moving to only adjacent points:
                        The player's piece may "fly" from any point to any vacant point.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Rules