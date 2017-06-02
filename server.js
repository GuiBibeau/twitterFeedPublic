const { createStore } = require('redux')
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key:  'ZWW2k1muXdiCuwhzqN9RvORmV',
  consumer_secret:  'K78xOcKfImZuNOQIPCt8qc7Iz096apPxbBfnTfQ2D1cRSSlMZe',
  access_token_key:  '378169226-ZqXLg4z0ouFvosEdmnqk28wlBowiwb78Y0uZ6upu',
  access_token_secret: 'Gbi9Fev9hyr6088kUq35kKxPQjisuDADLITDettsEFXV7'
})
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
