const { User } = require('/models');

const userData = [{
        name: 'John',
        email: 'john@email.com',
        password: 'rootroot'

    },
    {
        name: 'Dylan',
        email: 'dylan@email.com',
        password: 'rootroot'
    },
    {
        name: 'Brandon',
        email: 'brandon@email.com',
        password: 'rootroot'
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true, 
    returning: true
});

module.exports = seedUsers;