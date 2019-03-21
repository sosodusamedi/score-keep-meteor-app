import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Player from './Player'
import FlipMove from 'react-flip-move'

class PlayerList extends Component {
  constructor(props) {
    super(props)
  }

  renderPlayers() {
    if(this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started!</p>
        </div>
      )
    } else {
      return this.props.players.map(player => {
        return <Player player={player} key={player._id} />
      })
    }
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayerList
