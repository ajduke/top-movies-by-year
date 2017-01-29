const list = require(`./year_2016.json`)
const randomArray = require('unique-random-array')
const randomList = randomArray(list)

const all = (year) => list

const random = (number) => {
  if (!number) {
    return randomList()
  } else {
    const list = []
    for (let i = 0 ; i< number; i++) {
      list.push(randomList())
    }
    return list
  }
}


module.exports = {
  all,
  random
}
