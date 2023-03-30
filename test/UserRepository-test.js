import { assert } from 'chai';
import UserRepository from '../src/UserRepository';


describe('User Repository', () => {

  let user1;
  let user2;
  let user3;
  let users;

  beforeEach(() => {
    
    user1 = new UserRepository(1, 'Trystan Gorczany', '9484 Lucas Flat, West Kittymouth WA 67504', 'Taurean_Pollich31@gmail.com', 4, 7000, [5, 43, 46, 11])
    user2 = new UserRepository(2, 'Tyreek VonRueden', '623 Koelpin Skyway, Lake Luigichester MN 77576-1678', 'Nicolette_Halvorson43@yahoo.com', 4.5, 9000, [13, 19, 3])
    user3 = new UserRepository(3, 'Colt Rohan', '48010 Balistreri Harbor, Cleobury IN 43317', 'Wilford.Barton@gmail.com', 2.7, 3000, [31, 16, 15, 7])    
    users = [user1, user2, user3]
  })

  it('should be a function', function () {

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

  it('should have a daily step goal', function() {

    assert.equal(user2.dailyStepGoal, 9000)
  })

  it('should have friends', function() {

    assert.deepEqual(user3.friends, [31, 16, 15, 7])
  })

  it('should return a user based on the id', function() {

    
    assert.deepEqual(user1.getUserData(1, users), user1)
    
    
    assert.deepEqual(user2.getUserData(2, users), user2)
    
  
    assert.deepEqual(user3.getUserData(3, users), user3)

  })

  it('should return average steps of all users', function() {

    assert.equal(user1.getAverageSteps(users), 6333)
    assert.equal(user2.getAverageSteps(users), 6333)
    assert.equal(user3.getAverageSteps(users), 6333)
  })

  it('should return the first name of the user', function() {

    assert.equal(user1.getFirstName(1, users), 'Trystan')
    assert.equal(user2.getFirstName(2, users), 'Tyreek')
    assert.equal(user1.getFirstName(3, users), 'Colt')
  })
  
});

