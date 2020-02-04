require('dotenv').config()
module.exports = {
    PORT: 8081,
    COOKIE:{
        COOKIE_KEY: process.env.COOKIE_KEY || "ggafiled.io.tryz.cookie#"
    },
    JWT:{
        EXP: 60 * 60 * 24 * 7,
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "ggafiled.io.tryz.verify#Alpha.babilon.com#Huangboxuan.mt.com#Dhl2020002.dhl.com"
    },
    DB:{
        DATABASE: process.env.DB_NAME || "room_booking",
        USERNAME: process.env.DB_USERNAME || "root",
        PASSWORD: process.env.DB_PASSWORD || "",
        OPTIONS:{
            dialect: process.env.DIALECT || "mysql",
            host: process.env.HOST || "localhost",
            port: process.env.DB_PORT || 3306
        }
    }
}