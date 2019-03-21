import React, { Component } from 'react'

class TitleBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>Score Keep</h1>
        </div>
      </div>
    )
  }
}

export default TitleBar
