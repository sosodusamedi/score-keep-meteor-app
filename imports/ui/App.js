import React, { Component } from 'react'
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import PlayerList from './PlayerList'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TitleBar />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    )
  }
}

export default App
