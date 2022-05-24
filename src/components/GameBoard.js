import './GameBoard.css';
import { useState } from 'react';
import { processEvent } from '../utils/Utilities'; 
const GameBoard = ({pieces, game, onBoardUpdate}) => {
    const [showBlocker, setShowBlocker] = useState(false);
    
    const mouseDownHandler = e => {
        game.down(Number(e.currentTarget.getAttribute('column')), Number(e.currentTarget.getAttribute('row')), processEvent(e));
        setShowBlocker(true);

    }
    const mouseMoveHandler = e => {
        game.move(processEvent(e));
        onBoardUpdate();
    }
    const mouseUpHandler = () =>  {
        game.up();
        setShowBlocker(false);
    }
    return (
        
        <div
            onMouseUp={mouseUpHandler} 
            onTouchEnd={mouseUpHandler} 
            onMouseMove={mouseMoveHandler} 
            onTouchMove={mouseMoveHandler}  
            className="game-board"
        >
            {pieces.map((item, index) => (
                <div 
                    className="game-piece"
                    key={index}
                    style={{ left: `${item.x}px`, top: `${item.y}px` }}
                    row={item.row}
                    column={item.column}
                    onMouseDown={mouseDownHandler}
                    onTouchStart={mouseDownHandler}
                >
                    {item.data}
                </div>
            ))}
            { showBlocker && <div className="board-blocker" /> }
        </div>
    )
}
export default GameBoard;