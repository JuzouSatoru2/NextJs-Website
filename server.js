const express = require('express');
const next = require('next');
const compression = require('compression');
const dotenv = require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
    
app.prepare()
.then(() => {
  const server = express();
  if(dev === true){
    app.use(compression());
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