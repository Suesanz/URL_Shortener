const Sequelize = require('sequelize');
const sequelize = new Sequelize('shorturl', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
)
sequelize.sync()

const url=sequelize.define('url',{
    code:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true
    },
    longUrl:{
        type:Sequelize.DataTypes.STRING
    }
})
module.exports={
    addurl:function (code,longUrl,done,failed) {
        url.create({
            code:code,
            longUrl:longUrl
        }).then(function (user) {
            console.log(url)

        })
    },sequelize

}