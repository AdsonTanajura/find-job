import { Router } from "express";

const homeRouter = Router();

homeRouter.get('/', (resquest, response) => {
    response.send('esta funcionando!')
});

export default homeRouter;
