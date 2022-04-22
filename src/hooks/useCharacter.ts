import { useState } from 'react'
import { CharacterSides } from '../types/CharacterSides'


export const useCharacter = () => {

    const [pos, setPos] = useState({x: 3, y: 5})
    const [side, setSide] = useState<CharacterSides>('down')

    const moveUp = () => {
        setPos(pos =>({
            x: pos.x,
            y: pos.y - 1
        }));
        setSide('up')
    };

    const moveDown = () => {
        setPos(pos =>({
            x: pos.x,
            y: pos.y + 1
        }));
        setSide('down')
    };

    const moveRight = () => {
        setPos(pos =>({
            x: pos.x + 1,
            y: pos.y
        }));
        setSide('right')
    };

    const moveLeft = () => {
        setPos(pos =>({
            x: pos.x - 1,
            y: pos.y
        }));
        setSide('left')
    };

    return{
        x: pos.x,
        y: pos.y,
        side,
        moveUp,
        moveDown,
        moveRight,
        moveLeft,
    };

};