import {Sequelize} from 'sequelize';

const sequelize = new Sequelize("postgres" || '', "Maryna_Rastargueva", "password", {
    dialect: 'postgres',
    protocol: 'postgres',
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected successfully.');
    } catch (error) {
        console.error('Unable to connect', error);
    }
};
testConnection();

export default sequelize;