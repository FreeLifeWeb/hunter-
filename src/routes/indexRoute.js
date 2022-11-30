import express from 'express';

const getRoute = express.Router();

getRoute.get('/', (req, res) => {
  res.render('Layout');
});

getRoute.get('/reg', (req, res) => {
  res.render('Layout');
});

getRoute.get('/auth', (req, res) => {
  res.render('Layout');
});

export default getRoute;
