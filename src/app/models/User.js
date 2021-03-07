import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'scrapbook',
        tableName: 'user',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Post, {
      as: 'post',
      foreignKey: 'user_id',
    });
  }
}

export default User;
