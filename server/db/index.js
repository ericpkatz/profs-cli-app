const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {});

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  await Promise.all([
    User.create(),
    User.create(),
    User.create(),
  ]);
}

module.exports = {
  syncAndSeed,
  models: {
    User
  }
};
