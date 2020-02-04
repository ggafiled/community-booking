const bcrypt = require('bcrypt-nodejs')
const uuidv4 = require('uuid/v4');

function hashPassword (user, options) {
    console.log("start generate salt hash");
    const SALT_FACTOR = 10
  
    if (!user.changed('u_pwd')) {
      return
    }
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
          if (err) return reject(err);

          bcrypt.hash(user.u_pwd, salt, null, function(err, hash) {
            if (err) return reject(err);
            return resolve(hash);
          });
        });
    }).then( hash => {
        user.setDataValue('u_pwd', hash)
    });
  }

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: uuidv4(),
            unique: true,
        },
        u_role: DataTypes.STRING,
        u_name: DataTypes.STRING,
        u_email: {
            type: DataTypes.STRING
        },
        u_pwd: DataTypes.STRING,
        u_imgUrl: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        tableName: "user",
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.u_pwd)
    }

    User.prototype.toJSON = function () {
        var values = Object.assign({}, this.get());
        delete values.u_pwd;
        return values;
    }

    User.associate = function (models) {}

    return User
}