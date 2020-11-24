import {Sequelize} from 'sequelize';

//Database Conection:
const sequelize = new Sequelize('mysql://root:root@localhost:3306/shortening_url')

export default sequelize;