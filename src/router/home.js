import { Router } from 'express';
import { Op } from 'sequelize'; 
import Job from '../models/Job.js';

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
  const search = req.query.job ? req.query.job.trim() : null; 
  console.log(search);

  if (!search) {
    Job.findAll({
      order: [['createdAt', 'DESC']]
    })
    .then(jobs => {
      res.render('index', {
        jobs
      });
    })
    .catch(err => console.log(err));
  } else {
    const query = '%' + search + '%';
    Job.findAll({
      where: {
        title: {
          [Op.like]: query
        }
      },
      order: [['createdAt', 'DESC']]
    })
    .then(jobs => {
      res.render('index', {
        jobs,
        search
      });
    })
    .catch(err => console.log(err));
  }
});

export default homeRouter;