import { Router } from "express";
import Job from "../models/Job.js";


const homeRouter = Router();

homeRouter.get('/', (resquest, response) => {
    Job.findAll({order: [
        ['createdAt', 'DESC']
      ]})
      .then(jobs => {
    
        response.render('index', {
          jobs
        });
    
      })
      .catch(err => console.log(err));
});

export default homeRouter;
