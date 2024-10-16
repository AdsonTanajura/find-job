import { Router } from "express";
import jobsRouter from './jobs.js';
import homeRouter from './home.js';

const routes = Router();


routes.use('/jobs', jobsRouter);
routes.use(homeRouter);


export default routes;