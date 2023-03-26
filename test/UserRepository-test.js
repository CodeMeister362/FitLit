import { assert } from 'chai';
import UserRepository from '../src/UserRepository';


describe('User Repository', () => {

  let user1;
  let user2;
  let user3

  beforeEach(() => {

  user1 = new UserRepository(1, 'Trystan Gorczany', '9484 Lucas Flat, West Kittymouth WA 67504', 'Taurean_Pollich31@gmail.com', 4, 7000, [5, 43, 46, 11])
  user2 = new UserRepository(2, 'Tyreek VonRueden', '623 Koelpin Skyway, Lake Luigichester MN 77576-1678', 'Nicolette_Halvorson43@yahoo.com', 4.5, 9000, [13, 19, 3])
  user3 = new UserRepository(3, 'Colt Rohan', '48010 Balistreri Harbor, Cleobury IN 43317', 'Wilford.Barton@gmail.com', 2.7, 3000, [31, 16, 15, 7])    

  })

  it('should be a function', function () {
    // expect(UserRepository).to.be.a('function');
    assert.isFunction(UserRepository);
  });

  it('should have an id', function() {

    assert.equal(user1.id, 1)
  })

  it('should have a name', function() {

    assert.equal(user2.name, 'Tyreek VonRueden')
    
  })

  it('should have an address', function() {
    
    assert.equal(user3.address, '48010 Balistreri Harbor, Cleobury IN 43317')
  })

  it('should have an email', function() {

    assert.equal(user1.email, 'Taurean_Pollich31@gmail.com')
  })

  it('should have a stride length', function() {

    assert.equal(user2.strideLength, 4.5)
  })

  it.skip('should have friends', function() {

    assert.equal(UserRepository.friends, [friends])
  })
});