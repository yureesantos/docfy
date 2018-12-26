module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('User', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    expires: DataTypes.STRING,
    data: DataTypes.TEXT
  })

  return Session
}
