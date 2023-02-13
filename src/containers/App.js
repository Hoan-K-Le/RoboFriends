import { robots } from '../robots.js'
import CardList from '../components/CardList'
import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary.js'

class App extends Component {
  // How to add state
  constructor() {
    super()
    this.state = {
      robots: [], // Usually grab the users from a website
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(users => {
        this.setState({ robots: users })
      })
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value })
  }

  render() {
    // Destructoring
    const { robots, searchfield } = this.state
    // created this variable so it can communicate with the CardList whatever we're doing with the searchfield
    const filteredRobots = robots.filter(robot => {
      // returns the robot's name and if it includes the searchfield
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    // if there is a ton of users
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }
}

export default App
