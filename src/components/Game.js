import { useState } from 'react';
import GameBoard from './GameBoard';
const Game = ({game}) => {
    const [pieces, setPieces] = useState(game.pieces);
    const boardUpdateHandler = () => {
        setPieces(game.pieces);
    };
    return (
        <div>
            <GameBoard pieces={pieces} game={game} onBoardUpdate={boardUpdateHandler} />
        </div>
    )
}

export default Game;