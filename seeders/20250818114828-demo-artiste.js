const crypto = require("crypto");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Artistes", [
      {
        id: crypto.randomUUID(),
        name: "John Doe",
        gender: "Male",
        genre: "Pop",
        country: "Unknown",
        is_Married: true,
        record_label: "DBA Music",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artistes", null, {});
  },
};
