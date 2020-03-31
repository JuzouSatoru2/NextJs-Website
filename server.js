const express = require('express');
const next = require('next');
const compression = require('compression');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;
const apiRoutes = require('./server/routes/apiRoutes.js');

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.set('trust proxy', true);
    server.use('/api', apiRoutes);

    if (process.env.MOOD==='activate') {
      server.use(cors());
      server.use(helmet());
      server.use(compression());
      mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', () => {
        console.log("> Connected to MongoDB");
      });
    }

    server.get('/debug', (req, res) => {
      if (dev === false) {
        res.sendStatus(404);
      } else {
        handle(req, res);
      }
    });

    function verifyToken(req, res, next) {
      const bearerHeader = req.headers['authorization'];
      if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
      } else {
        res.sendStatus(403);
      }
    }
    
    server.post('/api/verify', verifyToken, (req, res) => {  
      jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          res.json({
            message: 'Verified',
            authData
          });
        }
      });
    });
    
    server.post('/api/auth', (req, res) => {
      if(req.body.key===process.env.ADMIN_KEY){
      const user = {
        id: "1", 
        username: req.body.username,
        email: req.body.email
      };
    
      jwt.sign({user}, 'secretkey', { expiresIn: '24h' }, (err, token) => {
        res.json({
          token
        });
      });
    } else {
      res.sendStatus(403);
    }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });