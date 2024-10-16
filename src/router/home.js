import { Router } from "express";

const homeRouter = Router();

homeRouter.get('/', (resquest, response) => {
    response.render('index');
});

export default homeRouter;
