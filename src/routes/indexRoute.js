import express from 'express';
import { Vacancy, Candidate } from '../../db/models';
import upload from '../utils/multer';

const getRoute = express.Router();

getRoute.get('/', async (req, res) => {
  const allVacancy = await Vacancy.findAll();
  const allCandidates = await Candidate.findAll();
  const initState = { allVacancy, allCandidates };
  console.log(allVacancy);
  res.render('Layout', initState);
});

getRoute.get('/reg', (req, res) => {
  res.render('Layout');
});

getRoute.get('/new', async (req, res) => {
  const vacancies = await Vacancy.findAll();
  const initState = { vacancies };
  res.render('Layout', initState);
});

getRoute.get('/auth', (req, res) => {
  res.render('Layout');
});

getRoute.post('/new', upload.single('avatar'), async (req, res) => {
  console.log(req.file.path, 'REQQQQQQFILE');
  await Candidate.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: Number(req.body.age),
    telephone: req.body.telephone,
    experience: req.body.experience,
    callScheduled: false,
    sendEmail: false,
    videoAssigned: false,
    sendResume: false,
    sendOffer: false,
    regected: false,
    intervewCastomer: false,
    photo: req.file?.path,
    fileResume: req.body.fileResume,
    userId: Number(req.session.user.id),
    vacancyId: Number(req.body.vacancyId),
  });
  res.sendStatus(200);
});

export default getRoute;
