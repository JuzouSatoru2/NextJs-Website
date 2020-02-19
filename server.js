const express = require('express');
const next = require('next');
const compression = require('compression');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
    
app.prepare()
.then(() => {
  const server = express();

  mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology:true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("> Connected to MongoDB");
  });

  if(dev === true){
    server.use(compression());
  };

  server.get('/dashboard', (req, res) => {
    res.sendStatus(404);
  });

  server.get('/debug', (req, res) => {
    if(dev === false){  
        res.sendStatus(404);  
    }
    else {
        handle(req, res);
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000 on');
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});