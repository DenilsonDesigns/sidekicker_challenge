module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    "job title": {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    "job description": {
      type: Sequelize.STRING(500),
      allowNull: false,
      validate: {
        len: [1, 500],
      },
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    applicants: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Job;
};
