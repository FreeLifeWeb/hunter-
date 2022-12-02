const { faker } = require('@faker-js/faker');

function createRandomCandidate() {
  const arr = [];

  for (let i = 0; i < 15; i++) {
    arr.push({
      // tag: faker.word.noun(5),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      age: faker.random.numeric(2),
      telephone: faker.phone.number(),
      experience: faker.lorem.text(),
      callScheduled: false,
      sendEmail: false,
      videoAssigned: false,
      sendResume: false,
      sendOffer: false,
      regected: false,
      intervewCastomer: false,
      photo: faker.internet.avatar(),
      fileResume: faker.animal.rabbit(),
      userId: 1,
      vacancyId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return arr;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Candidates', createRandomCandidate(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidates', null, {});
  },
};

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('Vacancies', [
//       {
//         currentVacancy: 'Юрист',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         currentVacancy: 'Художник',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         currentVacancy: 'Грузчик',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ], {});
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete('Vacancies', null, {});
//   },
// };
