import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import * as request from 'request';
import * as mcache from 'memory-cache';

// import {join} from 'path';

enableProdMode();

export const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const DIST_FOLDER = join(process.cwd(), 'dist');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', './dist/browser');

app.get('/redirect/**', (req, res) => {
  const location = req.url.substring(10);
  res.redirect(301, location);
});


// Serve only the static files form the dist directory
app.use('/docs', express.static(__dirname + '/docs'));

const cache = (duration) => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url;
    const cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

app.get('/api/v1/social-wall', cache(300), (req, res) => {
  const path = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=552320988.0b4256f.c9c8f372c6f140a7a0b97e5a1c8f6dca';
  request.get(path, (error, resp, body) => {
    if (error) {
      res.status(500).send({
        data: error,
        status: 'KO'
      });
    }
    console.log('response code from instagram: ' + resp.statusCode);
    if (resp.statusCode !== 200) {
      res.status(500).send({
        data: JSON.parse(body),
        status: resp.statusMessage
      });
    }
    if (resp.statusCode === 200) {
      res.status(200).send({
        data: JSON.parse(body),
        status: resp.statusMessage
      });
    }
  });
});

app.get('/api/v1/hello', (req, res) => {
  res.send({
    data: 'Hello. Current date is ' + (new Date()).toUTCString(),
    status: 'OK'
  });
});

app.get('*.*', express.static('./dist/browser', {
  maxAge: '1y'
}));

app.get('/*', (req, res) => {
  res.render('index', {
    req,
    res,
    providers: [{
      provide: 'serverUrl',
      useValue: `${req.protocol}://${req.get('host')}`
    }]
  }, (err, html) => {
    if (html) {
      res.send(html);
    } else {
      console.error(err);
      res.send(err);
    }
  });
});
