const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/index')
const db = {}

const sequelize = new Sequelize(
    config.DB.DATABASE,
    config.DB.USERNAME,
    config.DB.PASSWORD,
    config.DB.OPTIONS
);

fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        console.log("model " + model)
        try {
            db[model.name] = model
            console.log("working")
        } catch (err) {
            console.error(err)
        }

    })

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db