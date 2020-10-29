const express = require('express');
const next = require('next');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;
const apiRoutes = require('./server/routes/apiRoutes');
const blogRoutes = require('./server/routes/articlesRoutes');
const monitorRoutes = require('./server/routes/monitorRoutes');

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());
    server.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'", 'api.github.com'],
          baseUri: ["'self'"],
          blockAllMixedContent: [],
          fontSrc: ["'self'", 'https:', 'data:'],
          frameAncestors: ["'self'"],
          imgSrc: ["'self'", 'data:'],
          objectSrc: ["'none'"],
          scriptSrc: ["'self'"],
          scriptSrcAttr: ["'none'"],
          styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
          upgradeInsecureRequests: [],
        },
      })
    );
    server.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'", 'api.github.com'],
            baseUri: ["'self'"],
            blockAllMixedContent: [],
            fontSrc: ["'self'", 'https:', 'data:'],
            frameAncestors: ["'self'"],
            imgSrc: ["'self'", 'data:'],
            objectSrc: ["'none'"],
            scriptSrc: ["'self'"],
            scriptSrcAttr: ["'none'"],
            styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
            upgradeInsecureRequests: [],
          },
        },
      })
    );
    server.use(compression());
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.set('trust proxy', true);
    server.use(
      '/api/',
      rateLimit({
        windowMs: 60000,
        max: 30,
      })
    );
    server.use('/api', apiRoutes);
    server.use('/api/blog', blogRoutes);
    server.use('/api/monitor', monitorRoutes);

    if (process.env.DATABASE_URL) {
      mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', () => {
        console.log('\x1b[36minfo', '\x1b[0m - Connected to MongoDB');
      });
    } else {
      console.log('\x1b[36minfo', '\x1b[0m - No database connection');
    }

    function verifyToken(req, res, next) {
      const bearerHeader = req.headers['authorization'];
      if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
      } else {
        res.sendStatus(403);
      }
    }

    server.post('/api/verify', verifyToken, (req, res) => {
      jwt.verify(
        req.token,
        process.env.JWT_KEY || 'secretkey',
        (err, authData) => {
          if (err) {
            res.sendStatus(403);
          } else {
            res.json({
              message: 'Verified',
              authData,
            });
          }
        }
      );
    });

    function verifyCookie(req, res, next) {
      const cookieHeader = req.cookies['bearerKey'];
      if (typeof cookieHeader !== 'undefined') {
        const cookie = cookieHeader.split(' ');
        const cookieToken = cookie[1];
        req.token = cookieToken;
        next();
      } else {
        return app.render(req, res, '/404', req.query);
      }
    }

    server.get('/admin|new|edit/*', verifyCookie, (req, res) => {
      jwt.verify(
        req.token,
        process.env.JWT_KEY || 'secretkey',
        (err, authData) => {
          if (err) {
            return app.render(req, res, '/404', req.query);
          } else {
            handle(req, res);
          }
        }
      );
    });

    server.post('/api/auth', (req, res) => {
      if (req.body.key === process.env.ADMIN_KEY) {
        const user = {
          username: req.body.username,
          email: req.body.email,
        };

        jwt.sign(
          { user },
          process.env.JWT_KEY || 'secretkey',
          { expiresIn: '24h' },
          (err, token) => {
            res.json({
              token,
            });
          }
        );
      } else {
        res.sendStatus(403);
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(
        '\x1b[36minfo',
        `\x1b[0m - Ready on http://localhost:${port} in ${
          dev ? 'development' : 'production'
        } mode`
      );
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
