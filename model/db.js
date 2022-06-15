import { Sequelize } from 'sequelize';
import { db } from '../config/config.js';

const sequelizeClient = new Sequelize(db.database, db.user, db.password,{
    host: db.host,
    dialect: 'postgres',
     dialectOptions: {
         ssl: {
           require: true,
           rejectUnauthorized: false
         }
       }
});


sequelizeClient.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(() => {
        console.log('no se conecto')
    })
    ;
export  const getData = {sequelizeClient} ;