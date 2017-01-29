const list = require(`./year_2016.json`)
const randomArray = require('unique-random-array')

const all = (year) => list
const random = randomArray(list)

module.exports = {
  all,
  random
}
