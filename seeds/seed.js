const seedUser = require('../seeds/userSeeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUser();
};

seedAll();