const expect = require('chai').expect
const app = require('./app')

describe('Movies list', ()=>{
  it('should get all movies in array', ()=>{
    const allList = app.all()
    expect(allList).to.be.a('array');
  })

  it('should get contain `La La Land`', ()=>{
    const allList = app.all()
    expect(allList).includes('La La Land');
  })

  it('should get one movie', ()=>{
    const randomItem = app.random()
    expect(randomItem).to.be.a('string');
    expect(app.all()).includes(randomItem);
  })

  it('should return 3 random numbers', ()=>{
    const randomItems =  app.random(3)
    expect(randomItems).to.have.lengthOf(3)
    randomItems.forEach((item)=>{
      expect(item).to.be.a('string')
      expect(app.all()).includes(item);
    })
  })
})
