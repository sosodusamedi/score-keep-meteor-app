import React, { Component } from 'react'
import { Players } from '../api/players'

class AddPlayer extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault()

    let playerName = e.target.playerName.value

    if(playerName) {
      e.target.playerName.value = ''
      Players.insert({
        name: playerName,
        score: 0
      })
    }
  }

  render() {
    return (
      <div className="item">
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form__input" type='text' name="playerName" placeholder="Player Name" />
        <button className="button">Add player</button>
      </form>
      </div>
    )
  }
}

export default AddPlayer
