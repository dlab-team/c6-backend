const { Model, DataTypes, UUIDV4 } = require('sequelize')
const COUNTRY_TABLE = require('./countryModel')

const CITY_TABLE = 'cities'

class City extends Model {
  static associate(sequelize){
    this.belongsTo(sequelize.model.Country, {
      foreignKey: 'country_id'
    })

    this.belongsToMany(sequelize.models.Profile, {
      through: 'profiles',
      foreignKey: 'city_id',
    })
  }
}

const CitySchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  countryId: {
    allowNull: false,
    type: DataTypes.UUID,
    field: 'country_id',
    unique: true,
    references: {
        model: COUNTRY_TABLE
    }
  },
}

function init(sequelize){
  City.init(ProfileSchema, {
    sequelize,
    tableName: CITY_TABLE,
    timestamps: false
  })
  return City
}

module.exports = { City, CitySchema, CITY_TABLE, init }
