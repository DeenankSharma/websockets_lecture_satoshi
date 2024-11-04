import { usePlayerContext } from "../context/PlayerContext.js"
import PlayerTile from "../components/playerTile.jsx"
import { useNavigate } from "react-router-dom"
import PlayerTileLF from "../components/playerTileFullLobby.jsx"

function GameFull(){
  const navigate = useNavigate()
  function backToHome(){
    setPlayerName(null)
    navigate('/')
  }
  const {playerName, setPlayerName} = usePlayerContext();
  return(<>
    <div style={{display:'flex',flexDirection:'column', alignItems: 'center'}}>
    <h1 className="plz_wait_now" style={{color:'black'}}>Currently, Lobby is full!</h1>
      <button  style={{ width: 'fit-content' }} onClick={backToHome}>Back to Home</button>
      </div>
  </>)
}

export default GameFull