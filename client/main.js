import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { Players, CalculatePlayerPosition } from '../imports/api/players'
import App from '../imports/ui/App'


Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {score: -1}}).fetch()
    let positionedPlayers = CalculatePlayerPosition(players)
    ReactDOM.render(<App players={positionedPlayers} />, document.getElementById('app'))
  })
})
