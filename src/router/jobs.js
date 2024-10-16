import { Router } from "express";
import Job from "../models/Job.js";

const jobsRouter = Router();

jobsRouter.get('/add', (request, response) => {
    response.render('add');
  });

jobsRouter.post('/add', (resquest, response) => {

    const { title, salary, company, description, email, new_job } = resquest.body;

    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => response.redirect('/'))
    .catch(err => console.log(err));

})

export default jobsRouter;
