# intro

this project was a coding challenge to create a board of recent tweets. I decided to use the twitter streaming API to make a twitter feed about javascript instead

## Stack used

the back end is a express node server connecting to the twitter streaming API
the node 'twitter' module was used for this purpose. I've used socket.IO on the back to connect to the clients.

The front end is a react application that will display at all time the 5 most recent tweets. socket.io-client is used to connect to the server and keep the connection alive.

## Installation

clone this repo
```
git clone git@github.com:gbibeaul/twitter-challenge.git

```
cd into the project folder
```
npm install
```

inside server.js include your twitter api keys
```
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || 'ZWW2k1muXdiCuwhzqN9RvORmV',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'K78xOcKfImZuNOQIPCt8qc7Iz096apPxbBfnTfQ2D1cRSSlMZe',
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '378169226-ZqXLg4z0ouFvosEdmnqk28wlBowiwb78Y0uZ6upu',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET  || 'Gbi9Fev9hyr6088kUq35kKxPQjisuDADLITDettsEFXV7'
})
```
