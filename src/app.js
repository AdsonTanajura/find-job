import express from 'express';
import sequeliceDataSource from './dataBase/connection.js';

const app = express();


app.listen(3333, () => {
    console.log('Server Started on port 3333!!!');
});

//dataBase
sequeliceDataSource.authenticate().then(() => {
    console.log("Contectou ao banco com sucesso ")
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err)
})

//Routs

app.get('/', (resquest, response) => {
    response.send("Está funcionando 4");
})