import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import sequeliceDataSource from './dataBase/connection.js';
import bodyParser from 'body-parser';
import routes from './router/index.js';

// Obter o nome do arquivo e diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(3333, () => {
    console.log('Server Started on port 3333!!!');
});

// Banco de dados
sequeliceDataSource.authenticate().then(() => {
    console.log("Conectou ao banco com sucesso");
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
});

// Configuração do Handlebars
const hbs = create({ defaultLayout: 'main' }); // Usando .create()

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine); // Usando o motor correto
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));