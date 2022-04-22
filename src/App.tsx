import { useEffect } from 'react'
import * as C from './App.style'
import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'
import { mapSpots } from './data/mapSpots'

function App() {
  const chara = useCharacter()

  useEffect(()=> {
      window.addEventListener("keydown", handleKeyDown)
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code){
      case "KeyW":
      case "ArrowUp":
        chara.moveUp()
        break;

      case "KeyS":
      case "ArrowDown":
        chara.moveDown()
        break;

      case "KeyD":
      case "ArrowRight":
        chara.moveRight()
        break;

      case "KeyA":
      case "ArrowLeft":
        chara.moveLeft()
        break;
    }
  }

  return(
    <C.Container>
    <C.Map>
      <Character x={chara.x} y={chara.y} side={chara.side}/>
    </C.Map>
    </C.Container>
  )
}

export default App
