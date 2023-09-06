import { useState } from "react"
import Square from './square'

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [undo, setUndo] = useState([]);
    const handlePlay = (position) => {
        const newGame = game.map((g, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return g
        })
        setGame(newGame)
        setPlayer(!player)
        setUndo([...undo, game])
    }
    const handleUndo = () => {
        if (undo.length === 0) {
            return;
        }
        const lastMove = undo[undo.length - 1];
        setGame(lastMove);
        setUndo(undo.slice(-1));
        setPlayer(!player);
    };
    const listWinner = [
        [0, 1, 2], [0, 4, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ]



    const checkWinner = () => {
        for (let i = 0; i < listWinner.length; i++) {
            const [p1, p2, p3] = listWinner[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
            }
        }
        return null
    }

    const handleReset = () => {
        setGame(Array(9).fill(null));
        setPlayer(true);
        setUndo([]);
    };

    return <>
        <h1 className="text-red-500">Winner is: {checkWinner()}</h1><br />
        <div className="grid grid-cols-3 gap-2 w-[240px]">
            <Square value={game[0]} position={0} handlePlay={handlePlay} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} />
        </div><br />
        <div>
            <button
                className="rounded-full bg-green-700 w-[70px] h-[70px]"
                onClick={handleUndo}>Undo</button>
            <button
                className="rounded-full bg-red-700 w-[70px] h-[70px]"
                onClick={handleReset}>Reset</button>
        </div>
    </>
}

export default Board