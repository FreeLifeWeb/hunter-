import express from 'express';
import { Op } from 'sequelize';
import {
  Candidate, Sequelize, User, Vacancy,
} from '../../db/models';

const apiRoute = express.Router();

apiRoute.post('/candidates', async (req, res) => {
  try {
    const body1 = req.body;
    // console.log('================', body1);
    // const test = {};
    // const arr = Object.entries(body1);
    // for (let i = 0; i < arr.length; i++) {
    //   test[arr[i][0]] = {
    //     {[Op.eq]: arr[i][1]},
    //   };
    // }
    console.log('-----------', body1);
    const result = await Candidate.findAll({
      where: Sequelize.and(
        Sequelize.or(
          { callScheduled: { [Op.eq]: body1?.callScheduled } },
          { sendEmail: { [Op.eq]: body1?.sendEmail } },
          { regected: { [Op.eq]: body1?.regected } },
          { sendOffer: { [Op.eq]: body1?.sendOffer } },
          { videoAssigned: { [Op.eq]: body1?.videoAssigned } },
          { sendResume: { [Op.eq]: body1?.sendResume } },
          { intervewCastomer: { [Op.eq]: body1?.intervewCastomer } },
        ),
        Sequelize.or(
          {
            vacancyId: { [Op.in]: body1?.vacancyId.specialist },
          },
        ),
      ),
    });
    res.json(result).status(200);
    console.log(JSON.parse(JSON.stringify(result)));
  } catch (err) {
    console.log({ err: err.message });
  }
});

apiRoute.get('/candidates/:id', async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const OneCardCandidate = await Candidate.findOne({ where: { id } });
  console.log(OneCardCandidate);
  const initState = { OneCardCandidate };
  res.render('Layout', initState);
});

export default apiRoute;
