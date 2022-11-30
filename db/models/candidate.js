const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Vacancy, { foreignKey: 'vacancyId' });
    }
  }
  Candidate.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    telephone: DataTypes.STRING,
    experience: DataTypes.TEXT,
    callScheduled: DataTypes.BOOLEAN,
    sendEmail: DataTypes.BOOLEAN,
    videoAssigned: DataTypes.BOOLEAN,
    sendResume: DataTypes.BOOLEAN,
    sendOffer: DataTypes.BOOLEAN,
    regected: DataTypes.BOOLEAN,
    intervewCastomer: DataTypes.BOOLEAN,
    photo: DataTypes.TEXT,
    fileResume: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    vacancyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};
