import { Router } from 'express';
import { Op } from 'sequelize'; // Importe corretamente o Op
import Job from '../models/Job.js';

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
  const search = req.query.job ? req.query.job.trim() : null; // Certifique-se de que search não é indefinido
  console.log(search);

  if (!search) {
    // Se não houver busca, exiba todas as vagas
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
    // Se houver busca, filtre por título da vaga
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