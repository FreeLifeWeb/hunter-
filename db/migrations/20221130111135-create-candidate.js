/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      telephone: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.TEXT,
      },
      callScheduled: {
        type: Sequelize.BOOLEAN,
      },
      sendEmail: {
        type: Sequelize.BOOLEAN,
      },
      videoAssigned: {
        type: Sequelize.BOOLEAN,
      },
      sendResume: {
        type: Sequelize.BOOLEAN,
      },
      sendOffer: {
        type: Sequelize.BOOLEAN,
      },
      regected: {
        type: Sequelize.BOOLEAN,
      },
      intervewCastomer: {
        type: Sequelize.BOOLEAN,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      fileResume: {
        type: Sequelize.TEXT,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      vacancyId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Vacancies',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidates');
  },
};
