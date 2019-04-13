# DevConnector
Practice full stack social network MERN Web App. Use of MongoDB, Express, React, Redux, and Node.

Live Heroku deployment: https://pure-stream-95176.herokuapp.com/

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

## App Info

### Author

David Han

### Version

1.0.0

### License

This project is licensed under the MIT License
