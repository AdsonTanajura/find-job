import { Router } from "express";
import jobsRouter from './jobs.js';

const routes = Router();


routes.use('/jobs', jobsRouter);


export default routes;