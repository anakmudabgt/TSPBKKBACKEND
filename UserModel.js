import {Sequelize} from 'sequelize';
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const ListData = db.define('List-Artikel',{
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
},{
    freezeTableName: true,
    timestamps: false
});

export default ListData;

(async()=> {
    await db.sync();
})();