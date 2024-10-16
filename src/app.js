import express from 'express';
import expressHendlebars from 'express-handlebars';
import path from 'path';
import sequeliceDataSource from './dataBase/connection.js';
import bodyParser from 'body-parser';
import routes from './router/index.js';


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.listen(3333, () => {
    console.log('Server Started on port 3333!!!');
});

//dataBase
sequeliceDataSource.authenticate().then(() => {
    console.log("Contectou ao banco com sucesso ")
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err)
})

//handle barr
app.set('views'. path.join(__dirname, 'views'));
app.engine('handlebars', expressHendlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');