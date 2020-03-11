const express = require('express');
const next = require('next');
const compression = require('compression');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
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

    if (process.env.MOOD = true) {
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
    };

    server.get('/debug', (req, res) => {
      if (dev === false) {
        res.sendStatus(404);
      } else {
        handle(req, res);
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:' + port);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });