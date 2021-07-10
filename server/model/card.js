export default function (sequelize, DataTypes) {
  var Card = sequelize.define('card', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    token_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    image: DataTypes.STRING,
    avatar: DataTypes.STRING,
    description: DataTypes.STRING,
    attribute: DataTypes.STRING,
    external_url: DataTypes.STRING,
    background_color: DataTypes.STRING,
    card_state: DataTypes.INTEGER,
    create_date: DataTypes.INTEGER,
    transactionHash: DataTypes.INTEGER,
  })
  Card.sync();
  return Card;
}
