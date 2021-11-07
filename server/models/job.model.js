module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    "job title": {
      // @TODO: limit 100
      // @TODO: required
      type: Sequelize.STRING,
    },
    "job description": {
      // @TODO: limit 500
      // @TODO: required
      type: Sequelize.STRING,
    },
    date: {
      // @TODO: required
      type: Sequelize.STRING,
    },
    applicants: {
      // @TODO: required
      type: Sequelize.STRING,
    },
  });

  return Job;
};
