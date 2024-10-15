import sequelice from 'sequelize';
import sequeliceDataSource from './dataBase/connection.js';

const Job = sequeliceDataSource.define('job', {
    title: {
        type: sequelice.STRING,
    },
    description: {
        type: sequelice.STRING,
    },
    salary: {
        type: sequelice.STRING,
    },
    company: {
        type: sequelice.STRING,
    },
    email: {
        type: sequelice.STRING,
    },
    new_job: {
        type: sequelice.INTEGER,
    }
});

export default Job;