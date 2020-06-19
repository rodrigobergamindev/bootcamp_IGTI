import React, { Component } from 'react';
import Header from './components/Header'
import Spinner from './components/Spinner';
import Candidates from './components/Candidates';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      candidates: []
    }

    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(async() => {
      const res = await fetch('http://localhost:8080/votes')
      const json = await res.json()
      this.setState({
        candidates: json.candidates
      })
    }, 5000)
  }
  render() {

    const { candidates } = this.state
    if(candidates.length === 0 ) {
      return (
        <Spinner description="carregando"/>
        )
    }
  return (
    <div>
      <Header>Votação</Header>
      <Candidates candidates={candidates}/>
    </div>
  )
  }
}
