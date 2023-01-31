const { Model, DataTypes, UUIDV4 } = require('sequelize')
const COUNTRY_TABLE = require('./countryModel')

const COUNTRY_TABLE = 'countries'

class Country extends Model {
    static associate(sequelize) {
        this.belongsToMany(sequelize.models.City, {
          through: 'cities',
          foreignKey: 'country_id',
        })
    }
}

const CountrySchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
}

function init(sequelize){
  Country.init(ProfileSchema, {
    sequelize,
    tableName: COUNTRY_TABLE,
    timestamps: false
  })
  return Country
}

module.exports = { Country, CountrySchema, COUNTRY_TABLE, init }
