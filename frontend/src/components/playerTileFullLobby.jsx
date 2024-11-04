function PlayerTileLF(props){ 
  return(<>
    <div className="player_container">
      <h3  className='player_name'>Name : {props.playerName}</h3>
      <h3 className="player_name">Lobby is Full</h3>
    </div>
    </>
  )
}

export default PlayerTileLF