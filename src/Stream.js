import React, { Component } from 'react'
const io = require('socket.io-client')
const socket = io('http://localhost:3001/')

class Stream extends Component {
  constructor(props) {
    super(props)
    this.state = { tweets: []}
  }

  componentDidMount = () => {
    socket.emit('Connected', 'Connection from front')
    socket.on('tweets', newTweet => {
      let tweets = this.state.tweets
      tweets.length >= 5 ? tweets.pop() : null
      tweets.unshift(newTweet);
      this.setState({ tweets : tweets})
      });
  }

  render (){
    return (
      <article id="first" className="container box style1 right">
        <div class="inner">
          <ul>
          {this.state.tweets.map((item,i) => <li className="tweet" key={i}>{item}</li>)}
          </ul>
          <header>
            <h2>#JavaScript</h2>
          </header>
        </div>
      </article>
    );
  }
}

export default Stream;
