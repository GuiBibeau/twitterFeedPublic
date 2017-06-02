const { createStore } = require('redux')
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
//
var tweets = []
var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', (event) => {
  tweets.length > 5 ? tweets.shift() : null
  tweets.push(event.text)
    io.emit('tweets', tweets[tweets.length -1])
  console.log('new tweet');
});

stream.on('error', function(error) {
  throw error;
});


io.on('connection', (socket) => {
  socket.on('Connected', (msg) => { console.log('this was sent from the fron' + msg)})
});

http.listen(process.env.PORT || 3000, function(){
  console.log('server has started');
});
