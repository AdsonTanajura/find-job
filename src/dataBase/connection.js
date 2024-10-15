import sequelice from 'sequelize';


const sequeliceDataSource = new sequelice({
    dialect: 'sqlite',
    storage: 'src/dataBase/app.db'
})

export default sequeliceDataSource;