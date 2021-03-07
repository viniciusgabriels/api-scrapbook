module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'post',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'user',
            key: 'id',
          },
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: 'post',
        schema: 'scrapbook',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'post',
      schema: 'scrapbook',
    });
  },
};
